import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/order";
import { breadSelector } from "../bread/selectors";
import { selectorBreadSlice } from "../bread/breadSlice";

interface OrdersState {
  currentOrder: Order;
  orders: Order[];
}

const initialState: OrdersState = {
  currentOrder: {
    bread: [""],
    cheese: [],
    meat: [],
    dressing: [],
    vegetables: [],
    egg: [],
    spreads: [],
    serving: [""],
    topping: [],
    name: "",
    addToOrder: [],
    date: 0,
  },
  orders: [
    {
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
    },
    {
      bread: ["ghppodfpogr"],
      cheese: ["fgihfdsoyg", "iufu898e"],
      meat: ["ihoc", "ihoc"],
      dressing: [],
      vegetables: [],
      egg: ["oiioiupf"],
      spreads: [],
      serving: ["WARM"],
      topping: [],
      name: "druga kanapka",
      addToOrder: ["opuou"],
      date: 0,
    },
  ],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    updateCurrentOrder: (state) => {
      console.log(" w slajsie orders: ", state.currentOrder.bread);
    },
  },
});

export const { updateCurrentOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
