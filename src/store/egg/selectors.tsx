import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const eggVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.eggVariants;
};

export const addEggSelector = (state: RootState) => {
  return state.egg.addEgg;
};

export const eggsSelector = (state: RootState) => {
  return state.egg.eggs;
};

export const orderEggsSelector = createSelector(
  [addEggSelector, eggsSelector],
  (addEggs, eggs) => {
    if (addEggs) {
      return eggs;
    } else {
      return [];
    }
  }
);
