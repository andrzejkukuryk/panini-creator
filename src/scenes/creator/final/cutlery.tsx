import React from "react";
import styles from "./cutlery.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../../../components/checkbox";
import { addToOrderSelector } from "../../../store/addToOrder/selectors";
import { addAdditionally } from "../../../store/addToOrder/addToOrderSlice";

export function Cutlery() {
  const dispatch = useDispatch();
  const cutlery = "CUTLERY";
  const addToOrder = useSelector(addToOrderSelector);

  const handleClick = () => {
    dispatch(addAdditionally(cutlery));
  };

  return (
    <div className={styles.cutleryContainer}>
      <Label text="cutlery" />
      <div className={styles.checkboxContainer}>
        <Checkbox
          label="add to order"
          checked={addToOrder.includes(cutlery)}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
