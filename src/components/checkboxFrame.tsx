import React from "react";
import styles from "./checkboxFrame.module.scss";
import classNames from "classnames";

interface CheckboxFrameProps {
  label: string;
  checked: boolean;
  handleClick: () => void;
}

export function CheckboxFrame({
  label,
  checked,
  handleClick,
}: CheckboxFrameProps) {
  const labelClass = classNames([styles.label], { [styles.checked]: checked });

  return (
    <label className={labelClass}>
      <input
        className={styles.input}
        type="checkbox"
        checked={checked}
        onClick={handleClick}
      ></input>
      {label}
    </label>
  );
}
