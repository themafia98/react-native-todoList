import React, { useState } from 'react';
import style from './Window.style';
import { Text, Modal, TouchableHighlight, SafeAreaView } from "react-native";
import { bool, string, oneOfType, oneOf, object } from 'prop-types';

const Window = ({
  isActiveVisibility,
  titleOpenButton,
  titleHideModal,
  children
}) => (
    <SafeAreaView style={style.centeredView}>
      <Modal>
        <SafeAreaView style={style.centeredView}>
          <SafeAreaView style={style.modalView}>
            {children}
            {isActiveVisibility ? (
              <TouchableHighlight
                style={{ ...style.openButton, backgroundColor: "#2196F3" }}
                onPress={onPress}
              >
                <Text style={style.textStyle}>
                  {titleHideModal ? titleHideModal : "Hide Modal"}
                </Text>
              </TouchableHighlight>
            ) : null
            }
          </SafeAreaView>
        </SafeAreaView>
      </Modal>

      {isActiveVisibility ?
        <TouchableHighlight
          style={style.openButton}
          onPress={onPress}
        >
          <Text style={style.textStyle}>
            {titleOpenButton ? titleOpenButton : "Show Modal"}
          </Text>
        </TouchableHighlight>
        : null}
     </SafeAreaView>
);

Window.defaultProps = {
  children: null,
  isActiveVisibility: false,
  animationType: "fade",
  titleHideModal: "",
  titleOpenButton: ""
};

Window.propTypes = {
  children: oneOfType([object, oneOf([null])]),
  animationType: string.isRequired,
  isActiveVisibility: bool.isRequired,
  titleHideModal: string.isRequired,
  titleOpenButton: string.isRequired
}

export default Window;