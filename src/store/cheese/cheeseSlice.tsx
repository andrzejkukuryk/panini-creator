import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomState, resetState } from "../appControl/appControlSlice";

interface CheeseState {
  addCheese: boolean;
  cheeses: string[];
}

const initialState: CheeseState = {
  addCheese: true,
  cheeses: ["EDAM"],
};

export const cheeseSlice = createSlice({
  name: "cheese",
  initialState: initialState,
  reducers: {
    updateAddCheese: (state) => {
      state.addCheese = !state.addCheese;
      if (state.addCheese && state.cheeses.length === 0) {
        state.cheeses = ["EDAM"];
      }
    },
    addNextCheese: (state) => {
      state.cheeses.push("EDAM");
    },
    subCheese: (state, action: PayloadAction<number>) => {
      state.cheeses.splice(action.payload, 1);
    },
    updateCheeses: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.cheeses[action.payload.index] = action.payload.value;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.cheeses = action.payload.cheese;
      state.addCheese = action.payload.cheese.length > 0;
    });
  },
});

export const { updateAddCheese, addNextCheese, subCheese, updateCheeses } =
  cheeseSlice.actions;

export default cheeseSlice.reducer;
