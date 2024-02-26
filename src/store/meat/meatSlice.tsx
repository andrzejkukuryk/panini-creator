import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState } from "../appControl/appControlSlice";
import { RootState } from "../store";
import { meatVariantsSelector } from "./selectors";

interface MeatState {
  addMeat: boolean;
  meats: string[];
}

const initialState: MeatState = {
  addMeat: true,
  meats: ["SALAMI"],
};

export const meatSlice = createSlice({
  name: "meat",
  initialState: initialState,
  reducers: {
    updateAddMeat: (state) => {
      state.addMeat = !state.addMeat;
    },
    addNextMeat: (state) => {
      state.meats.push("SALAMI");
    },
    subMeat: (state, action: PayloadAction<number>) => {
      state.meats.splice(action.payload, 1);
    },
    updateMeats: (
      state,
      action: PayloadAction<{ index: number; value: string }>
    ) => {
      state.meats[action.payload.index] = action.payload.value;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetState, (_state, _action) => {
      return initialState;
    });
    builder.addCase(randomMeat.fulfilled, (state, action) => {
      state.addMeat = action.payload.addMeat;
      state.meats = action.payload.meats;
    });
  },
});

export const randomMeat = createAsyncThunk<
  MeatState,
  void,
  { state: RootState }
>("meat/randomMeat", (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const trueOrFalse = () => {
    if (Math.random() > 0.5) {
      return false;
    } else {
      return true;
    }
  };
  const meatVariants = meatVariantsSelector(state);
  const randomIndex = () => Math.floor(Math.random() * meatVariants.length);

  const randomMeats: string[] = [];
  let addMeat: boolean = true;
  const addNextMeat = () => {
    randomMeats.push(meatVariants[randomIndex()]);
    if (trueOrFalse()) {
      addNextMeat();
    }
  };

  if (trueOrFalse()) {
    addNextMeat();
  } else {
    addMeat = false;
  }

  return {
    addMeat: addMeat,
    meats: randomMeats,
  };
});

export const { updateAddMeat, addNextMeat, subMeat, updateMeats } =
  meatSlice.actions;

export default meatSlice.reducer;
