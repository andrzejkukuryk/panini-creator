import React from "react";
import styles from "./final.module.scss";
import { SectionTitle } from "../../../components/sectionTitle";
import { Line } from "../../../components/line";
import { Name } from "./name";
import { Cutlery } from "./cutlery";
import { Napkins } from "./napkins";
import { AppButton } from "../../../components/appButton";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../store/orders/ordersSlice";
import { AppDispatch } from "../../../store/store";

export function Final() {
  const dispatch = useDispatch<AppDispatch>();

  const handleClickOrder = () => {
    dispatch(createOrder());
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
      <AppButton text="place order" handledFunction={handleClickOrder} black />
      <AppButton text="start again" handledFunction={() => {}} />
    </section>
  );
}
