import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState } from "../appControl/appControlSlice";

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
  },
});

export const { updateServing } = servingSlice.actions;

export default servingSlice.reducer;
