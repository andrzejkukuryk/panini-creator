import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CheeseState {
  addCheese: boolean;
  cheeses: number[];
}

const initialState: CheeseState = {
  addCheese: true,
  cheeses: [0],
};

export const cheeseSlice = createSlice({
  name: "cheese",
  initialState: initialState,
  reducers: {
    updateAddCheese: (state) => {
      state.addCheese = !state.addCheese;
    },
    addNextCheese: (state) => {
      state.cheeses.push(0);
    },
    subCheese: (state, action: PayloadAction<number>) => {
      state.cheeses.splice(action.payload, 1);
    },
    updateCheeses: (
      state,
      action: PayloadAction<{ index: number; value: number }>
    ) => {
      state.cheeses[action.payload.index] = action.payload.value;
    },
  },
});

export const { updateAddCheese, addNextCheese, subCheese, updateCheeses } =
  cheeseSlice.actions;

export default cheeseSlice.reducer;
