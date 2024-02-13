import React from "react";
import { AppButton } from "./appButton";
import { useDispatch, useSelector } from "react-redux";
import {
  resetState,
  updateCurrentScene,
} from "../store/appControl/appControlSlice";
import { showNewOrderButtonSelector } from "../store/appControl/selectors";

export function NewOrderButton() {
  const dispatch = useDispatch();
  const handleClickNewOrder = () => {
    dispatch(resetState());
    dispatch(updateCurrentScene("CREATOR"));
  };

  const showNewOrderButton = useSelector(showNewOrderButtonSelector);
  return showNewOrderButton ? (
    <AppButton text="new order" handledFunction={handleClickNewOrder} />
  ) : null;
}
