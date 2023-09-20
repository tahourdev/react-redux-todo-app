// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

// Load state from local storage
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState: persistedState,
});

// Save state to local storage whenever the state changes
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
