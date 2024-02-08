import React from "react";
import styles from "./cutlery.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "../../../components/checkbox";
import { addToOrderSelector } from "../../../store/addToOrder/selectors";
import { addAdditionally } from "../../../store/addToOrder/addToOrderSlice";

const TYPE_CUTLERY = "CUTLERY";

export function Cutlery() {
  const dispatch = useDispatch();

  const addToOrder = useSelector(addToOrderSelector);

  const handleClick = () => {
    dispatch(addAdditionally(TYPE_CUTLERY));
  };

  return (
    <div className={styles.cutleryContainer}>
      <Label text="cutlery" />
      <div className={styles.checkboxContainer}>
        <Checkbox
          label="add to order"
          checked={addToOrder.includes(TYPE_CUTLERY)}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
