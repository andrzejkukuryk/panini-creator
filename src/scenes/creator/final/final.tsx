import React from "react";
import styles from "./final.module.scss";
import { SectionTitle } from "../../../components/sectionTitle";
import { Line } from "../../../components/line";
import { Name } from "./name";

export function Final() {
  return (
    <section className={styles.finalContainer}>
      <SectionTitle text="finalize order" />
      <Line />
      <Name />
      <Line />
    </section>
  );
}
