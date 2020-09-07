import React, { useState, useContext, useMemo } from 'react';
import { v4 as uuid } from 'react-native-uuid';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import style from './Controllers.style';
import { TextInput, SafeAreaView } from 'react-native';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { changeSortAction, fetchPutNewTodo } from '../../Redux/AppStorage/actions';
import { string } from 'prop-types';
import FirebaseContext from '../../Models/Helpers/FirebaseContext/Firebase.context';

const Controllers = ({ dateFmt }) => {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(moment().format(dateFmt));

  const dispatch = useDispatch();
  const api = useContext(FirebaseContext);

  const sortType = useSelector(({ appReducer }) => appReducer.sortType);
  const { uid = "" } = useMemo(() => api.getCurrentUser() || {}, [api]);

  const onDateChange = date => {
    setSelectedDate(date);
  }

  const onChangeText = text => {
    setName(text);
  }

  const onChangeSort = type => {
    if (typeof type !== 'string' || sortType === type) return;
    dispatch(changeSortAction(type));
  }

  const onAddTodo = () => {
    setName("");
    dispatch(fetchPutNewTodo({
      id: uuid(),
      name,
      date: selectedDate,
      note: "",
      uid
    }));
  };

  return (
    <SafeAreaView style={style.controllers}>
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
        format="DD.MM.YYYY"
        onDateChange={onDateChange}
      />
      <Button
        disabled={!name || !selectedDate || !uid}
        onPress={onAddTodo}
        customStyle={style.addButton}
      >
        add
      </Button>
      <SafeAreaView style={style.sortControllersContainer}>
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
      </SafeAreaView>
    </SafeAreaView>
  )
};

Controllers.defaultProps = {
  dateFmt: "DD.MM.YYYY",
};

Controllers.propTypes = {
  dateFmt: string,
}

export default Controllers;