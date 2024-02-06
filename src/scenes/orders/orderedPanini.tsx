import React from "react";
import styles from "./orderedPanini.module.scss";
import { SectionTitle } from "../../components/sectionTitle";
import { Line } from "../../components/line";
import { ListItem } from "./listItem";
import { Order } from "../../models/order";

interface OrderedPaniniProps {
  order: Order;
}

export function OrderedPanini({ order }: OrderedPaniniProps) {
  const createList = () => {
    return Object.entries(order)
      .filter((item) => typeof item[1] === "object")
      .map((item) => (
        <ListItem
          label={item[0]}
          ingredients={item[1]}
          key={`order${item[0]}`}
        />
      ));
  };

  return (
    <section className={styles.orderContainer}>
      {/* <SectionTitle text={order.name} /> */}
      <Line />
      {createList()}
    </section>
  );
}
