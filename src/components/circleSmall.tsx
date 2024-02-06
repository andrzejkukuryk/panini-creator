import React from "react";
import styles from "./circleSmall.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { startAnimationSelector } from "../store/appControl/selectors";

export type PositionCircleSmallInfo = "T" | "B";

interface CircleSmallProps {
  position: PositionCircleSmallInfo;
  animated?: boolean;
}

export function CircleSmall({ position, animated }: CircleSmallProps) {
  const startAnimation = useSelector(startAnimationSelector);

  const runAnimation = startAnimation && animated;

  const containerClass = classNames([styles.container], {
    [styles.top]: position === "T",
    [styles.bottom]: position === "B",
    [styles.moveUp]: position === "T" && runAnimation,
    [styles.moveDown]: position === "B" && runAnimation,
  });

  return (
    <div className={containerClass}>
      <div className={styles.circle}></div>
    </div>
  );
}
