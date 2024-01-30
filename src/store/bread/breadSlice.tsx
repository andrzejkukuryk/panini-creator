import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
});

export const { updateBread } = breadSlice.actions;

export default breadSlice.reducer;