import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomState, resetState } from "../appControl/appControlSlice";
import { breadVariantsSelector } from "./selectors";
import { RootState } from "../store";

interface BreadState {
  bread: string;
}

const initialState: BreadState = {
  bread: "FULL GRAIN",
};

export const breadSlice = createSlice({
  name: "bread",
  initialState: initialState,
  reducers: {
    updateBread: (state, action: PayloadAction<string>) => {
      state.bread = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomBread.fulfilled, (state, action) => {
      state.bread = action.payload;
    });
  },
});

export const randomBread = createAsyncThunk<string, void, { state: RootState }>(
  "bread/randomBread",
  (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const breadVariants = breadVariantsSelector(state);
    const randomIndex = Math.floor(Math.random() * breadVariants.length);

    console.log(breadVariants[randomIndex]);
    return breadVariants[randomIndex];
  }
);

export const { updateBread } = breadSlice.actions;

export default breadSlice.reducer;
