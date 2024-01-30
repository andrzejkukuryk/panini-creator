import { RootState } from "../store";

export const startAnimationSelector = (state: RootState) => {
  return state.appControls.startAnimation;
};

export const currentViewSelector = (state: RootState) => {
  return state.appControls.currentView;
};
