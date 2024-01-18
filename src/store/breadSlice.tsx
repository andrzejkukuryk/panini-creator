import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface BreadState {
  bread: number;
}

const initialState: BreadState = {
  bread: 1,
};

export const breadSlice = createSlice({
  name: "bread",
  initialState: initialState,
  reducers: {
    updateBread: (state, action: PayloadAction<number>) => {
      state.bread = action.payload;
    },
  },
});

export const { updateBread } = breadSlice.actions;

export default breadSlice.reducer;