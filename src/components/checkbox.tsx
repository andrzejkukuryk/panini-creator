import React from "react";
import styles from "./checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked: boolean;
  handleClick: () => void;
}

export function Checkbox({ label, checked, handleClick }: CheckboxProps) {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onClick={handleClick}
      ></input>
      <div className={styles.checkmark}></div>
    </label>
  );
}
