import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const dressingVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.dressingVariants;
};

export const addDressingSelector = (state: RootState) => {
  return state.dressing.addDressing;
};

export const dressingsSelector = (state: RootState) => {
  return state.dressing.dressings;
};

export const orderDressingSelector = createSelector(
  [addDressingSelector, dressingsSelector],
  (addDressing, dressings) => {
    if (addDressing) {
      return dressings;
    } else {
      return [];
    }
  }
);
