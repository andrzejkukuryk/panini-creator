import { RootState } from "./store";

export const breadVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.breadVariants;
};

export const cheeseVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.cheeseVariants;
};
