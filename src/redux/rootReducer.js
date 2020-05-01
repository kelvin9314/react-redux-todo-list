import { combineReducers } from "redux";

// import counter from "./counter";
import todo from "./todo/todo.reducer";

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;
