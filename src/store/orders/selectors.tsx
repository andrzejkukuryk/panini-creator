import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { cheeseVariantsSelector } from "../cheese/selectors";

export const ordersSelector = (state: RootState) => {
  return state.orders.orders;
};

export const orderStatusSelector = (state: RootState) => {
  return state.orders.orderStatus;
};

export const currentOrderIndexSelector = (state: RootState) => {
  return state.orders.currentOrderIndex;
};

export const currentOrderIdSelector = (state: RootState) => {
  return state.orders.currentOrderId;
};

export const currentOrderSelector = (state: RootState) => {
  return state.orders.orders[state.orders.currentOrderIndex];
};

export const randomOrderSelector = (state: RootState) => {
  return state.orders.randomOrder;
};