import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { resetState, randomState } from "../appControl/appControlSlice";

interface VegetablesState {
  vegetables: string[];
}

const initialState: VegetablesState = {
  vegetables: [],
};

export const vegetablesSlice = createSlice({
  name: "vegetables",
  initialState: initialState,
  reducers: {
    addVegetable: (state, action: PayloadAction<string>) => {
      if (state.vegetables.includes(action.payload)) {
        state.vegetables = state.vegetables.filter(
          (vegetable) => vegetable !== action.payload
        );
      } else {
        state.vegetables.push(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.vegetables = action.payload.vegetables;
    });
  },
});

export const { addVegetable } = vegetablesSlice.actions;

export default vegetablesSlice.reducer;
