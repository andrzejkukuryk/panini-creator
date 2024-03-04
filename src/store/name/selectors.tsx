import { stat } from "fs";
import { RootState } from "../store";

export const nameSelector = (state: RootState) => {
  return state.name.name;
};

export const defaultNameSelector = (state: RootState) => {
  return state.name.defaultName;
};

export const nameTooLongSelector = (state: RootState) => {
  return state.name.nameTooLong;
};
