import { RootState } from "../store";

export const ordersSelector = (state: RootState) => {
  return state.orders.orders;
};

export const orderIndexSelector = (state: RootState) => {
  return state.orders.currentOrderIndex;
};
