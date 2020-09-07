import React, { useCallback, useState, useMemo, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Container.style';
import { SafeAreaView, FlatList } from 'react-native';
import TodoItem from '../TodoItem';
import { sortByType } from '../../Utils';
import { fetchTodosListAction } from '../../Redux/AppStorage/actions';
import FirebaseContext from '../../Models/Helpers/FirebaseContext/Firebase.context';
import { func } from 'prop-types';

const Container = ({ onChangePopupVisibility }) => {
  const [selectedId, setSelectedId] = useState(null);
  const api = useContext(FirebaseContext);

  const dispatch = useDispatch();

  const [todosList, sortType] = useSelector(({ appReducer }) => ([appReducer.todosList, appReducer.sortType]));
  const { uid = "" } = useMemo(() => api.getCurrentUser() || {}, [api]);

  useEffect(() => {
    dispatch(fetchTodosListAction(uid));
  }, [uid]);

  const onPressSelect = useCallback((id) => {
    setSelectedId(id);

    if (onChangePopupVisibility) onChangePopupVisibility();
  }, [onChangePopupVisibility, setSelectedId]);

  const todosListRender = useCallback(({ item = {} }) => (
    <TodoItem
      id={item.id}
      key={item.id}
      className={item?.className || ""}
      onPress={onPressSelect.bind(this, item.id)}
      isSelected={item.id === selectedId}
    >
      {item?.name}
    </TodoItem>
  ), [todosList, selectedId]);

  const sortedDataList = useMemo(() => sortByType(sortType, todosList), [sortType, todosList]);

  return (
    <SafeAreaView style={style.todoListBox}>
      <FlatList
        data={sortedDataList}
        renderItem={todosListRender}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
};

Container.defaultProps = {
  onChangePopupVisibility: null,
};

Container.propTypes = {
  onChangePopupVisibility: func,
};

export default Container;