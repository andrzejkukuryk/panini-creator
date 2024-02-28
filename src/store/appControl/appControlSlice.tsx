import { createAction, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/order";

export const resetState = createAction("resetState");
export const randomState = createAction<Order>("randomState");

export type CurrentScene =
  | "SPLASH"
  | "ANIMATION"
  | "CREATOR"
  | "SUCCESS"
  | "ORDER";

interface AppControlState {
  startAnimation: boolean;
  currentScene: CurrentScene;
}

const initialState: AppControlState = {
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
    updateCurrentScene: (state, action: PayloadAction<CurrentScene>) => {
      state.currentScene = action.payload;
    },
  },
});

export const { updateStartAnimation, updateCurrentScene } =
  appControlSlice.actions;

export default appControlSlice.reducer;
