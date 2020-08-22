import React, { useState } from 'react';
import { v4 as uuid } from 'react-native-uuid';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import style from './Controllers.style';
import { View, TextInput } from 'react-native';
import Button from '../Button/Button';

const Controllers = ({ dateFmt }) => {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(moment().format(dateFmt));

  const onDateChange = date => {
    setSelectedDate(date);
  }

  const onChangeText = text => {
    setName(text);
  }

  const onChangeSort = type => {
    console.log(type);
  }

  const onAddTodo = event => {
    const todo = {
      id: uuid(),
      name,
      date: selectedDate
    }
    console.log(todo);
  };

  return (
    <View style={style.controllers}>
      <TextInput
        value={name}
        style={style.inputText}
        placeholder="What should you do?"
        onChangeText={onChangeText}
      />
      <DatePicker
        date={selectedDate}
        placeholder="select date"
        iconSource={null}
        style={style.datePicker}
        showIcon={false}
        format={dateFmt}
        onDateChange={onDateChange}
      />
      <Button 
        onPress={onAddTodo}
        customStyle={style.addButton}
      >
        add
      </Button>
      <View style={style.sortControllersContainer}>
        <Button
          onPress={() => onChangeSort("past")}
          customStyle={style.sortButton}
        >
          past
        </Button>
        <Button
          onPress={() => onChangeSort("current")}
          customStyle={style.sortButton}
        >
          current
        </Button>
        <Button
          onPress={() => onChangeSort("future")}
          customStyle={style.sortButton}
        >
          future
        </Button>
        <Button
          onPress={() => onChangeSort("all")}
          customStyle={style.sortButton}
        >
          all
        </Button>
      </View>
    </View>
  )
};

Controllers.defaultProps = {
  dateFmt: "DD.MM.YYYY"
};

export default Controllers;