import { RootState } from "./store";

export const breadVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.breadVariants;
};

export const cheeseVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.cheeseVariants;
};

export const addCheeseSelector = (state: RootState) => {
  return state.cheese.addCheese;
};

export const cheesesSelector = (state: RootState) => {
  return state.cheese.cheeses;
};