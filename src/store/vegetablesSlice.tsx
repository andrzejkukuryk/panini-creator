import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface VegetablesState {
  vegetables: number[];
  vegetableToCheck: number | null;
}

const initialState: VegetablesState = {
  vegetables: [],
  vegetableToCheck: null,
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
    checkVegetable: (state, action: PayloadAction<number>) => {
      state.vegetableToCheck = action.payload;
    },
  },
});

export const { addVegetable, checkVegetable } = vegetablesSlice.actions;

export default vegetablesSlice.reducer;
