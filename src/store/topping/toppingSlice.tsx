import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { resetState } from "../appControl/appControlSlice";

interface ToppingState {
  topping: string[];
}

const initialState: ToppingState = {
  topping: [],
};

export const toppingSlice = createSlice({
  name: "topping",
  initialState: initialState,
  reducers: {
    addTopping: (state, action: PayloadAction<string>) => {
      if (state.topping.includes(action.payload)) {
        state.topping = state.topping.filter((top) => top !== action.payload);
      } else {
        state.topping.push(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
  },
});

export const { addTopping } = toppingSlice.actions;

export default toppingSlice.reducer;
