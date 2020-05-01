import { ADD_COUNTER, RESET_COUNTER } from "./counter.types";


let count = 0;

export const addCounter = () => {
  return {
    type: ADD_COUNTER,
    count: ++count
  };
};

export const resetCounter = () => {
  return {
    type: RESET_COUNTER,
    count: 0
  };
};