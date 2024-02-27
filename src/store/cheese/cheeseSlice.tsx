import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomState, resetState } from "../appControl/appControlSlice";
import { RootState } from "../store";
import { cheeseVariantsSelector } from "./selectors";

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
