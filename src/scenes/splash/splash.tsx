import React from "react";
import styles from "./splash.module.scss";
import { CircleBig, PositionCircleBigInfo } from "./circleBig";
import { CircleSmall, PositionCircleSmallInfo } from "./circleSmall";

export function Splash() {
  const circleBigPositions: PositionCircleBigInfo[] = [
    "L",
    "ML",
    "C",
    "MR",
    "R",
  ];

  const circleSmallPosition: PositionCircleSmallInfo[] = ["T", "B"];

  return (
    <div className={styles.container}>
      {circleBigPositions.map((position) => (
        <CircleBig position={position} key={`pos_${position}`} />
      ))}
      {circleSmallPosition.map((position) => (
        <CircleSmall position={position} key={`pos_${position}`} />
      ))}
    </div>
  );
}
