import React from "react";
import styles from "./switch.module.scss";

interface SwitchProps {
  checked: boolean;
  ftn: () => void;
}

export function Switch({ checked, ftn }: SwitchProps) {
  return (
    <label className={styles.toggle}>
      <input
        className={styles.toggleCheckbox}
        type="checkbox"
        checked={checked}
        onChange={ftn}
      ></input>
      <div className={styles.toggleSwitch}></div>
    </label>
  );
}
