import { 
  ADD_ITEM, 
  REMOVE_ITEM, 
  EDIT_ITEM, 
  REFRESH_TODOS 
} from "../AppStorage/AppStorage.constant";
import { createAction } from 'redux-actions';

export const addTodoAction = createAction(ADD_ITEM);
export const removeTodoAction = createAction(REMOVE_ITEM);
export const refreshTodosListAction = createAction(REFRESH_TODOS);

export const changeTodoAction = (id, changes) => {
  return {
    type: EDIT_ITEM,
    payload: {
      id,
      changes
    }
  }
};