import React from "react";
import styles from "./orders.module.scss";
import { Header } from "./header";
import { OrderedPanini } from "./orderedPanini";
import { useSelector } from "react-redux";

import { currentOrderSelector } from "../../store/orders/selectors";

import { NewOrderButton } from "../../components/newOrderButton";

export function Orders() {
  const currentOrder = useSelector(currentOrderSelector);


  return (
    <div className={styles.ordersContainer}>
      <Header />
      <OrderedPanini order={currentOrder} />
      <NewOrderButton />
    </div>
  );
}
