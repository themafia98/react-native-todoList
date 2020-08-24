import { takeEvery } from 'redux-saga/effects';
import { FETCH_TODOS_LIST, FETCH_NEW_TODO_ITEM } from './sagas.constant';
import { fetchTodosList, putNewTodoItem } from './sagas.middleware';

function* initialSagas(){
    yield takeEvery(FETCH_TODOS_LIST, fetchTodosList);
    yield takeEvery(FETCH_NEW_TODO_ITEM, putNewTodoItem);
};

export default initialSagas;