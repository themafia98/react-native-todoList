import React from 'react';
import style from './TodoItem.style';
import { Text } from 'react-native';
import { string } from 'prop-types';

const TodoItem = ({ children }) => {

    return(
        <Text>{children}</Text>
    );
};

TodoItem.defaultProps = {
    children: ""
};

TodoItem.propsTypes = {
    children: string.isRequired
}

export default TodoItem;