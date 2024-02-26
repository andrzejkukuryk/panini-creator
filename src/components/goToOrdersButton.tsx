import React from "react";
import { AppButton } from "./appButton";
import { useDispatch, useSelector } from "react-redux";
import { showOrdersButtonSelector } from "../store/appControl/selectors";
import { updateCurrentScene } from "../store/appControl/appControlSlice";
import { fetchOrders } from "../store/orders/ordersSlice";
import { AppDispatch } from "../store/store";
import { orderStatusSelector } from "../store/orders/selectors";

export function GoToOrdersButton() {
  const dispatch = useDispatch<AppDispatch>();
  const orderStatus = useSelector(orderStatusSelector);

  const showOrdersButton = useSelector(showOrdersButtonSelector);

  const handleClickViewOrders = async () => {
    await dispatch(fetchOrders());
    if (orderStatus === "completed") {
      dispatch(updateCurrentScene("ORDER"));
    } else if (orderStatus === "failed") {
      console.error("Something went wrong with the orders download.");
    }
  };

  return showOrdersButton ? (
    <AppButton text="view orders" handledFunction={handleClickViewOrders} />
  ) : null;
}
