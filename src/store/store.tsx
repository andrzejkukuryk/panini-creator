import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import servingSlice from "./servingSlice";
import cheeseSlice from "./cheese/cheeseSlice";
import meatSlice from "./meat/meatSlice";
import dressingSlice from "./dressing/dressingSlice";
import breadSlice from "./bread/breadSlice";
import vegetablesSlice from "./vegetablesSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    serving: servingSlice,
    bread: breadSlice,
    cheese: cheeseSlice,
    meat: meatSlice,
    dressing: dressingSlice,
    vegetables: vegetablesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
