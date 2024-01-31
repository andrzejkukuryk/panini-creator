import React from "react";
import styles from "./orders.module.scss";
import { Header } from "./header";
import { OrderedPanini } from "./orderedPanini";

export function Orders() {
  return (
    <div className={styles.ordersContainer}>
      <Header />
      <OrderedPanini />
    </div>
  );
}
