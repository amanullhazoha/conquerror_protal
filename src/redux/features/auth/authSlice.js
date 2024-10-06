import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },
    login: (state, action) => {
      const { accessToken, user } = action.payload;

      state.isAuthenticated = true;
      state.accessToken = accessToken;
      state.user = user;
    },
    logout: () => initialState
  }
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
