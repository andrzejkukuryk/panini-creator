import React, { useEffect } from "react";
import styles from "./dropdowndOrders.module.scss";
import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  currentOrderIdSelector,
  ordersSelector,
} from "../../store/orders/selectors";
import { updateCurrentOrderId } from "../../store/orders/ordersSlice";

export interface DropdownInfo {
  value: number;
  label: string;
}

export function DropdownOrders({}) {
  const dispatch = useDispatch();
  const orders = useSelector(ordersSelector);

  const dropdownOptions: DropdownInfo[] = orders.map((order) => {
    return { value: order.id, label: order.name };
  });

  const handleChange = (selectedOption: SingleValue<DropdownInfo>) => {
    if (selectedOption !== null) {
      dispatch(updateCurrentOrderId(selectedOption.value));
    }
  };

  const currentOrderId = useSelector(currentOrderIdSelector);
  const currentOption = dropdownOptions.find(
    (option) => option.value === currentOrderId
  );

  useEffect(() => console.log(currentOption), [currentOption]);

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
          value={currentOption}
          styles={dropdownStyle}
        />
      </div>
    </div>
  );
}
