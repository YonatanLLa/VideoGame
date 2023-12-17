import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    getCharacters: (state, { payload }) => {
      state.characters = payload;
    },
  },
});

export const { getCharacters } = characterSlice.actions;
export default characterSlice.reducer;
