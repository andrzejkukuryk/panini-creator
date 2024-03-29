import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState, randomState } from "../appControl/appControlSlice";

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
      if (state.addEgg && state.eggs.length === 0) {
        state.eggs = ["FRIED EGG"];
      }
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
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.eggs = action.payload.egg;
      state.addEgg = action.payload.egg.length > 0;
    });
  },
});

export const { updateAddEgg, addNextEgg, subEgg, updateEggs } =
  eggSlice.actions;

export default eggSlice.reducer;
