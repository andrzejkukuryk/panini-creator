import React, { useEffect } from "react";
import styles from "./dropdowndOrders.module.scss";
import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  currentOrderIndexSelector,
  ordersSelector,
} from "../../store/orders/selectors";
import {
  updateCurrentOrderId,
  updateCurrentOrderIndex,
} from "../../store/orders/ordersSlice";

export interface DropdownInfo {
  value: number;
  label: string;
}

export function DropdownOrders({}) {
  const dispatch = useDispatch();
  const orders = useSelector(ordersSelector);
  const currentOrderIndex = useSelector(currentOrderIndexSelector);

  const dropdownOptions: DropdownInfo[] = orders.map((order) => {
    return { value: order.id, label: order.name };
  });

  const handleChange = (selectedOption: SingleValue<DropdownInfo>) => {
    if (selectedOption !== null) {
      const currentOrder = orders.find(
        (order) => order.id === selectedOption.value
      );
      const indexOfCurrentOrder = currentOrder
        ? orders.indexOf(currentOrder)
        : 0;
      dispatch(updateCurrentOrderIndex(indexOfCurrentOrder));

      dispatch(updateCurrentOrderId(selectedOption.value));
    }
  };

  

  const dropdownStyle: StylesConfig<
    DropdownInfo,
    false,
    GroupBase<DropdownInfo>
  > = {
    control: (styles) => ({
      ...styles,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#000000",
      borderRadius: 0,
      flexShrink: 0,
    }),
  };

  return (
    <div className={styles.dropdownContainer}>
      <div style={{ width: "100%", height: "100%" }}>
        <Select
          options={dropdownOptions}
          onChange={handleChange}
          value={dropdownOptions[currentOrderIndex]}
          styles={dropdownStyle}
        />
      </div>
    </div>
  );
}
