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

    const item = yield call(putTodo, payload);

    if (item) yield put(addTodoAction(item));
    else throw new Error("invalid put new todo");

  } catch(error) {
    console.error(error);
    yield put(addTodoAction([]));
  }
}

export {
  fetchTodosList,
  putNewTodoItem
};