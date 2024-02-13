import React from "react";
import styles from "./splash.module.scss";
import { CircleBig, PositionCircleBigInfo } from "../../components/circleBig";
import {
  CircleSmall,
  PositionCircleSmallInfo,
} from "../../components/circleSmall";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { startAnimationSelector } from "../../store/appControl/selectors";

const circleBigPositions: PositionCircleBigInfo[] = ["L", "ML", "C", "MR", "R"];

const circleSmallPositions: PositionCircleSmallInfo[] = ["T", "B"];

export function Splash() {
  const startAnimation = useSelector(startAnimationSelector);

  const containerClass = classNames([styles.container], {
    [styles.fade]: startAnimation,
  });

  return (
    <div className={containerClass}>
      {circleBigPositions.map((position) => (
        <CircleBig
          title="Panini Creator"
          animated
          position={position}
          key={`pos_${position}`}
        />
      ))}
      {circleSmallPositions.map((position) => (
        <CircleSmall position={position} animated key={`pos_${position}`} />
      ))}
    </div>
  );
}
