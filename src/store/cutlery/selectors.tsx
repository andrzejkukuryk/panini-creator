import { RootState } from "../store";

export const cutlerySelector = (state: RootState) => {
  return state.cutlery.addCutlery;
};
