import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'react-native-uuid';
import style from './Container.style';
import { SafeAreaView, FlatList } from 'react-native';
import TodoItem from '../TodoItem';

const Container = ({ todosList }) => {
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

  return (
    <SafeAreaView style={style.todoListBox}>
      <FlatList
        data={todosList}
        renderItem={todosListRender}
        keyExtractor={(item) => item?.id || uuid()}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
};

Container.defaultProps = {
  todosList: []
};

const mapStateToProps = ({ appReducer }) => {
  const { todosList } = appReducer;
  return {
    todosList
  };
};

export default connect(mapStateToProps)(Container);