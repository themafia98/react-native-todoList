import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM, EDIT_SORT_TYPE } from "./AppStorage.constant";

const initialState = {
  sortType: "all",
  todosList: []
};

/**
 * --todo item struct--
 * id {string}
 * name {string}
 * date {string}
 */

const reducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case ADD_ITEM: {
      const { todosList: todosListState } = state;
      return {
        ...state,
        todosList: [...todosListState, payload]
      }
    }
    case REMOVE_ITEM: {
      const { todosList } = state;
      return {
        ...state,
        todosList: todosList.filter(({ id } = {}) => id !== payload)
      }
    }
    case EDIT_ITEM: {
      const { todosList } = state;
      const { id = "", changes = {} } = payload;
      return {
        ...state,
        todosList: todosList.map(item => {
          if (item?.id !== id) return item;
          return {
            ...item,
            ...changes
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