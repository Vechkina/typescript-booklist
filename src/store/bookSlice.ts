import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBook {
  id: string;
  volumeInfo: {
    title?: string;
    previewLink?: string;
  };
}

interface IBookState {
  myBooks: IBook[];
}

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=quilting"
  );
  return res.json();
});

const initialState: IBookState = {
  myBooks: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state = initialState, action: PayloadAction<IBook>) => {
      state.myBooks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.myBooks = action.payload.items;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        console.log("reject");
      });
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
