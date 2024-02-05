import React from "react";
import styles from "./success.module.scss";
import { CircleBig, PositionCircleBigInfo } from "../../components/circleBig";
import {
  CircleSmall,
  PositionCircleSmallInfo,
} from "../../components/circleSmall";
import { useDispatch } from "react-redux";
import {
  updateCurrentScene,
  updateStartAnimation,
} from "../../store/appControl/appControlSlice";

const circleBigPositions: PositionCircleBigInfo[] = ["L", "ML", "C", "MR", "R"];

const circleSmallPositions: PositionCircleSmallInfo[] = ["T", "B"];

export function Success() {
  const dispatch = useDispatch();

  const handleClickStartAgain = () => {
    dispatch(updateStartAnimation(false));
    dispatch(updateCurrentScene("SPLASH"));
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
