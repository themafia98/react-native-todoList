import React, { useState } from 'react';
import style from './ModalWrapper.style';
import { Text, View, Modal, TouchableHighlight } from "react-native";
import { bool, string, oneOfType, oneOf, object } from 'prop-types';

const ModalWrapper = ({ 
  isActiveVisibility, 
  titleOpenButton, 
  titleHideModal, 
  children, 
  animationType 
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    setModalVisible(state => !state);
  }

  return (
    <View style={style.centeredView}>
      <Modal
        animationType={animationType}
        transparent={true}
        visible={!isActiveVisibility ? true : modalVisible}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
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
          </View>
        </View>
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
    </View>
  );
};

ModalWrapper.defaultProps = {
  children: null,
  isActiveVisibility: false,
  animationType: "fade",
  titleHideModal: "",
  titleOpenButton: ""
};

ModalWrapper.propTypes = {
  children: oneOfType([object, oneOf([null])]),
  animationType: string.isRequired,
  isActiveVisibility: bool.isRequired,
  titleHideModal: string.isRequired,
  titleOpenButton: string.isRequired
}

export default ModalWrapper;