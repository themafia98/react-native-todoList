import React from 'react';
import style from './TodoView.style';
import { Text, SafeAreaView } from 'react-native';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { func } from 'prop-types';
import { onClosePopupAction } from '../../Redux/AppStorage/actions';

const TodoView = ({ onPress: onPressProps, id }) => {

  const dispatch = useDispatch();

  const onClosePopup = event => {
    if (onPressProps) onPressProps(event);

    if (id) dispatch(onClosePopupAction(id));
    else console.error("Bad id for open popup");
  }

  return (
    <SafeAreaView>
      <Button 
        onPress={onClosePopup} 
        customStyle={style.closePopupButton}
      > 
        X 
      </Button>
      <SafeAreaView style={style.popupContentSection}>
        <Text>11.11.11</Text>
        <Button>Delete todo</Button>
        <Text>Title</Text>
        <Text>additional notes</Text>
        <Text>click for add note</Text>
      </SafeAreaView>
    </SafeAreaView>
  )
};

TodoView.defaultProps = {
  onPressProps: null
};

TodoView.propTypes = {
  onPressProps: func
};

export default TodoView;