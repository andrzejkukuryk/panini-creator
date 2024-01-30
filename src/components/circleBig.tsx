import React from "react";
import styles from "./circleBig.module.scss";
import classNames from "classnames";
import { Reclangle } from "./rectangle";
import { useSelector } from "react-redux";
import { startAnimationSelector } from "../store/appControl/selectors";

export type PositionCircleBigInfo = "L" | "ML" | "C" | "MR" | "R";

interface CircleBigProps {
  position: PositionCircleBigInfo;
  title: string;
  buttonText: string;
  buttonFunction: () => void;
}

export function CircleBig({
  position,
  title,
  buttonText,
  buttonFunction,
}: CircleBigProps) {
  const startAnimation = useSelector(startAnimationSelector);

  const runAnimation = startAnimation && title === "Panini Creator";

  const containerClass = classNames([styles.container], {
    [styles.left]: position === "L",
    [styles.middleLeft]: position === "ML",
    [styles.center]: position === "C",
    [styles.middleRight]: position === "MR",
    [styles.right]: position === "R",
    [styles.moveLeft]: position === "L" && runAnimation,
    [styles.moveMiddleLeft]: position === "ML" && runAnimation,
    [styles.moveCenter]: position === "C" && runAnimation,
    [styles.moveMiddleRight]: position === "MR" && runAnimation,
    [styles.moveRight]: position === "R" && runAnimation,
  });

  return (
    <div className={containerClass}>
      <div className={styles.circle}>
        {position === "C" && (
          <Reclangle
            title={title}
            buttonText={buttonText}
            buttonFunction={buttonFunction}
          />
        )}
      </div>
    </div>
  );
}
