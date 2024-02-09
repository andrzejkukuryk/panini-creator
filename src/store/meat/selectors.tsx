import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const meatVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.meatVariants;
};

export const addMeatSelector = (state: RootState) => {
  return state.meat.addMeat;
};

export const meatsSelector = (state: RootState) => {
  return state.meat.meats;
};

export const orderMeatSelector = createSelector(
  [addMeatSelector, meatsSelector],
  (addMeat, meats) => {
    if (addMeat) {
      return meats;
    } else {
      return [];
    }
  }
);
