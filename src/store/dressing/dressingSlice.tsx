import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState, randomState } from "../appControl/appControlSlice";

interface DressingState {
  addDressing: boolean;
  dressings: string[];
}

const initialState: DressingState = {
  addDressing: true,
  dressings: ["HONEY MUSTARD"],
};

export const dressingSlice = createSlice({
  name: "dressing",
  initialState: initialState,
  reducers: {
    updateAddDressing: (state) => {
      state.addDressing = !state.addDressing;
    },
    addNextDressing: (state) => {
      state.dressings.push("HONEY MUSTARD");
    },
    subDressing: (state, action: PayloadAction<number>) => {
      state.dressings.splice(action.payload, 1);
    },
    updateDressings: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.dressings[action.payload.index] = action.payload.value;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.dressings = action.payload.dressing;
      state.addDressing = action.payload.dressing.length > 0;
    });
  },
});

export const {
  updateAddDressing,
  addNextDressing,
  subDressing,
  updateDressings,
} = dressingSlice.actions;

export default dressingSlice.reducer;
