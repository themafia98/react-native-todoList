import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, EDIT_SORT_TYPE } from "../AppStorage.constant";


const addTodoAction = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
};

const removeTodoAction = id => {
  return {
    type: REMOVE_ITEM,
    payload: id
  }
};

const changeTodoAction = (id, changes) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id,
      changes
    }
  }
};

const changeSortAction = type => {
  return {
    type: EDIT_SORT_TYPE,
    payload: type
  }
};

export {
  addTodoAction,
  removeTodoAction,
  changeTodoAction,
  changeSortAction
};