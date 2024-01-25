import { RootState } from "../store";

export const toppingVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.toppingVariant;
};

export const toppingSelector = (state: RootState) => {
  return state.topping.topping;
};
