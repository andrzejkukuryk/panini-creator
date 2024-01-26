import React from "react";
import styles from "./cutlery.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { cutlerySelector } from "../../../store/cutlery/selectors";
import { updateAddCutlery } from "../../../store/cutlery/cutlerySlice";
import { Checkbox } from "../../../components/checkbox";

export function Cutlery() {
  const dispatch = useDispatch();
  const cutlery = useSelector(cutlerySelector);

  const handleClick = () => {
    dispatch(updateAddCutlery());
  };

  return (
    <div className={styles.cutleryContainer}>
      <Label text="cutlery" />
      <div className={styles.checkboxContainer}>
        <Checkbox
          label="add to order"
          checked={cutlery}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
