import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Slices/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;