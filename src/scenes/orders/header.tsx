import React from "react";
import styles from "./header.module.scss";
import { Title } from "../../components/title";
import { useSelector } from "react-redux";
import { ordersSelector } from "../../store/orders/selectors";
import { DropdownOrders } from "./dropdownOrders";

export function Header() {
  const orders = useSelector(ordersSelector);

  const showDropdown = orders.length > 1;

  return (
    <div className={styles.headerContainer}>
      <Title text="Ordered panini" />
      {showDropdown && <DropdownOrders />}
    </div>
  );
}
