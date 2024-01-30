import React from "react";
import styles from "./circleBig.module.scss";
import classNames from "classnames";
import { Reclangle } from "./rectangle";

export type PositionCircleBigInfo = "L" | "ML" | "C" | "MR" | "R";

interface CircleBigProps {
  position: PositionCircleBigInfo;
  title: string;
  buttonText: string;
  buttonFunction: () => void;
  startAnimation?: boolean;
}

export function CircleBig({
  position,
  title,
  buttonText,
  buttonFunction,
  startAnimation,
}: CircleBigProps) {
  const containerClass = classNames([styles.container], {
    [styles.left]: position === "L",
    [styles.middleLeft]: position === "ML",
    [styles.center]: position === "C",
    [styles.middleRight]: position === "MR",
    [styles.right]: position === "R",
    [styles.moveLeft]: position === "L" && startAnimation,
    [styles.moveMiddleLeft]: position === "ML" && startAnimation,
    [styles.moveCenter]: position === "C" && startAnimation,
    [styles.moveMiddleRight]: position === "MR" && startAnimation,
    [styles.moveRight]: position === "R" && startAnimation,
  });

  return (
    <div className={containerClass}>
      <div className={styles.circle}>
        {position === "C" && (
          <Reclangle
            title={title}
            buttonText={buttonText}
            buttonFunction={buttonFunction}
            startAnimation={startAnimation}
          />
        )}
      </div>
    </div>
  );
}
