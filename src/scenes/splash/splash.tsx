import React from "react";
import styles from "./splash.module.scss";
import { Title } from "./title";
import { CircleBig, PositionInfo } from "./circleBig";

export function Splash() {
  const circleBigPositions: PositionInfo[] = ["L", "ML", "C", "MR", "R"];

  return (
    <div className={styles.container}>
      {/* <Title /> */}

      {circleBigPositions.map((position) => (
        <CircleBig position={position} />
      ))}
    </div>
  );
}
