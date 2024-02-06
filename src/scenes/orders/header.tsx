import React, { useEffect } from "react";
import styles from "./header.module.scss";
import { Title } from "../../components/title";
import { Dropdown } from "../../components/dropdown";
import { useSelector } from "react-redux";
import { ordersSelector } from "../../store/orders/selectors";

export function Header() {
  const orders = useSelector(ordersSelector);

  const options = orders.map((order) => order.name);

  useEffect(() => console.log(orders), [orders]);

  return (
    <div className={styles.headerContainer}>
      <Title text="Ordered panini" />
      <Dropdown
        options={options}
        value="select order"
        index={1}
        valueSetter={() => {}}
      />
    </div>
  );
}
