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
