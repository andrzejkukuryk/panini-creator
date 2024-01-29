import { createSlice } from "@reduxjs/toolkit";

interface NapkinsState {
  addNapkins: boolean;
}

const initialState: NapkinsState = {
  addNapkins: false,
};

export const napkinsSlice = createSlice({
  name: "napkins",
  initialState: initialState,
  reducers: {
    updateAddNapkins: (state) => {
      state.addNapkins = !state.addNapkins;
    },
  },
});

export const { updateAddNapkins } = napkinsSlice.actions;

export default napkinsSlice.reducer;
