import { FETCH_TODOS_LIST, FETCH_NEW_TODO_ITEM } from "../../Saga/sagas.constant";
import { EDIT_SORT_TYPE } from "../AppStorage.constant";


const fetchTodosListAction = (uid = "") => {
  return {
    type: FETCH_TODOS_LIST,
    payload: uid
  }
};

const fetchPutNewTodo = item => {
  return {
    type: FETCH_NEW_TODO_ITEM,
    payload: item
  }
};

const changeSortAction = type => {
  return {
    type: EDIT_SORT_TYPE,
    payload: type
  }
};

export {
  fetchTodosListAction,
  fetchPutNewTodo,
  changeSortAction
};