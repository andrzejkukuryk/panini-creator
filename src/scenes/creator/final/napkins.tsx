import React from "react";
import styles from "./napkins.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { napkinsSelector } from "../../../store/napkins/selectors";
import { updateAddNapkins } from "../../../store/napkins/napkinsSlice";
import { Checkbox } from "../../../components/checkbox";

export function Napkins() {
  const dispatch = useDispatch();
  const napkins = useSelector(napkinsSelector);

  const handleClick = () => {
    dispatch(updateAddNapkins());
  };

  return (
    <div className={styles.napkinsContainer}>
      <Label text="napkins" />
      <div className={styles.checkboxContainer}>
        <Checkbox
          label="add to order"
          checked={napkins}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}
