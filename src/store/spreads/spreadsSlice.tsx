import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { resetState, randomState } from "../appControl/appControlSlice";

interface SpreadsState {
  spreads: string[];
}

const initialState: SpreadsState = {
  spreads: [],
};

export const spreadsSlice = createSlice({
  name: "spreads",
  initialState: initialState,
  reducers: {
    addSpread: (state, action: PayloadAction<string>) => {
      if (state.spreads.includes(action.payload)) {
        state.spreads = state.spreads.filter(
          (spread) => spread !== action.payload
        );
      } else {
        state.spreads.push(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.spreads = action.payload.spreads;
    });
  },
});

export const { addSpread } = spreadsSlice.actions;

export default spreadsSlice.reducer;
