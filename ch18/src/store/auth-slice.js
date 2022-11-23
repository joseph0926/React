import { createSlice } from "@reduxjs/toolkit";

const initAuthState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
