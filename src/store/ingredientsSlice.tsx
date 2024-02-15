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
  order: {
    bread: string;
    addCheese: boolean;
    cheeses: number[];
    dressings: string[];
    eggs: string[];
    meats: string[];
    spreads: string[];
    toppings: string[];
    vegetables: string[];
    serving: string;
    name: string;
    napkins: boolean;
    cultery: boolean;
  };
  status: ApiStatus;
}

const initialState: IngredientsState = {
  allIngredients: {
    breadVariants: ["WHEAT", "FULL GRAIN"],
    cheeseVariants: ["EDAM", "MOZZARELLA", "STRACIATELLA", "GOUDA"],
    dressingVariants: ["OLIVE OIL", "HONEY MUSTARD", "RANCH", "MAYO"],
    eggVariants: ["FRIED EGG", "OMELET", "SCRAMBLED EGG", "POACHED EGG"],
    meatVariants: ["SALAMI", "HAM", "BACON", "CHICKEN"],
    spreadVariant: ["BUTTER", "HUMMUS", "GUACAMOLE"],
    toppingVariant: ["SESAME"],
    vegetableVariant: [
      "SALAD",
      "TOMATO",
      "CUCUMBER",
      "ONION",
      "PICKLES",
      "PEPPER",
      "ASPARAGUS",
      "BEETROOT",
      "OBERGINE",
    ],
  },
  servingVariant: ["GRILLED", "WARM", "COLD"],
  order: {
    bread: "",
    addCheese: true,
    cheeses: [0],
    dressings: [],
    eggs: [],
    meats: [],
    spreads: [],
    toppings: [],
    vegetables: [],
    serving: "",
    name: "",
    napkins: false,
    cultery: false,
  },
  status: "idle",
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {
    updateBread: (state, action: PayloadAction<string>) => {
      state.order.bread = action.payload;
    },
    updateAddCheese: (state) => {
      state.order.addCheese = !state.order.addCheese;
    },
    addNextCheese: (state) => {
      state.order.cheeses.push(0);
    },
    subCheese: (state, action: PayloadAction<number>) => {
      state.order.cheeses.splice(action.payload, 1);
    },
    updateCheeses: (
      state,
      action: PayloadAction<{ index: number; value: number }>
    ) => {
      state.order.cheeses[action.payload.index] = action.payload.value;
    },
    updateDressings: (state, action: PayloadAction<string[]>) => {
      state.order.dressings = action.payload;
    },
    updateEggs: (state, action: PayloadAction<string[]>) => {
      state.order.eggs = action.payload;
    },
    updateMeats: (state, action: PayloadAction<string[]>) => {
      state.order.meats = action.payload;
    },
    updateSpreads: (state, action: PayloadAction<string[]>) => {
      state.order.spreads = action.payload;
    },
    updateToppings: (state, action: PayloadAction<string[]>) => {
      state.order.toppings = action.payload;
    },
    updateVegetables: (state, action: PayloadAction<string[]>) => {
      state.order.vegetables = action.payload;
    },
    updateServing: (state, action: PayloadAction<string>) => {
      state.order.serving = action.payload;
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.order.name = action.payload;
    },
    updateNapkins: (state, action: PayloadAction<boolean>) => {
      state.order.napkins = action.payload;
    },
    updateCultery: (state, action: PayloadAction<boolean>) => {
      state.order.cultery = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchIngredients.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
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
    console.log(response);
  }
);

export const {
  updateBread,
  updateAddCheese,
  addNextCheese,
  subCheese,
  updateCheeses,
  updateDressings,
  updateEggs,
  updateMeats,
  updateSpreads,
  updateToppings,
  updateVegetables,
  updateServing,
  updateName,
  updateNapkins,
  updateCultery,
} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
