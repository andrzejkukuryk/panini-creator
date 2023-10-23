import React from "react";
import styles from "./base.module.scss";
import { SectionTitle } from "../../../components/sectionTitle";
import { Line } from "../../../components/line";
import { Bread } from "./bread";
import { Cheese } from "./cheese";

export function Base() {
  return (
    <section className={styles.baseContainer}>
      <SectionTitle text="configure base" />
      <Line />
      <Bread />
      <Line />
      <Cheese />
      <Line />
    </section>
  );
}
