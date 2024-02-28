import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Order } from "../../models/order";
import { breadSelector, breadVariantsSelector } from "../bread/selectors";
import {
  addCheeseSelector,
  cheeseVariantsSelector,
  cheesesSelector,
} from "../cheese/selectors";
import {
  addMeatSelector,
  meatVariantsSelector,
  meatsSelector,
} from "../meat/selectors";
import {
  addDressingSelector,
  dressingVariantsSelector,
  dressingsSelector,
} from "../dressing/selectors";
import {
  vegetableVariantsSelector,
  vegetablesSelector,
} from "../vegetables/selectors";
import {
  addEggSelector,
  eggVariantsSelector,
  eggsSelector,
} from "../egg/selectors";
import { spreadSelector, spreadVariantsSelector } from "../spreads/selectors";
import { servingSelector, servingVariantsSelector } from "../serving/selectors";
import { toppingSelector, toppingVariantsSelector } from "../topping/selectors";
import { defaultNameSelector, nameSelector } from "../name/selectors";
import { addToOrderSelector } from "../addToOrder/selectors";
import { TYPE_NAPKINS } from "../../scenes/creator/final/napkins";
import { TYPE_CUTLERY } from "../../scenes/creator/final/cutlery";
import { ApiStatus } from "../ingredientsSlice";

interface OrdersState {
  orders: Order[];
  randomOrder: Order;
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
  randomOrder: {
    bread: ["FULL GRAIN"],
    cheese: [],
    meat: [],
    dressing: [],
    egg: [],
    vegetables: [],
    serving: ["WARM"],
    name: "",
    spreads: [],
    topping: [],
    addToOrder: [],
    orderId: 0,
  },
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
    builder.addCase(createRandomOrder.fulfilled, (state, action) => {
      state.randomOrder = action.payload;
    });
    builder.addCase(createRandomOrder.fulfilled, (state, action) => {
      state.randomOrder = action.payload;
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

export const createRandomOrder = createAsyncThunk<
  Order,
  void,
  { state: RootState }
>("orders/randomOrder", (_, thunkAPI) => {
  const state = thunkAPI.getState() as RootState;
  const breadVariants = breadVariantsSelector(state);
  const cheeseVariants = cheeseVariantsSelector(state);
  const meatVariants = meatVariantsSelector(state);
  const dressingVariants = dressingVariantsSelector(state);
  const vegetablesVariants = vegetableVariantsSelector(state);
  const eggVariants = eggVariantsSelector(state);
  const spreadVariants = spreadVariantsSelector(state);
  const servingVariants = servingVariantsSelector(state);
  const toppingVariants = toppingVariantsSelector(state);
  const currentName = nameSelector(state);
  const currentDefaultName = defaultNameSelector(state);

  const randomizeValue = (inputArr: string[]): [string] => {
    const randomIndex = (arr: string[]) =>
      Math.floor(Math.random() * arr.length);

    return [inputArr[randomIndex(inputArr)]];
  };

  const randomizeArray = (
    inputArr: string[],
    outputArr: string[]
  ): string[] => {
    const randomBoolean = () => {
      if (Math.random() > 0.5) {
        return false;
      } else {
        return true;
      }
    };

    const randomIndex = (arr: string[]) =>
      Math.floor(Math.random() * arr.length);
    if (randomBoolean()) {
      outputArr.push(inputArr[randomIndex(inputArr)]);
      return randomizeArray(inputArr, outputArr);
    } else {
      return outputArr;
    }
  };

  const uniqueValuesArray = (inputArr: string[]): string[] => {
    const uniqueArray: string[] = [];
    inputArr.forEach((element) => {
      if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
      }
    });
    return uniqueArray;
  };

  const randomBread = randomizeValue(breadVariants);
  const randomCheese = randomizeArray(cheeseVariants, []);
  const randomMeat = randomizeArray(meatVariants, []);
  const randomDressing = randomizeArray(dressingVariants, []);
  const randomVegetables = uniqueValuesArray(
    randomizeArray(vegetablesVariants, [])
  );
  const randomEgg = randomizeArray(eggVariants, []);
  const randomSpreads = uniqueValuesArray(randomizeArray(spreadVariants, []));
  const randomServing = randomizeValue(servingVariants);
  const randomTopping = uniqueValuesArray(randomizeArray(toppingVariants, []));
  const randomAdds = uniqueValuesArray(
    randomizeArray([TYPE_NAPKINS, TYPE_CUTLERY], [])
  );

  return {
    bread: randomBread,
    cheese: randomCheese,
    meat: randomMeat,
    dressing: randomDressing,
    vegetables: randomVegetables,
    egg: randomEgg,
    spreads: randomSpreads,
    serving: randomServing,
    topping: randomTopping,
    name: currentName.length > 0 ? currentName : currentDefaultName,
    addToOrder: randomAdds,
    orderId: new Date().getTime(),
  };
});

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