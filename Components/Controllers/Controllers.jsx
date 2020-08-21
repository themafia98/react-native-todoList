import React from 'react';
import style from './Controllers.style';
import { View, TextInput, Button } from 'react-native';

const Controllers = ({}) => {

    return (
        <View style={style.controllers}>
            <TextInput style={style.inputText} placeholder="Enter todo" />
            <Button title="submit" />
        </View>
    )
};

export default Controllers;