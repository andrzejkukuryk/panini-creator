import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { currentSceneSelector } from "../appControl/selectors";

export const ordersSelector = (state: RootState) => {
  return state.orders.orders;
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
