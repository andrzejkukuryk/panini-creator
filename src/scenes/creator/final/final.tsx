import React from "react";
import styles from "./final.module.scss";
import { SectionTitle } from "../../../components/sectionTitle";
import { Line } from "../../../components/line";
import { Name } from "./name";
import { Cutlery } from "./cutlery";
import { Napkins } from "./napkins";
import { AppButton } from "../../../components/appButton";

export function Final() {
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
      <AppButton text="place order" handledFunction={() => {}} black />
      <AppButton text="start again" handledFunction={() => {}} />
    </section>
  );
}