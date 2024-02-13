import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState } from "../appControl/appControlSlice";

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
    initialBreadState() {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
  },
});

export const selectorBreadSlice = (state: { bread: BreadState }) =>
  state.bread.bread;

export const { updateBread, initialBreadState } = breadSlice.actions;

export default breadSlice.reducer;