import React from "react";
import styles from "./napkins.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../../../components/checkbox";
import { addToOrderSelector } from "../../../store/addToOrder/selectors";
import { addAdditionally } from "../../../store/addToOrder/addToOrderSlice";

export const TYPE_NAPKINS = "NAPKINS";

export function Napkins() {
  const dispatch = useDispatch();
  const addToOrder = useSelector(addToOrderSelector);

  const handleClick = () => {
    dispatch(addAdditionally(TYPE_NAPKINS));
  };

  return (
    <div className={styles.napkinsContainer}>
      <Label text="napkins" />
      <div className={styles.checkboxContainer}>
        <Checkbox
          label="add to order"
          checked={addToOrder.includes(TYPE_NAPKINS)}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
