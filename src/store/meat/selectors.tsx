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
