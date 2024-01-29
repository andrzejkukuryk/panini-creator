import { RootState } from "../store";

export const napkinsSelector = (state: RootState) => {
  return state.napkins.addNapkins;
};
