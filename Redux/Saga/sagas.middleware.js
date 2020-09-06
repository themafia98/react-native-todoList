import { call, put } from 'redux-saga/effects';
import { getTodosList, putTodo, deleteTodo } from '../../Models/Api/Api';
import { addTodoAction, refreshTodosListAction } from './sagas.actions';


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

function* deleteTodoItem({ payload }) {
  try {
    const success = yield call(deleteTodo, payload);

    if (success) yield put(refreshTodosListAction(payload));
    else throw new Error("Bad delete todo");

  } catch(errpr) {
    console.error(errror);
  }
}

export {
  fetchTodosList,
  putNewTodoItem,
  deleteTodoItem
};