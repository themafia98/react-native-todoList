import { createAction } from 'redux-actions';
import { 
    FETCH_TODOS_LIST, 
    FETCH_NEW_TODO_ITEM, 
    FETCH_DELETE_ITEM, 
    FETCH_NOTE_EDIT 
} from "../../Saga/sagas.constant";
import { 
    EDIT_SORT_TYPE,
    OPEN_POPUP, 
    CLOSE_POPUP 
} from "../AppStorage.constant";

export const fetchTodosListAction = createAction(FETCH_TODOS_LIST);
export const fetchPutNewTodo = createAction(FETCH_NEW_TODO_ITEM);
export const fetchEditNoteAction = createAction(FETCH_NOTE_EDIT);
export const fetchDeleteTodoActin = createAction(FETCH_DELETE_ITEM);
export const onOpenPopupAction = createAction(OPEN_POPUP);
export const onClosePopupAction = createAction(CLOSE_POPUP);
export const changeSortAction = createAction(EDIT_SORT_TYPE);
