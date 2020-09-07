import React, { useState } from 'react';
import style from './TodoView.style';
import { Text, SafeAreaView, TextInput } from 'react-native';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { func, string } from 'prop-types';
import { onClosePopupAction, fetchDeleteTodoActin, fetchEditNoteAction } from '../../Redux/AppStorage/actions';

const TodoView = ({ onPress: onPressProps, id, date, name, note }) => {

  const [noteValue, setNoteValue] = useState(note);
  const [isEditable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const onClosePopup = event => {
    if (onPressProps) onPressProps(event);

    if (id) dispatch(onClosePopupAction(id));
    else console.error("Bad id for open popup");
  };

  const onChangeNote = noteText => setNoteValue(noteText);
  const onChangeNoteMode = () => setEditable(state => !state);

  const onSubmitNote = () => {
    onChangeNoteMode();

    dispatch(fetchEditNoteAction({ id, note: noteValue }))
  }

  const onDeleteTodo = event => {
    dispatch(fetchDeleteTodoActin(id));
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
        {!isEditable ? (
          <Text 
            onPress={onChangeNoteMode}
            style={style.editableText}
          >
            {noteValue}
          </Text>
        )
        : (
          <>
            <TextInput
              multiline={true}
              value={noteValue}
              style={style.editableText}
              onChangeText={onChangeNote}
            />
            <Button 
              customStyle={style.submitNoteButton}
              onPress={onSubmitNote}
            >
              Edit
            </Button>
          </>
        )}
      </SafeAreaView>
    </SafeAreaView>
  )
};

TodoView.defaultProps = {
  onPressProps: null,
  name: "",
  date: "",
  note: "click for add note"
};

TodoView.propTypes = {
  date: string,
  name: string,
  note: string,
  onPressProps: func
};

export default TodoView;