import React from 'react';
import style from './TodoItem.style';
import { Text, View, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';

const TodoItem = ({ children, onPress, isSelected, className }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style.item, isSelected ? style.selected : null, style?.[className]]}>
        <Text style={style.itemText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

TodoItem.defaultProps = {
  isSelected: false,
  onPress: null,
  children: "",
  className: ""
};

TodoItem.propTypes = {
  onPress: func,
  children: string.isRequired
}

export default TodoItem;