import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredientsSlice";
import cheeseSlice from "./cheese/cheeseSlice";
import meatSlice from "./meat/meatSlice";
import dressingSlice from "./dressing/dressingSlice";
import breadSlice from "./bread/breadSlice";
import vegetablesSlice from "./vegetables/vegetablesSlice";
import eggSlice from "./egg/eggSlice";
import spreadsSlice from "./spreads/spreadsSlice";
import servingSlice from "./serving/servingSlice";
import toppingSlice from "./topping/toppingSlice";
import nameSlice from "./name/nameSlice";
import cutlerySlice from "./cutlery/cutlerySlice";
import napkinsSlice from "./napkins/napkinsSlice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    bread: breadSlice,
    cheese: cheeseSlice,
    meat: meatSlice,
    dressing: dressingSlice,
    vegetables: vegetablesSlice,
    egg: eggSlice,
    spread: spreadsSlice,
    serving: servingSlice,
    topping: toppingSlice,
    name: nameSlice,
    cutlery: cutlerySlice,
    napkins: napkinsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
