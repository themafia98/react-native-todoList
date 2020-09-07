import { takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS_LIST, FETCH_NEW_TODO_ITEM, FETCH_DELETE_ITEM, FETCH_NOTE_EDIT } from './sagas.constant';
import { fetchTodosList, putNewTodoItem, deleteTodoItem, editNote } from './sagas.middleware';

function* initialSagas(){
    yield takeEvery(FETCH_TODOS_LIST, fetchTodosList);
    yield takeEvery(FETCH_NEW_TODO_ITEM, putNewTodoItem);
    yield takeEvery(FETCH_DELETE_ITEM, deleteTodoItem);
    yield takeEvery(FETCH_NOTE_EDIT, editNote);

};

export default initialSagas;