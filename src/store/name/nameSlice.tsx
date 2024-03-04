import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState } from "../appControl/appControlSlice";

interface NameState {
  name: string;
  defaultName: string;
  nameTooLong: boolean;
}

const initialState: NameState = {
  name: "",
  defaultName: "",
  nameTooLong: false,
};

export const nameSlice = createSlice({
  name: "name",
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      if (action.payload.length <= 40) {
        state.name = action.payload.toUpperCase();
        state.nameTooLong = false;
      } else {
        state.nameTooLong = true;
      }
    },
    updateDefaultName: (state, action: PayloadAction<string>) => {
      if (action.payload.length <= 40) {
        state.defaultName = action.payload;
        state.nameTooLong = false;
      } else {
        state.nameTooLong = true;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
  },
});

export const { updateName, updateDefaultName } = nameSlice.actions;

export default nameSlice.reducer;
