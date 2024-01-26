import React from "react";
import styles from "./name.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { nameSelector } from "../../../store/name/selectors";
import { updateName } from "../../../store/name/nameSlice";

export function Name() {
  const dispatch = useDispatch();

  const paniniName = useSelector(nameSelector);

  const handleChange = (name: string) => {
    dispatch(updateName(name));
  };

  return (
    <div className={styles.nameContainer}>
      <Label text="Panini name" />
      <input type="text" className={styles.inputCell}></input>
    </div>
  );
}
