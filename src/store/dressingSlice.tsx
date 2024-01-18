import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface DressingState {
  addDressing: boolean;
  dressings: number[];
}

const initialState: DressingState = {
  addDressing: true,
  dressings: [1],
};

export const dressingSlice = createSlice({
  name: "dressing",
  initialState: initialState,
  reducers: {
    updateAddDressing: (state) => {
      state.addDressing = !state.addDressing;
    },
    addNextDressing: (state) => {
      state.dressings.push(0);
    },
    subDressing: (state, action: PayloadAction<number>) => {
      state.dressings.splice(action.payload, 1);
    },
    updateDressings: (
      state,
      action: PayloadAction<{ index: number; value: number }>
    ) => {
      state.dressings[action.payload.index] = action.payload.value;
    },
  },
});

export const {
  updateAddDressing,
  addNextDressing,
  subDressing,
  updateDressings,
} = dressingSlice.actions;

export default dressingSlice.reducer;
