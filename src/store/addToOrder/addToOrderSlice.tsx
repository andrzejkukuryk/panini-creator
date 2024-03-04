import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { resetState, randomState } from "../appControl/appControlSlice";

interface AddToOrderState {
  addToOrder: string[];
}

const initialState: AddToOrderState = {
  addToOrder: [],
};

export const addToOrderSlice = createSlice({
  name: "addToOrder",
  initialState: initialState,
  reducers: {
    addAdditionally: (state, action: PayloadAction<string>) => {
      if (state.addToOrder.includes(action.payload)) {
        state.addToOrder = state.addToOrder.filter(
          (add) => add !== action.payload
        );
      } else {
        state.addToOrder.push(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomState, (state, action) => {
      state.addToOrder = action.payload.addToOrder;
    });
  },
});

export const { addAdditionally } = addToOrderSlice.actions;

export default addToOrderSlice.reducer;
