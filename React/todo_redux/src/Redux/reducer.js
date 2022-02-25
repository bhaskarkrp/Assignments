import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = {
  todo: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter(
          (item) =>
            item.title !== action.payload.title &&
            item.owner !== action.payload.owner
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === action.payload.title &&
          item.owner === action.payload.owner
            ? { ...item, status: !item.status }
            : item
        ),
      };
    case EDIT_TODO:
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.title === action.payload.title
            ? { ...item, owner: action.payload.owner }
            : item
        ),
      };
    default:
      return state;
  }
};
