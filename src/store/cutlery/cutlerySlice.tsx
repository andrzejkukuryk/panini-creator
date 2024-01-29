import { createSlice } from "@reduxjs/toolkit";

interface CutleryState {
  addCutlery: boolean;
}

const initialState: CutleryState = {
  addCutlery: false,
};

export const cutlerySlice = createSlice({
  name: "cutlery",
  initialState: initialState,
  reducers: {
    updateAddCutlery: (state) => {
      state.addCutlery = !state.addCutlery;
    },
  },
});

export const { updateAddCutlery } = cutlerySlice.actions;

export default cutlerySlice.reducer;
