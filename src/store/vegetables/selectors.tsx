import { RootState } from "../store";

export const vegetableVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.vegetableVariant;
};

export const vegetablesSelector = (state: RootState) => {
  return state.vegetables.vegetables;
};
