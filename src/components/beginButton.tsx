import React from "react";
import { AppButton } from "./appButton";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentScene,
  updateStartAnimation,
} from "../store/appControl/appControlSlice";
import { showBeginButtonSelector } from "../store/appControl/selectors";

export function BeginButton() {
  const dispatch = useDispatch();

  const handleClickBegin = () => {
    dispatch(updateCurrentScene("ANIMATION"));
    dispatch(updateStartAnimation(true));
    setTimeout(() => dispatch(updateCurrentScene("CREATOR")), 4000);
  };

  const showBeginButton = useSelector(showBeginButtonSelector);

  return showBeginButton ? (
    <AppButton text="begin" handledFunction={handleClickBegin} />
  ) : null;
}
