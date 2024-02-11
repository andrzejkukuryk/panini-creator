import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ordersSelector } from "../orders/selectors";

export const startAnimationSelector = (state: RootState) => {
  return state.appControls.startAnimation;
};

export const currentSceneSelector = (state: RootState) => {
  return state.appControls.currentScene;
};

export const showOrdersButtonSelector = createSelector(
  [ordersSelector, currentSceneSelector],
  (orders, scene) => {
    if (!(scene === "SPLASH" || scene === "ANIMATION") && orders.length > 0) {
      return true;
    } else {
      return false;
    }
  }
);
