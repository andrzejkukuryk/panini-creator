import React, { useState } from "react";
import styles from "./success.module.scss";
import { CircleBig, PositionCircleBigInfo } from "../../components/circleBig";
import {
  CircleSmall,
  PositionCircleSmallInfo,
} from "../../components/circleSmall";

export function Success() {
  const circleBigPositions: PositionCircleBigInfo[] = [
    "L",
    "ML",
    "C",
    "MR",
    "R",
  ];

  const circleSmallPositions: PositionCircleSmallInfo[] = ["T", "B"];

  const handleClickStartAgain = () => {
    //TODO: return to begining
  };

  return (
    <div className={styles.container}>
      {circleBigPositions.map((position) => (
        <CircleBig
          position={position}
          title="Panini ordered"
          buttonText="start again"
          buttonFunction={handleClickStartAgain}
          key={`pos_${position}`}
        />
      ))}
      {circleSmallPositions.map((position) => (
        <CircleSmall position={position} key={`pos_${position}`} />
      ))}
    </div>
  );
}
