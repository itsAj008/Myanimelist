import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  animelist: JSON.parse(window.localStorage.getItem("yourListKey")) || [],
};

export const animeSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addanime: (state, action) => {
      const item = {
        id: nanoid(),
        text: action.payload,
      };
      state.animelist.push(item);
    },
    removeanime: (state, action) => {
      state.animelist = state.animelist.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const { addanime, removeanime } = animeSlice.actions;

export default animeSlice.reducer;
