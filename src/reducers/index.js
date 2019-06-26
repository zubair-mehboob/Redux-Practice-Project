import { ADD_ITEM, DELETE_ITEM } from "../actions";
const initialState = [];

const toDoReduer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.task];
    case DELETE_ITEM:
      return state.filter(r => r.id !== action.id);
    default:
      return state;
  }
};

export default toDoReduer;
