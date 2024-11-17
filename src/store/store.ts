// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import instagramReducer from "./instagramSlice";
import languageReducer from "./languageSlice"; // Import the languageReducer

const store = configureStore({
  reducer: {
    instagram: instagramReducer, // Add instagramReducer to the store
    language: languageReducer, // Add languageReducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>; // For accessing the state type
export type AppDispatch = typeof store.dispatch; // For dispatching actions in components

export default store;
