import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/order";
import { breadSelector } from "../bread/selectors";
import { selectorBreadSlice } from "../bread/breadSlice";

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.orders.push(action.payload);
    });
  },
});

export const createOrder = createAsyncThunk<Order, void, { state: RootState }>(
  "orders/createOrder",
  (_, thunkAPI) => {
    console.log(thunkAPI.getState());
    const state = thunkAPI.getState() as RootState;
    const currentBread = breadSelector(state);

    return {
      bread: ["ihdsoih"],
      cheese: [],
      meat: ["kgfhdop", "fu7r98f"],
      dressing: ["ifioisdhf"],
      vegetables: ["fhifuy", "ufdsifyf", "fiuysdify"],
      egg: [],
      spreads: [],
      serving: ["COLD"],
      topping: [],
      name: "pierwsza kanapka",
      addToOrder: [],
      date: 0,
    };
  }
);

export const {} = ordersSlice.actions;

export default ordersSlice.reducer;
