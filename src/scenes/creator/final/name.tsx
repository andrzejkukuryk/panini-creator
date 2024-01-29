import React from "react";
import styles from "./name.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { nameSelector } from "../../../store/name/selectors";
import { updateName } from "../../../store/name/nameSlice";

export function Name() {
  const dispatch = useDispatch();

  const paniniName = useSelector(nameSelector);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(event.target.value));
  };

  return (
    <div className={styles.nameContainer}>
      <Label text="Panini name" />
      <input
        type="text"
        className={styles.inputCell}
        onChange={handleChange}
        value={paniniName}
        placeholder="eg. Club Panini"
      ></input>
    </div>
  );
}
