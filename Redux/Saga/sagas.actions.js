import { 
  ADD_ITEM, 
  REMOVE_ITEM, 
  EDIT_NOTE
} from "../AppStorage/AppStorage.constant";
import { createAction } from 'redux-actions';

export const addTodoAction = createAction(ADD_ITEM);
export const removeTodoAction = createAction(REMOVE_ITEM);
export const editNoteAction = createAction(EDIT_NOTE);