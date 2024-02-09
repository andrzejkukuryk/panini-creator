import { RootState } from "../store";

export const addToOrderSelector = (state: RootState) => {
  return state.addToOrder.addToOrder;
};
