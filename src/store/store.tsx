import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import servingSlice from "./servingSlice";
import cheeseSlice from "./cheeseSlice";
import meatSlice from "./meatSlice";
import dressingSlice from "./dressingSlice";
import breadSlice from "./breadSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    serving: servingSlice,
    bread: breadSlice,
    cheese: cheeseSlice,
    meat: meatSlice,
    dressing: dressingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
