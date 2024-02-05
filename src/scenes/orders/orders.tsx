import React, { useEffect } from "react";
import styles from "./orders.module.scss";
import { Header } from "./header";
import { OrderedPanini } from "./orderedPanini";
import { Order } from "../../models/order";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentOrder } from "../../store/orders/ordersSlice";
import {
  currentOrderSelector,
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
  };

  const dispatch = useDispatch();
  const currentOrder = useSelector(currentOrderSelector);

  const orders = useSelector(ordersSelector);

  return (
    <div className={styles.ordersContainer}>
      <Header />
      <OrderedPanini order={orders[1]} />
    </div>
  );
}
