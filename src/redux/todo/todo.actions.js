import {
  ADD_TODO,
  CLEAR_TODO_LIST,
  DELETE_TODO,
  TOGGLE_TODO
} from "./todo.types";

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
