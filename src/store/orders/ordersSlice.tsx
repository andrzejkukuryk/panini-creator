import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/order";
import { breadSelector } from "../bread/selectors";
import { addCheeseSelector, cheesesSelector } from "../cheese/selectors";
import { addMeatSelector, meatsSelector } from "../meat/selectors";
import { addDressingSelector, dressingsSelector } from "../dressing/selectors";
import { vegetablesSelector } from "../vegetables/selectors";
import { addEggSelector, eggsSelector } from "../egg/selectors";
import { spreadSelector } from "../spreads/selectors";
import { servingSelector } from "../serving/selectors";
import { toppingSelector } from "../topping/selectors";
import { defaultNameSelector, nameSelector } from "../name/selectors";
import { addToOrderSelector } from "../addToOrder/selectors";

interface OrdersState {
  orders: Order[];
  currentOrderIndex: number;
}

const initialState: OrdersState = {
  // orders: [
  //   {
  //     bread: ["ihdsoih"],
  //     cheese: [],
  //     meat: ["kgfhdop", "fu7r98f"],
  //     dressing: ["ifioisdhf"],
  //     vegetables: ["fhifuy", "ufdsifyf", "fiuysdify"],
  //     egg: [],
  //     spreads: [],
  //     serving: ["HOT"],
  //     topping: [],
  //     name: "zerowa kanapka",
  //     addToOrder: [],
  //     date: 0,
  //   },
  // ],
  orders: [],
  currentOrderIndex: 0,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    updateCurrentOrderIndex: (state, action: PayloadAction<number>) => {
      state.currentOrderIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
    });
  },
});

export const createOrder = createAsyncThunk<Order, void, { state: RootState }>(
  "orders/createOrder",
  (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const currentBread = breadSelector(state);
    const addCheese = addCheeseSelector(state);
    const currentCheese = cheesesSelector(state);
    const addMeat = addMeatSelector(state);
    const currentMeat = meatsSelector(state);
    const addDressing = addDressingSelector(state);
    const currentDressing = dressingsSelector(state);
    const currentVegetables = vegetablesSelector(state);
    const addEgg = addEggSelector(state);
    const currentEgg = eggsSelector(state);
    const currentSpread = spreadSelector(state);
    const currentServing = servingSelector(state);
    const currentTopping = toppingSelector(state);
    const currentName = nameSelector(state);
    const currentDefaultName = defaultNameSelector(state);
    const currentAdds = addToOrderSelector(state);

    return {
      bread: [currentBread],
      cheese: addCheese ? currentCheese : [],
      meat: addMeat ? currentMeat : [],
      dressing: addDressing ? currentDressing : [],
      vegetables: currentVegetables,
      egg: addEgg ? currentEgg : [],
      spreads: currentSpread,
      serving: [currentServing],
      topping: currentTopping,
      name: currentName.length > 0 ? currentName : currentDefaultName,
      addToOrder: currentAdds,
      date: 0,
    };
  }
);

export const { updateCurrentOrderIndex } = ordersSlice.actions;

export default ordersSlice.reducer;
