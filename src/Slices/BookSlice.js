


import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "program is the best life", author: "Mazharul Islam" },
    { id: 2, title: "program is the  life", author: "Mazharul Islam" },
    { id: 3, title: "best life is programming", author: "Mazharul Islam" },
    { id: 4, title: "you can do anything", author: "Mazharul Islam" }
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,

  reducers: {
    showBooks: (state) => state,

    addBook: (state, actions) => {
      state.books.push(actions.payload);
    },

    deleteBook: (state, actions) => {
      const id = actions.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },

    updateBook: (state, actions) => {
      const { id, title, author } = actions.payload;
      const isBookExit = state.books.filter((book) => book.id === id);
      console.log(isBookExit);
      if (isBookExit) {
        isBookExit[0].title = title;
        isBookExit[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
