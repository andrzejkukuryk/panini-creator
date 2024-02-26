import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { resetState } from "../appControl/appControlSlice";
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
    builder.addCase(randomCheese.fulfilled, (state, action) => {
      state.addCheese = action.payload.addCheese;
      state.cheeses = action.payload.cheeses;
    });
  },
});

export const randomCheese = createAsyncThunk<
  CheeseState,
  void,
  { state: RootState }
>("cheese/randomCheese", (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const trueOrFalse = () => {
    if (Math.random() > 0.5) {
      return false;
    } else {
      return true;
    }
  };
  const cheeseVariants = cheeseVariantsSelector(state);
  const randomIndex = () => Math.floor(Math.random() * cheeseVariants.length);

  const randomCheeses: string[] = [];
  let addCheese: boolean = true;
  const addNextCheese = () => {
    randomCheeses.push(cheeseVariants[randomIndex()]);
    if (trueOrFalse()) {
      addNextCheese();
    }
  };

  if (trueOrFalse()) {
    addNextCheese();
  } else {
    addCheese = false;
  }

  return {
    addCheese: addCheese,
    cheeses: randomCheeses,
  };
});

export const { updateAddCheese, addNextCheese, subCheese, updateCheeses } =
  cheeseSlice.actions;

export default cheeseSlice.reducer;
