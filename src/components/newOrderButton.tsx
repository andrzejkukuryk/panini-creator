import React from "react";
import { AppButton } from "./appButton";
import { useDispatch } from "react-redux";
import {
  resetState,
  updateCurrentScene,
} from "../store/appControl/appControlSlice";

export function NewOrderButton() {
  const dispatch = useDispatch();
  const handleClickNewOrder = () => {
    dispatch(resetState());
    dispatch(updateCurrentScene("CREATOR"));
  };
  return <AppButton text="new order" handledFunction={handleClickNewOrder} />;
}
