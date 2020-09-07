import {
  ADD_ITEM,
  REMOVE_ITEM,
  EDIT_NOTE,
  EDIT_SORT_TYPE,
  CLOSE_POPUP,
  OPEN_POPUP
} from "./AppStorage.constant";

const initialState = {
  sortType: "all",
  openPopupId: null,
  popupData: {},
  todosList: []
};

/**
 * --todo item struct--
 * id {string}
 * name {string}
 * date {string}
 * uid {string}
 * note {string}
 */

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_POPUP: {
      const { todosList } = state;

      const popupData = todosList.find(todo => todo?.id === payload);
      if (!popupData) return state;

      return {
        ...state,
        popupData,
        openPopupId: popupData?.id
      }
    }
    case CLOSE_POPUP: {
      return {
        ...state,
        openPopupId: null,
        popupData: {}
      }
    }
    case ADD_ITEM: {
      const { todosList: todosListState } = state;
      const isMassAdd = Array.isArray(payload);

      const todosList = isMassAdd
        ? [...todosListState, ...payload]
        : [...todosListState, payload];

      return {
        ...state,
        todosList
      }
    }
    case REMOVE_ITEM: {
      const { todosList } = state;
      return {
        ...state,
        todosList: todosList.filter(({ id } = {}) => id !== payload)
      }
    }
    case EDIT_NOTE: {
      const { todosList } = state;
      const { id = "", note = "" } = payload;
      return {
        ...state,
        todosList: todosList.map(item => {
          if (item.id !== id) return item;
          return {
            ...item,
            note
          };
        })
      }
    }
    case EDIT_SORT_TYPE: {
      return {
        ...state,
        sortType: payload
      }
    }
    default: return state;
  }
};

export default reducer;