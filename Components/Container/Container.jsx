import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'react-native-uuid';
import style from './Container.style';
import { SafeAreaView, FlatList } from 'react-native';
import TodoItem from '../TodoItem';

const Container = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);

  const todosListRender = useCallback(({ item = {} }) => (
      <TodoItem 
        key={item?.id}
        onPress={() => setSelectedId(item?.id)}
        isSelected={item?.id === selectedId}
      >
        {item?.name}
      </TodoItem>
  ), [items, selectedId]);

  return (
    <SafeAreaView style={style.todoListBox}>
      <FlatList
        data={items}
        renderItem={todosListRender}
        keyExtractor={(item) => item?.id || uuid()}
        extraData={selectedId}
      />
    </SafeAreaView>
  )
};

Container.defaultProps = {
  items: [
    { name: "todo 1", id: uuid() }, 
    { name: "todo 2", id: uuid() },
    { name: "todo 3", id: uuid() },
    { name: "todo 4", id: uuid() }, 
    { name: "todo 5", id: uuid() }
  ]
};

export default Container;