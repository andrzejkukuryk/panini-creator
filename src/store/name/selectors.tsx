import { RootState } from "../store";

export const nameSelector = (state: RootState) => {
  return state.name.name;
};
