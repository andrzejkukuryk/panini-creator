import React, { useEffect } from "react";
import styles from "./splash.module.scss";
import { CircleBig, PositionCircleBigInfo } from "../../components/circleBig";
import {
  CircleSmall,
  PositionCircleSmallInfo,
} from "../../components/circleSmall";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  startAnimationSelector,
  statusSelector,
} from "../../store/appControl/selectors";
import { AppDispatch } from "../../store/store";
import { fetchIngredients } from "../../store/ingredientsSlice";

const circleBigPositions: PositionCircleBigInfo[] = ["L", "ML", "C", "MR", "R"];

const circleSmallPositions: PositionCircleSmallInfo[] = ["T", "B"];

export function Splash() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(statusSelector);

  const fetchData = () => {
    dispatch(fetchIngredients());
  };

  useEffect(() => {
    if (status === "idle") {
      fetchData();
    }
  }, []);

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
