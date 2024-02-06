import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NameState {
  name: string;
  defaultName: string;
}

const initialState: NameState = {
  name: "",
  defaultName: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateDefaultName: (state, action: PayloadAction<string>) => {
      state.defaultName = action.payload;
    },
  },
});

export const { updateName, updateDefaultName } = nameSlice.actions;

export default nameSlice.reducer;
