import { createStore } from "redux";

const initState = { counter: 0 };
const counterReducer = (state = initState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
