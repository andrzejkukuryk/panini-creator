import React from "react";
import styles from "./extras.module.scss";
import { SectionTitle } from "../../../components/sectionTitle";
import { Line } from "../../../components/line";
import { Egg } from "./egg";
import { Spreads } from "./spreads";

export function Extras() {
  return (
    <section className={styles.extrasContainer}>
      <SectionTitle text="configure extras" />
      <Line />
      <Egg />
      <Line />
      <Spreads />
      <Line />
    </section>
  );
}
