import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type currentView = "splash" | "creator" | "success";

interface appControlState {
  startAnimation: boolean;
  currentView: currentView;
}

const initialState: appControlState = {
  startAnimation: false,
  currentView: "splash",
};

export const appControlSlice = createSlice({
  name: "appControl",
  initialState: initialState,
  reducers: {
    updateStartAnimation: (state, action: PayloadAction<boolean>) => {
      state.startAnimation = action.payload;
    },
    updateCurrentView: (state, action: PayloadAction<currentView>) => {
      state.currentView = action.payload;
    },
  },
});

export const { updateStartAnimation, updateCurrentView } =
  appControlSlice.actions;

export default appControlSlice.reducer;
