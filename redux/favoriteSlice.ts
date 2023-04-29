import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IPerson } from "../types/person";

const initialState = {
  list: [] as IPerson[],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IPerson>) => {
      state.list.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<IPerson>) => {
      state.list = state.list.filter((item) => item.url !== action.payload.url);
    },

    clear: (state) => {
      state.list = [];
    },
  },
});

export const { addToFavorites, removeFromFavorites, clear } = favoriteSlice.actions;
export const favoriteSelector = (state: RootState) => state.favoriteSlice.list;

export default favoriteSlice.reducer;
