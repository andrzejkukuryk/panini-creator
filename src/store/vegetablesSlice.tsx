import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface VegetablesState {
  vegetables: number[];
}

const initialState: VegetablesState = {
  vegetables: [],
};

export const vegetablesSlice = createSlice({
  name: "vegetables",
  initialState: initialState,
  reducers: {
    addVegetable: (state, action: PayloadAction<number>) => {
      if (state.vegetables.includes(action.payload)) {
        state.vegetables = state.vegetables.filter(
          (vegetable) => vegetable !== action.payload
        );
      } else {
        state.vegetables.push(action.payload);
      }
    },
  },
});

export const { addVegetable } = vegetablesSlice.actions;

export default vegetablesSlice.reducer;
