import React, { useState } from 'react';
import style from './ModalWrapper.style';
import { Text, View, Modal } from "react-native";

const ModalWrapper = ({ }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={style.modalContainer} >
      <Modal
        animationType="fade"
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={style.modalContainer}>
          <View stlye={style.modalView}>
              <Text onPress={() => setVisible(state => !state)}>test</Text>
          </View>
        </View>
      </Modal>
    </View>
  )
};

export default ModalWrapper;