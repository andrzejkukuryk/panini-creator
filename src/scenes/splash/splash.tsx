import React, { useState } from "react";
import styles from "./splash.module.scss";
import { CircleBig, PositionCircleBigInfo } from "../../components/circleBig";
import {
  CircleSmall,
  PositionCircleSmallInfo,
} from "../../components/circleSmall";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { startAnimationSelector } from "../../store/appControl/selectors";
import { updateStartAnimation } from "../../store/appControl/appControlSlice";

export function Splash() {
  const dispatch = useDispatch();
  const circleBigPositions: PositionCircleBigInfo[] = [
    "L",
    "ML",
    "C",
    "MR",
    "R",
  ];

  const circleSmallPositions: PositionCircleSmallInfo[] = ["T", "B"];

  const handleClickBegin = () => {
    dispatch(updateStartAnimation(true));
  };

  const startAnimation = useSelector(startAnimationSelector);

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
          key={`pos_${position}`}
        />
      ))}
      {circleSmallPositions.map((position) => (
        <CircleSmall
          position={position}
          title="Panini Creator"
          key={`pos_${position}`}
        />
      ))}
    </div>
  );
}
