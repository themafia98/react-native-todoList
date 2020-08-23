import React, { useCallback, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'react-native-uuid';
import style from './Container.style';
import { SafeAreaView, FlatList } from 'react-native';
import TodoItem from '../TodoItem';
import { sortByType } from '../../Utils';

const Container = ({ todosList, sortType }) => {
  const [selectedId, setSelectedId] = useState(null);

  const todosListRender = useCallback(({ item = {} }) => (
      <TodoItem 
        key={item?.id}
        onPress={() => setSelectedId(item?.id)}
        isSelected={item?.id === selectedId}
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
        keyExtractor={(item) => item?.id || uuid()}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
};

Container.defaultProps = {
  todosList: [],
  sortType: "all"
};

const mapStateToProps = ({ appReducer }) => {
  const { todosList, sortType } = appReducer;
  return {
    todosList,
    sortType
  };
};

export default connect(mapStateToProps)(Container);