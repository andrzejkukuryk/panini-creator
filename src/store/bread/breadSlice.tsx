import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomState, resetState } from "../appControl/appControlSlice";

interface BreadState {
  bread: string;
}

const initialState: BreadState = {
  bread: "FULL GRAIN",
};

export const breadSlice = createSlice({
  name: "bread",
  initialState: initialState,
  reducers: {
    updateBread: (state, action: PayloadAction<string>) => {
      state.bread = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.bread = action.payload.bread[0];
    });
  },
});

export const { updateBread } = breadSlice.actions;

export default breadSlice.reducer;
