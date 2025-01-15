import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    login: (state, action) => {
      const { isAuthenticated, accessToken, user } = action.payload;

      isAuthenticated && (state.isAuthenticated = isAuthenticated);
      accessToken && (state.accessToken = accessToken);
      user && (state.user = user);
    },
    logout: () => {
      sessionStorage.removeItem("accessToken");

      return initialState;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
