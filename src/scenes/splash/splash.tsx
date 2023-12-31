import React, { useState } from "react";
import styles from "./splash.module.scss";
import { CircleBig, PositionCircleBigInfo } from "./circleBig";
import { CircleSmall, PositionCircleSmallInfo } from "./circleSmall";
import classNames from "classnames";

export function Splash() {
  const [startAnimation, setStartAnimation] = useState(false);
  const circleBigPositions: PositionCircleBigInfo[] = [
    "L",
    "ML",
    "C",
    "MR",
    "R",
  ];

  const circleSmallPositions: PositionCircleSmallInfo[] = ["T", "B"];

  const containerClass = classNames([styles.container], {
    [styles.fade]: startAnimation,
  });

  return (
    <div className={containerClass}>
      {circleBigPositions.map((position) => (
        <CircleBig
          position={position}
          startAnimation={startAnimation}
          setStartAnimation={setStartAnimation}
          key={`pos_${position}`}
        />
      ))}
      {circleSmallPositions.map((position) => (
        <CircleSmall
          position={position}
          startAnimation={startAnimation}
          key={`pos_${position}`}
        />
      ))}
    </div>
  );
}
