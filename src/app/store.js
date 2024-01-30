import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../features/animelist/animeSlice";

export const store = configureStore({
  reducer: animeReducer,
});
