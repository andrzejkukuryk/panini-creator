import React from "react";
import styles from "./final.module.scss";
import { SectionTitle } from "../../../components/sectionTitle";
import { Line } from "../../../components/line";
import { Name } from "./name";
import { Cutlery } from "./cutlery";
import { Napkins } from "./napkins";
import { AppButton } from "../../../components/appButton";
import { useDispatch } from "react-redux";
import {
  updateCurrentScene,
  updateStartAnimation,
} from "../../../store/appControl/appControlSlice";

export function Final() {
  const dispatch = useDispatch();

  const handleClickPlaceOrder = () => {
    dispatch(updateCurrentScene("success"));
  };

  const handleClickStartAgain = () => {
    dispatch(updateCurrentScene("splash"));
  };

  return (
    <section className={styles.finalContainer}>
      <SectionTitle text="finalize order" />
      <Line />
      <Name />
      <Line />
      <Cutlery />
      <Line />
      <Napkins />
      <Line />
      <AppButton
        text="place order"
        handledFunction={handleClickPlaceOrder}
        black
      />
      <AppButton text="start again" handledFunction={handleClickStartAgain} />
    </section>
  );
}
