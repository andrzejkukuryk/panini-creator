import React from "react";
import styles from "./circleBig.module.scss";
import classNames from "classnames";
import { Reclangle } from "./rectangle";

export type PositionCircleBigInfo = "L" | "ML" | "C" | "MR" | "R";

interface CircleBigProps {
  position: PositionCircleBigInfo;
  startAnimation: boolean;
  setStartAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CircleBig({
  position,
  startAnimation,
  setStartAnimation,
}: CircleBigProps) {
  const containerClass = classNames([styles.container], {
    [styles.left]: position === "L",
    [styles.middleLeft]: position === "ML",
    [styles.center]: position === "C",
    [styles.middleRight]: position === "MR",
    [styles.right]: position === "R",
  });

  return (
    <div className={containerClass}>
      <div className={styles.circle}>
        {position === "C" && (
          <Reclangle
            startAnimation={startAnimation}
            setStartAnimation={setStartAnimation}
          />
        )}
      </div>
    </div>
  );
}
