import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ServingState {
  serving: string;
  name: string;
  napkins: boolean;
  cultery: boolean;
}

const initialState: ServingState = {
  serving: "",
  name: "",
  napkins: false,
  cultery: false,
};

export const servingSlice = createSlice({
  name: "serving",
  initialState: initialState,
  reducers: {
    updateServing: (state, action: PayloadAction<string>) => {
      state.serving = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateNapkins: (state, action: PayloadAction<boolean>) => {
      state.napkins = action.payload;
    },
    updateCultery: (state, action: PayloadAction<boolean>) => {
      state.cultery = action.payload;
    },
  },
});

export const { updateServing, updateName, updateNapkins, updateCultery } =
  servingSlice.actions;

export default servingSlice.reducer;
