import React from 'react';
import DatePicker from 'react-native-datepicker';
import style from './Controllers.style';
import { View, TextInput, Button } from 'react-native';

const Controllers = ({}) => {

    return (
        <View style={style.controllers}>
            <TextInput style={style.inputText} placeholder="What should you do?" />
            <DatePicker />
            <Button style={style.addButton} title="add" />
            <View style={style.sortControllersContainer}>
                <Button title="past" style={style.sortButton} />
                <Button title="current" style={style.sortButton} />
                <Button title="future" style={style.sortButton} />
                <Button title="all" style={style.sortButton} />
            </View>
        </View>
    )
};

export default Controllers;