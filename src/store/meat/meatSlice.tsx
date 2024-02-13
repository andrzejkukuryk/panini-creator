import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState } from "../appControl/appControlSlice";

interface MeatState {
  addMeat: boolean;
  meats: string[];
}

const initialState: MeatState = {
  addMeat: true,
  meats: ["SALAMI"],
};

export const meatSlice = createSlice({
  name: "meat",
  initialState: initialState,
  reducers: {
    updateAddMeat: (state) => {
      state.addMeat = !state.addMeat;
    },
    addNextMeat: (state) => {
      state.meats.push("SALAMI");
    },
    subMeat: (state, action: PayloadAction<number>) => {
      state.meats.splice(action.payload, 1);
    },
    updateMeats: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.meats[action.payload.index] = action.payload.value;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
  },
});

export const { updateAddMeat, addNextMeat, subMeat, updateMeats } =
  meatSlice.actions;

export default meatSlice.reducer;
