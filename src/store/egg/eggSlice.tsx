import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface EggState {
  addEgg: boolean;
  eggs: string[];
}

const initialState: EggState = {
  addEgg: true,
  eggs: ["FRIED EGG"],
};

export const eggSlice = createSlice({
  name: "egg",
  initialState: initialState,
  reducers: {
    updateAddEgg: (state) => {
      state.addEgg = !state.addEgg;
    },
    addNextEgg: (state) => {
      state.eggs.push("FRIED EGG");
    },
    subEgg: (state, action: PayloadAction<number>) => {
      state.eggs.splice(action.payload, 1);
    },
    updateEggs: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.eggs[action.payload.index] = action.payload.value;
    },
    initialEggState() {
      return initialState;
    },
  },
});

export const { updateAddEgg, addNextEgg, subEgg, updateEggs, initialEggState } =
  eggSlice.actions;

export default eggSlice.reducer;
