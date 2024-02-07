import { RootState } from "../store";

export const ordersSelector = (state: RootState) => {
  return state.orders.orders;
};

export const currentOrderIdSelector = (state: RootState) => {
  return state.orders.currentOrderId;
};