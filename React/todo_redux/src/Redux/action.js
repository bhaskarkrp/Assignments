import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo = (task, owner) => ({
  type: ADD_TODO,
  payload: {
    title: task,
    status: false,
    owner: owner,
  },
});

export const removeTodo = (task, owner) => ({
  type: REMOVE_TODO,
  payload: {
    title: task,
    owner: owner,
  },
});

export const toggleTodo = (task, owner) => ({
  type: TOGGLE_TODO,
  payload: {
    title: task,
    owner: owner,
  },
});

export const editTodo = (task, owner) => ({
  type: EDIT_TODO,
  payload: {
    title: task,
    owner: owner,
  },
});
