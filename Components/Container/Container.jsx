import React, { useMemo } from 'react';
import style from './Container.style';
import { View  } from 'react-native';
import TodoItem from '../TodoItem';

const Container = ({ items }) => {

    const todosList = useMemo(() => items.map(it => {
        return <TodoItem>{it}</TodoItem>;
    }), [items]);

    return (
       <View style={style.todoListBox}>
           {todosList}
       </View>
    )
};

Container.defaultProps = {
    items: ["todo 1", "todo 2", "todo 3"]
};

export default Container;