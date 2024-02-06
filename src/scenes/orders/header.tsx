import React, { useEffect } from "react";
import styles from "./header.module.scss";
import { Title } from "../../components/title";
import { Dropdown } from "../../components/dropdown";
import { useDispatch, useSelector } from "react-redux";
import {
  orderIndexSelector,
  ordersSelector,
} from "../../store/orders/selectors";
import { updateCurrentOrderIndex } from "../../store/orders/ordersSlice";

export function Header() {
  const dispatch = useDispatch();
  const orders = useSelector(ordersSelector);

  const options = orders.map((order) => order.name);
  //TODO: zmien na > 1 jak skonfigurujesz dropdown
  const showDropdown = orders.length > 0;
  const orderIndex = useSelector(orderIndexSelector);

  const chooseOrder = (_index: number, value: string) => {
    const indexOfSelectedOption = options.indexOf(value);
    dispatch(updateCurrentOrderIndex(indexOfSelectedOption));
  };

  useEffect(() => console.log(options), [orders]);

  return (
    <div className={styles.headerContainer}>
      <Title text="Ordered panini" />
      {showDropdown && (
        <Dropdown
          options={options}
          value={orders[orderIndex].name}
          index={0}
          valueSetter={chooseOrder}
        />
      )}
    </div>
  );
}
