import React, { useState } from "react";
import styles from "./splash.module.scss";
import { CircleBig, PositionCircleBigInfo } from "../../components/circleBig";
import {
  CircleSmall,
  PositionCircleSmallInfo,
} from "../../components/circleSmall";
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

  const handleClickBegin = () => {
    setStartAnimation(true);
  };

  const containerClass = classNames([styles.container], {
    [styles.fade]: startAnimation,
  });

  return (
    <div className={containerClass}>
      {circleBigPositions.map((position) => (
        <CircleBig
          title="Panini Creator"
          buttonText="begin"
          buttonFunction={handleClickBegin}
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
