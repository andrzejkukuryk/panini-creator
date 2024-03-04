import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState, randomState } from "../appControl/appControlSlice";

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
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.serving = action.payload.serving[0];
    });
  },
});

export const { updateServing } = servingSlice.actions;

export default servingSlice.reducer;
