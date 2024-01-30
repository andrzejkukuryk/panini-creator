import { RootState } from "../store";

export const startAnimationSelector = (state: RootState) => {
  return state.appControls.startAnimation;
};

export const currentSceneSelector = (state: RootState) => {
  return state.appControls.currentScene;
};
