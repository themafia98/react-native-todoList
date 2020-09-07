import { call, put } from 'redux-saga/effects';
import { getTodosList, putTodo, deleteTodo, editTodoNote } from '../../Models/Api/Api';
import { addTodoAction, removeTodoAction, editNoteAction } from './sagas.actions';


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

  } catch (error) {
    console.error(error);
    yield put(addTodoAction([]));
  }
}

function* deleteTodoItem({ payload }) {
  try {
    const success = yield call(deleteTodo, payload);

    if (success) yield put(removeTodoAction(payload));
    else throw new Error("Bad delete todo");

  } catch (errpr) {
    console.error(errror);
  }
}

function* editNote({ payload }) {
  try {
    const success = yield call(editTodoNote, payload);

    if (success) yield put(editNoteAction(payload));
    else throw new Error("Bad edit todo note");

  } catch (error) {
    console.error(error);
  }
};

export {
  fetchTodosList,
  putNewTodoItem,
  deleteTodoItem,
  editNote
};