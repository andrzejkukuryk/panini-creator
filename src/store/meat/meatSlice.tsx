import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MeatState {
  addMeat: boolean;
  meats: number[];
}

const initialState: MeatState = {
  addMeat: true,
  meats: [0],
};

export const meatSlice = createSlice({
  name: "meat",
  initialState: initialState,
  reducers: {
    updateAddMeat: (state) => {
      state.addMeat = !state.addMeat;
    },
    addNextMeat: (state) => {
      state.meats.push(0);
    },
    subMeat: (state, action: PayloadAction<number>) => {
      state.meats.splice(action.payload, 1);
    },
    updateMeats: (
      state,
      action: PayloadAction<{ index: number; value: number }>
    ) => {
      state.meats[action.payload.index] = action.payload.value;
    },
  },
});

export const { updateAddMeat, addNextMeat, subMeat, updateMeats } =
  meatSlice.actions;

export default meatSlice.reducer;
