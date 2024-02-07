import React, { useEffect } from "react";
import styles from "./orders.module.scss";
import { Header } from "./header";
import { OrderedPanini } from "./orderedPanini";
import { Order } from "../../models/order";
import { useSelector } from "react-redux";

import {
  currentOrderIdSelector,
  ordersSelector,
} from "../../store/orders/selectors";

export function Orders() {
  const order: Order = {
    name: "nazwa kanapki",
    date: 7409247,
    bread: ["wheat"],
    meat: ["salami", "salami", "ham", "ham", "ham"],
    cheese: ["edam"],
    dressing: [],
    addToOrder: [],
    egg: [],
    serving: ["grilled"],
    spreads: [],
    topping: ["sesame"],
    vegetables: ["tomato", "onion"],
    id: 0,
  };

  const orders = useSelector(ordersSelector);
  const orderId = useSelector(currentOrderIdSelector);

  const currentOrder = orders.find((order) => order.id === orderId);

  return (
    <div className={styles.ordersContainer}>
      <Header />
      <OrderedPanini order={currentOrder} />
    </div>
  );
}
