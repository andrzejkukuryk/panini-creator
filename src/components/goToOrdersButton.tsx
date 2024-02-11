import React from "react";
import { AppButton } from "./appButton";
import { useDispatch, useSelector } from "react-redux";
import { showOrdersButtonSelector } from "../store/appControl/selectors";
import { updateCurrentScene } from "../store/appControl/appControlSlice";

export function GoToOrdersButton() {
  const dispatch = useDispatch();

  const showOrdersButton = useSelector(showOrdersButtonSelector);

  const handleClickViewOrders = () => {
    dispatch(updateCurrentScene("ORDER"));
  };

  return showOrdersButton ? (
    <AppButton text="view orders" handledFunction={handleClickViewOrders} />
  ) : (
    <></>
  );
}
