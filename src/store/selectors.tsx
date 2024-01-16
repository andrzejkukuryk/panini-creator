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

export const meatVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.meatVariants;
};

export const addMeatSelector = (state: RootState) => {
  return state.meat.addMeat;
};

export const meatsSelector = (state: RootState) => {
  return state.meat.meats;
};