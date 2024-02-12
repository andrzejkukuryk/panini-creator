import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    initialVegetablesState() {
      return initialState;
    },
  },
});

export const { addVegetable, initialVegetablesState } = vegetablesSlice.actions;

export default vegetablesSlice.reducer;
