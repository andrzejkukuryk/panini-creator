import React from "react";
import styles from "./orders.module.scss";
import { Header } from "./header";
import { OrderedPanini } from "./orderedPanini";
import { Order } from "../../models/order";

export function Orders() {
  const order: Order = {
    name: "nazwa kanapki",
    date: 7409247,
    bread: ["wheat"],
    meat: ["salami", "salami", "ham"],
    cheese: ["edam"],
    dressing: [],
    addToOrder: [],
    egg: [],
    serving: ["grilled"],
    spreads: [],
    topping: ["sesame"],
    vegetables: ["tomato", "onion"],
  };

  return (
    <div className={styles.ordersContainer}>
      <Header />
      <OrderedPanini order={order} />
    </div>
  );
}
