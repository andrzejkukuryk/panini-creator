import React from "react";
import styles from "./orders.module.scss";
import { Header } from "./header";
import { OrderedPanini } from "./orderedPanini";
import { useDispatch, useSelector } from "react-redux";

import { currentOrderSelector } from "../../store/orders/selectors";
import { AppButton } from "../../components/appButton";
import { updateCurrentScene } from "../../store/appControl/appControlSlice";

export function Orders() {
  const dispatch = useDispatch();
  const currentOrder = useSelector(currentOrderSelector);

  const handleClickNewOrder = () => {
    dispatch(updateCurrentScene("CREATOR"));
  };

  return (
    <div className={styles.ordersContainer}>
      <Header />
      <OrderedPanini order={currentOrder} />
      <AppButton text="new order" handledFunction={handleClickNewOrder} />
    </div>
  );
}
