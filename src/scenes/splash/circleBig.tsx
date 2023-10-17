import React from "react";
import styles from "./circleBig.module.scss";
import classNames from "classnames";

export type PositionCircleBigInfo = "L" | "ML" | "C" | "MR" | "R";

interface CircleBigProps {
  position: PositionCircleBigInfo;
}

export function CircleBig({ position }: CircleBigProps) {
  const containerClass = classNames([styles.container], {
    [styles.left]: position === "L",
    [styles.middleLeft]: position === "ML",
    [styles.center]: position === "C",
    [styles.middleRight]: position === "MR",
    [styles.right]: position === "R",
  });

  return (
    <div className={containerClass}>
      <div className={styles.circle}></div>
    </div>
  );
}
