import React from "react";
import styles from "./addSubButton.module.scss";
import classNames from "classnames";

interface AddSubButtonProps {
  ftn: () => void;
  sub?: boolean;
}

export function AddSubButton({ ftn, sub }: AddSubButtonProps) {
  const centeredClass = classNames({
    [styles.centered]: sub,
  });

  return (
    <button onClick={ftn} className={styles.addSubButton}>
      <div className={centeredClass}>{sub ? "-" : "+"}</div>
    </button>
  );
}
