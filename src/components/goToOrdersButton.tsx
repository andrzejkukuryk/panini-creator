import React from "react";
import { AppButton } from "./appButton";
import { useDispatch, useSelector } from "react-redux";
import { showOrdersButtonSelector } from "../store/appControl/selectors";
import { updateCurrentScene } from "../store/appControl/appControlSlice";
import { fetchOrders } from "../store/orders/ordersSlice";
import { AppDispatch } from "../store/store";

export function GoToOrdersButton() {
  const dispatch = useDispatch<AppDispatch>();

  const showOrdersButton = useSelector(showOrdersButtonSelector);

  const handleClickViewOrders = () => {
    dispatch(fetchOrders());
    dispatch(updateCurrentScene("ORDER"));
  };

  return showOrdersButton ? (
    <AppButton text="view orders" handledFunction={handleClickViewOrders} />
  ) : null;
}
