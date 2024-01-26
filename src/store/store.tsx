import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import servingSlice from "./serving/servingSlice";
import cheeseSlice from "./cheese/cheeseSlice";
import meatSlice from "./meat/meatSlice";
import dressingSlice from "./dressing/dressingSlice";
import breadSlice from "./bread/breadSlice";
import vegetablesSlice from "./vegetables/vegetablesSlice";
import nameSlice from "./name/nameSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    serving: servingSlice,
    bread: breadSlice,
    cheese: cheeseSlice,
    meat: meatSlice,
    dressing: dressingSlice,
    vegetables: vegetablesSlice,
    name: nameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
