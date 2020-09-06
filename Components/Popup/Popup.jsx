import React, { useState } from 'react';
import { number, object, string, oneOfType, func, bool, array, oneOf } from "prop-types";
import { SafeAreaView } from "react-native";
import style from './Popup.style';
import Button from "../Button";

const Popup = ({ popupId, size, customVisibilityEvent, visibility, children }) => {
  const [visible, setVisible] = useState(false);

  const isUncontrolledVisibility = customVisibilityEvent !== null;

  const onChangeVisibility = () => setVisible(visibility => !visibility);


  if (!popupId) return null;

  return (
    <>
    {!isUncontrolledVisibility ? (
      <Button onPress={onChangeVisibility}>Open popup</Button>
    ) : null}
    <SafeAreaView style={style.poupWrapper}>
      <SafeAreaView
        style={[style.popup, style[size], (visible || visibility) && style.visible]}
      >
        {children}
      </SafeAreaView>
    </SafeAreaView>
    </>
  );
};

Popup.defaultProps = {
  size: "medium",
  children: null,
  customVisibilityEvent: null,
  visibility: false,
  popupId: null
};

Popup.propTypes = {
  size: string.isRequired,
  popupId: oneOfType([number, oneOf([null])]),
  customVisibilityEvent: func,
  visibility: bool,
  children: oneOfType([number, string, object, array]),
};

export default Popup;