import React from "react";
import { AppButton } from "./appButton";
import { useDispatch } from "react-redux";
import { initialBreadState } from "../store/bread/breadSlice";
import { initialAddToOrderState } from "../store/addToOrder/addToOrderSlice";
import { updateCurrentScene } from "../store/appControl/appControlSlice";
import { initialCheeseState } from "../store/cheese/cheeseSlice";
import { initialMeatState } from "../store/meat/meatSlice";
import { initialDresingState } from "../store/dressing/dressingSlice";
import { initialVegetablesState } from "../store/vegetables/vegetablesSlice";
import { initialEggState } from "../store/egg/eggSlice";
import { initialSpreadsState } from "../store/spreads/spreadsSlice";
import { initialServingState } from "../store/serving/servingSlice";
import { initialToppingState } from "../store/topping/toppingSlice";
import { initialNameState } from "../store/name/nameSlice";

export function NewOrderButton() {
  const dispatch = useDispatch();
  const handleClickNewOrder = () => {
    dispatch(initialBreadState());
    dispatch(initialCheeseState());
    dispatch(initialMeatState());
    dispatch(initialDresingState());
    dispatch(initialVegetablesState());
    dispatch(initialEggState());
    dispatch(initialSpreadsState());
    dispatch(initialServingState());
    dispatch(initialToppingState());
    dispatch(initialNameState());
    dispatch(initialAddToOrderState());
    dispatch(updateCurrentScene("CREATOR"));
  };
  return <AppButton text="new order" handledFunction={handleClickNewOrder} />;
}
