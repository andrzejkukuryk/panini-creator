import React from "react";
import styles from "./radio.module.scss";

interface RadioProps {
  name: string;
  label: string;
  value: string;
  checked?: boolean;
  handleClick: () => void;
}

export function Radio({
  name,
  label,
  value,
  checked,
  handleClick,
}: RadioProps) {
  const id = `radio${label}${value}`;

  return (
    <label htmlFor={id} className={styles.label}>
      <input
        className={styles.input}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={handleClick}
      ></input>
      <div className={styles.checkmark}></div>
      {label}
    </label>
  );
}
