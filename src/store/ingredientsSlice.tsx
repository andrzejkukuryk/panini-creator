import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ApiStatus = "idle" | "loading" | "completed" | "failed";

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
      .addCase(fetchIngredients.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.allIngredients.breadVariants =
          action.payload.allIngredients.breadVariants;
        state.allIngredients.cheeseVariants =
          action.payload.allIngredients.cheeseVariants;
        state.allIngredients.dressingVariants =
          action.payload.allIngredients.dressingVariants;
        state.allIngredients.eggVariants =
          action.payload.allIngredients.eggVariants;
        state.allIngredients.meatVariants =
          action.payload.allIngredients.meatVariants;
        state.allIngredients.spreadVariant =
          action.payload.allIngredients.spreadVariant;
        state.allIngredients.toppingVariant =
          action.payload.allIngredients.toppingVariant;
        state.allIngredients.vegetableVariant =
          action.payload.allIngredients.vegetableVariant;
        state.servingVariant = action.payload.servingVariant;
        state.status = "completed";
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
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
