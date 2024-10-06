import { combineReducers } from "@reduxjs/toolkit";
import apiSlice from "./api/apiSlice";
import authReducer from "./auth/authSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

export default rootReducer;