import React, { useState } from 'react';
import { v4 as uuid } from 'react-native-uuid';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import style from './Controllers.style';
import { TextInput, SafeAreaView } from 'react-native';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { changeSortAction, fetchPutNewTodo } from '../../Redux/AppStorage/actions';
import { func, string } from 'prop-types';
import { addTodoAction } from '../../Redux/Saga/sagas.actions';

const Controllers = ({ dateFmt, onAdd, sortType, onSort }) => {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(moment().format(dateFmt));

  const onDateChange = date => {
    setSelectedDate(date);
  }

  const onChangeText = text => {
    setName(text);
  }

  const onChangeSort = type => {
    if (typeof type !== 'string' || sortType === type) return;
    onSort(type);
  }

  const onAddTodo = event => {
    setName("");
    onAdd({
      id: uuid(),
      name,
      date: selectedDate
    });
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
        onDateChange={onDateChange}
      />
      <Button
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
  onAdd: null,
  onSort: null,
  dateFmt: "DD.MM.YYYY",
  sortType: "all"
};

Controllers.propTypes = {
  sortType: string.isRequired,
  onAdd: func.isRequired,
  onSort: func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: args => dispatch(fetchPutNewTodo(args)),
    onSort: args => dispatch(changeSortAction(args))
  }
};

const mapStateToProps = ({ appReducer }) => {
  const { sortType } = appReducer;

  return {
    sortType
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controllers);