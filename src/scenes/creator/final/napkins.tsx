import React from "react";
import styles from "./napkins.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../../../components/checkbox";
import { addToOrderSelector } from "../../../store/addToOrder/selectors";
import { addAdditionally } from "../../../store/addToOrder/addToOrderSlice";

export function Napkins() {
  const dispatch = useDispatch();
  const napkins = "NAPKINS";
  const addToOrder = useSelector(addToOrderSelector);

  const handleClick = () => {
    dispatch(addAdditionally(napkins));
  };

  return (
    <div className={styles.napkinsContainer}>
      <Label text="napkins" />
      <div className={styles.checkboxContainer}>
        <Checkbox
          label="add to order"
          checked={addToOrder.includes(napkins)}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
