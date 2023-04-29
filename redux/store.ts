import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import favoriteSliceReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    favoriteSlice: favoriteSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
