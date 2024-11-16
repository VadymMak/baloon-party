import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
