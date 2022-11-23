// 그냥 리덕스만 사용한 코드!!!!!

// import { createStore } from "redux";

// const initState = { counter: 0, showCounter: true };
// const counterReducer = (state = initState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "INCREASE") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "TOGGLE") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;

// 리덕스 툴킷 사용 코드!!!!!
import { createSlice, configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

// const initCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initAuthState = {
//   isLogin: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initAuthState,
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// export const counterAction = counterSlice.actions;
// export const authAction = authSlice.actions;
export default store;
