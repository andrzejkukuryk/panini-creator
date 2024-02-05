import { RootState } from "../store";

export const currentOrderSelector = (state: RootState) => {
  return state.orders.currentOrder;
};

export const ordersSelector = (state: RootState) => {
  return state.orders.orders;
};
