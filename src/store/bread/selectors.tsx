import { RootState } from "../store";

export const breadVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.breadVariants;
};

export const breadSelector = (state: RootState) => {
  return state.bread.bread;
};
