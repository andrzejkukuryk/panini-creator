import { RootState } from "../store";

export const servingVariantsSelector = (state: RootState) => {
  return state.ingredients.servingVariant;
};

export const servingSelector = (state: RootState) => {
  return state.serving.serving;
};
