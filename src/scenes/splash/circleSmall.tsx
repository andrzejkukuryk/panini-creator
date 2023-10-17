import React from "react";
import styles from "./circleSmall.module.scss";
import classNames from "classnames";

export type PositionCircleSmallInfo = "T" | "B";

interface CircleSmallProps {
  position: PositionCircleSmallInfo;
}

export function CircleSmall({ position }: CircleSmallProps) {
  const containerClass = classNames([styles.container], {
    [styles.top]: position === "T",
    [styles.bottom]: position === "B",
  });

  return (
    <div className={containerClass}>
      <div className={styles.circle}></div>
    </div>
  );
}
