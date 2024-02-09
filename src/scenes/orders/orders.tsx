import React, { useEffect } from "react";
import styles from "./orders.module.scss";
import { Header } from "./header";
import { OrderedPanini } from "./orderedPanini";
import { useSelector } from "react-redux";

import { currentOrderSelector } from "../../store/orders/selectors";

export function Orders() {
  const currentOrder = useSelector(currentOrderSelector);

  return (
    <div className={styles.ordersContainer}>
      <Header />
      <OrderedPanini order={currentOrder} />
    </div>
  );
}
