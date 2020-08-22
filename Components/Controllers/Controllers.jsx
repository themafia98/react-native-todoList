import React from 'react';
import DatePicker from 'react-native-datepicker';
import style from './Controllers.style';
import { View, TextInput } from 'react-native';
import Button from '../Button/Button';

const Controllers = ({}) => {

    return (
        <View style={style.controllers}>
            <TextInput style={style.inputText} placeholder="What should you do?" />
            <DatePicker />
            <Button customStyle={style.addButton}>add</Button>
            <View style={style.sortControllersContainer}>
                <Button customStyle={style.sortButton}>past</Button>
                <Button customStyle={style.sortButton}>current</Button>
                <Button customStyle={style.sortButton}>future</Button>
                <Button customStyle={style.sortButton}>all</Button>
            </View>
        </View>
    )
};

export default Controllers;