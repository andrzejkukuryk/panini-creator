import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ServingState {
  serving: string;
}

const initialState: ServingState = {
  serving: "WARM",
};

export const servingSlice = createSlice({
  name: "serving",
  initialState: initialState,
  reducers: {
    updateServing: (state, action: PayloadAction<string>) => {
      state.serving = action.payload;
    },
  },
});

export const { updateServing } = servingSlice.actions;

export default servingSlice.reducer;
