import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ApiStatus = "idle" | "loading" | "completed" | "failed";

interface IngredientsState {
  allIngredients: {
    breadVariants: string[];
    cheeseVariants: string[];
    dressingVariants: string[];
    eggVariants: string[];
    meatVariants: string[];
    spreadVariant: string[];
    toppingVariant: string[];
    vegetableVariant: string[];
  };
  servingVariant: string[];
  status: ApiStatus;
}

const initialState: IngredientsState = {
  // allIngredients: {
  //   breadVariants: ["WHEAT", "FULL GRAIN"],
  //   cheeseVariants: [
  //     "EDAM", "MOZZARELLA", "STRACIATELLA", "GOUDA"
  //   ],
  //   dressingVariants: ["OLIVE OIL", "HONEY MUSTARD", "RANCH", "MAYO"],
  //   eggVariants: ["FRIED EGG", "OMELET", "SCRAMBLED EGG", "POACHED EGG"],
  //   meatVariants: ["SALAMI", "HAM", "BACON", "CHICKEN"],
  //   spreadVariant: ["BUTTER", "HUMMUS", "GUACAMOLE"],
  //   toppingVariant: ["SESAME"],
  //   vegetableVariant: [
  //     "SALAD",
  //     "TOMATO",
  //     "CUCUMBER",
  //     "ONION",
  //     "PICKLES",
  //     "PEPPER",
  //     "ASPARAGUS",
  //     "BEETROOT",
  //     "OBERGINE",
  //   ],
  // },
  // servingVariant: ["GRILLED", "WARM", "COLD"],
  allIngredients: {
    breadVariants: [],
    cheeseVariants: [],
    dressingVariants: [],
    eggVariants: [],
    meatVariants: [],
    spreadVariant: [],
    toppingVariant: [],
    vegetableVariant: [],
  },
  servingVariant: [],
  status: "idle",
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.allIngredients = action.payload.allIngredients;
        state.servingVariant = action.payload.servingVariant;
        state.status = "completed";
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const fetchIngredients = createAsyncThunk(
  "ingredients/fetchIngredients",
  async () => {
    const endpoint =
      "https://x8ki-letl-twmt.n7.xano.io/api:AYUnNWF1/ingredients";
    const jsonResponse = await fetch(endpoint, { method: "GET" });
    const response = await jsonResponse.json();

    return response[0];
  }
);

export const {} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
