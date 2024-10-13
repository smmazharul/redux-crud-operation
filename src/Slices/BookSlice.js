import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
   books: [
        {id:1,title:'program is the best life',author:'Mazharul Islam'},
        {id:2,title:'program is the  life',author:'Mazharul Islam'},
        {id:3,title:'best life is programming',author:'Mazharul Islam'},
        {id:4,title:'you can do anything',author:'Mazharul Islam'}
    ]
}


export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state)=>state,
    }
})


export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;