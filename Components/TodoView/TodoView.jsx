import React from 'react';
import style from './TodoView.style';
import { Text, SafeAreaView } from 'react-native';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { func, string } from 'prop-types';
import { onClosePopupAction } from '../../Redux/AppStorage/actions';

const TodoView = ({ onPress: onPressProps, id, date, name }) => {

  const dispatch = useDispatch();

  const onClosePopup = event => {
    if (onPressProps) onPressProps(event);

    if (id) dispatch(onClosePopupAction(id));
    else console.error("Bad id for open popup");
  }

  const onDeleteTodo = (event) => {


    onClosePopup(event);
  };

  return (
    <SafeAreaView>
      <Button 
        onPress={onClosePopup} 
        customStyle={style.closePopupButton}
      > 
        X 
      </Button>
      <SafeAreaView 
        style={style.popupContentSection}
      >
        <Text 
          style={style.todoText}
        >
          {date}
        </Text>
        <Button 
          onPress={onDeleteTodo} 
          customStyle={style.deleteTodoButton}
        >
          Delete todo
        </Button>
        <Text 
          style={style.todoText}
        >
          {name}
        </Text>
        <Text 
          style={style.noteText}
        >
          additional notes
        </Text>
        <Text 
          style={style.editableText}
        >
          click for add note
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  )
};

TodoView.defaultProps = {
  date: "",
  name: "",
  onPressProps: null
};

TodoView.propTypes = {
  date: string.isRequired,
  name: string.isRequired,
  onPressProps: func
};

export default TodoView;