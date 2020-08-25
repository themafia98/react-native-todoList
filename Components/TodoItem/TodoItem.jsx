import React from 'react';
import style from './TodoItem.style';
import { useDispatch } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';
import { onOpenPopupAction } from '../../Redux/AppStorage/actions';

const TodoItem = ({ children, onPress: onPressProps, isSelected, className, id }) => {

  const dispatch = useDispatch();

  const onPress = event => {
    if (onPressProps) onPressProps(event);

    if (id) dispatch(onOpenPopupAction(id));
    else console.error("Bad id for open popup");
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style.item, isSelected ? style.selected : null, style?.[className]]}>
        <Text style={style.itemText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

TodoItem.defaultProps = {
  id: null,
  isSelected: false,
  onPress: null,
  children: "",
  className: ""
};

TodoItem.propTypes = {
  id: string.isRequired,
  onPress: func,
  children: string.isRequired
}

export default TodoItem;