import React from "react";
import styles from "./orderedPanini.module.scss";
import { SectionTitle } from "../../components/sectionTitle";
import { Line } from "../../components/line";
import { ListItem } from "./listItem";

export function OrderedPanini() {
  const order = {
    bread: ["wheat"],
    meat: ["salami", "salami", "ham"],
    cheese: ["edam"],
    dressing: [],
  };

  const createList = () => {
    return Object.entries(order).map((item) => (
      <ListItem label={item[0]} ingredients={item[1]} />
    ));
  };

  return (
    <section className={styles.orderContainer}>
      <SectionTitle text="panini name" />
      <Line />
      <ListItem label="bread" ingredients={["Wheat"]} />
      {createList()}
    </section>
  );
}
