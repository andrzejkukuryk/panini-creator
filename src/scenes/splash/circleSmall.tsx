import React from "react";
import styles from "./circleSmall.module.scss";
import classNames from "classnames";

export type PositionCircleSmallInfo = "T" | "B";

interface CircleSmallProps {
  position: PositionCircleSmallInfo;
  startAnimation: boolean;
}

export function CircleSmall({ position, startAnimation }: CircleSmallProps) {
  const containerClass = classNames([styles.container], {
    [styles.top]: position === "T",
    [styles.bottom]: position === "B",
    [styles.moveUp]: position === "T" && startAnimation,
    [styles.moveDown]: position === "B" && startAnimation,
  });

  return (
    <div className={containerClass}>
      <div className={styles.circle}></div>
    </div>
  );
}
