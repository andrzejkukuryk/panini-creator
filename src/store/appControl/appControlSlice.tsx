import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const resetState = createAction("resetState");

export type currentScene =
  | "SPLASH"
  | "ANIMATION"
  | "CREATOR"
  | "SUCCESS"
  | "ORDER";

interface appControlState {
  startAnimation: boolean;
  currentScene: currentScene;
}

const initialState: appControlState = {
  startAnimation: false,
  currentScene: "SPLASH",
};

export const appControlSlice = createSlice({
  name: "appControl",
  initialState: initialState,
  reducers: {
    updateStartAnimation: (state, action: PayloadAction<boolean>) => {
      state.startAnimation = action.payload;
    },
    updateCurrentScene: (state, action: PayloadAction<currentScene>) => {
      state.currentScene = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {});
  },
});

export const { updateStartAnimation, updateCurrentScene } =
  appControlSlice.actions;

export default appControlSlice.reducer;
