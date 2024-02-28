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
import { ApiStatus } from "../ingredientsSlice";

interface OrdersState {
  orders: Order[];
  currentOrderIndex: number;
  currentOrderId: number;
  orderStatus: ApiStatus;
}

interface OrderXano extends Order {
  id?: number;
  created_at?: number;
}

const initialState: OrdersState = {
  orders: [],
  currentOrderIndex: 0,
  currentOrderId: 0,
  orderStatus: "idle",
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState: initialState,
  reducers: {
    updateCurrentOrderIndex: (state, action: PayloadAction<number>) => {
      state.currentOrderIndex = action.payload;
    },
    updateCurrentOrderId: (state, action: PayloadAction<number>) => {
      state.currentOrderId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.orderStatus = "loading";
    });
    builder.addCase(createOrder.fulfilled, (state) => {
      state.orderStatus = "completed";
    }),
      builder.addCase(createOrder.rejected, (state) => {
        state.orderStatus = "failed";
      });
    builder.addCase(fetchOrders.pending, (state) => {
      state.orderStatus = "loading";
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      const ordersXano: OrderXano[] = action.payload;
      ordersXano.forEach((order) => {
        delete order["id"];
        delete order["created_at"];
      });
      state.orders = ordersXano;
      state.orderStatus = "completed";
    });
    builder.addCase(fetchOrders.rejected, (state) => {
      state.orderStatus = "failed";
    });
  },
});

export const createOrder = createAsyncThunk<Order, void, { state: RootState }>(
  "orders/createOrder",
  async (_, thunkAPI) => {
    try {
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

      const currentOrder = {
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
        orderId: new Date().getTime(),
      };

      const endpoint = "https://x8ki-letl-twmt.n7.xano.io/api:wGOItlwE/orders";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentOrder),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      return response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const endpoint = "https://x8ki-letl-twmt.n7.xano.io/api:wGOItlwE/orders";
  const dateHourAgo = String(new Date().getTime() - 3600000);
  const params = new URLSearchParams();
  params.append("orders_id", dateHourAgo);
  const endpointWithParams = `${endpoint}?${params.toString()}`;
  const jsonResponse = await fetch(endpointWithParams, { method: "GET" });
  const response = await jsonResponse.json();
  return response;
});

export const { updateCurrentOrderIndex, updateCurrentOrderId } =
  ordersSlice.actions;

export default ordersSlice.reducer;