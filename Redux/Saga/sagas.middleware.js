import { call, put } from 'redux-saga/effects';
import { getTodosList, putTodo } from '../../Models/Api/Api';
import { addTodoAction } from './sagas.actions';


function* fetchTodosList({ payload }) {
  try {
    
    const resultList = yield call(getTodosList, payload);
    yield put(addTodoAction(resultList));

  } catch (error) {
    console.error(error);
    yield put(addTodoAction([]));
  }
};

function* putNewTodoItem({ payload }) {
  try {
    yield call(putTodo, payload);
    yield put(addTodoAction(payload));
  } catch(error) {
    console.error(error);
    yield put(addTodoAction([]));
  }
}

export {
  fetchTodosList,
  putNewTodoItem
};