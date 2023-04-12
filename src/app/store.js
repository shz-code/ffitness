import { configureStore } from "@reduxjs/toolkit";
import exercisesApiSlice from "../features/api/exercisesApiSlice";
import ytApiSlice from "../features/api/ytApiSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [ytApiSlice.reducerPath]: ytApiSlice.reducer,
    [exercisesApiSlice.reducerPath]: exercisesApiSlice.reducer,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleWares) =>
    getDefaultMiddleWares()
      .concat(ytApiSlice.middleware)
      .concat(exercisesApiSlice.middleware),
});
