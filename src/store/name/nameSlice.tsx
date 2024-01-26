import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NameState {
  name: string;
}

const initialState: NameState = {
  name: "",
};

export const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { updateName } = nameSlice.actions;

export default nameSlice.reducer;
