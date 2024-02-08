import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const cheeseVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.cheeseVariants;
};

export const addCheeseSelector = (state: RootState) => {
  return state.cheese.addCheese;
};

export const cheesesSelector = (state: RootState) => {
  return state.cheese.cheeses;
};

export const orderCheeseSelector = createSelector(
  [addCheeseSelector, cheesesSelector],
  (addCheese, cheeses) => {
    if (addCheese) {
      return cheeses;
    } else {
      return [];
    }
  }
);
