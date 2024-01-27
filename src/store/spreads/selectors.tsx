import { RootState } from "../store";

export const spreadVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.spreadVariant;
};

export const spreadSelector = (state: RootState) => {
  return state.spread.spreads;
};
