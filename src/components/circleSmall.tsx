import React from "react";
import styles from "./circleSmall.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { startAnimationSelector } from "../store/appControl/selectors";

export type PositionCircleSmallInfo = "T" | "B";

interface CircleSmallProps {
  position: PositionCircleSmallInfo;
  title: string;
}

export function CircleSmall({ position, title }: CircleSmallProps) {
  const startAnimation = useSelector(startAnimationSelector);

  const runAnimation = startAnimation && title === "Panini Creator";

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
