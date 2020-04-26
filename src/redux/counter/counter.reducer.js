import { ADD_COUNTER, RESET_COUNTER } from "./counter.types";

const initalState = {
  amount: 0,
  name: "kelvin"
};

const counter = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        amount: ++state.amount
      };
    case RESET_COUNTER:
      return {
        amount: action.count
      };
    default:
      return state;
  }
};

export default counter;
