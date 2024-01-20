import { RootState } from "./store";

// export const meatVariantsSelector = (state: RootState) => {
//   return state.ingredients.allIngredients.meatVariants;
// };

// export const addMeatSelector = (state: RootState) => {
//   return state.meat.addMeat;
// };

// export const meatsSelector = (state: RootState) => {
//   return state.meat.meats;
// };


export const vegetableVariantsSelector = (state: RootState) => {
  return state.ingredients.allIngredients.vegetableVariant;
};

export const vegetablesSelector = (state: RootState) => {
  return state.vegetables.vegetables;
};
