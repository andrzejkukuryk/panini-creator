import React, { CSSProperties, useEffect } from "react";
import styles from "./rectangle.module.scss";
import classNames from "classnames";
import { Text } from "./text";
import { AppButton } from "./appButton";
import { useSelector } from "react-redux";
import {
  startAnimationSelector,
  statusSelector,
} from "../store/appControl/selectors";
import { GoToOrdersButton } from "./goToOrdersButton";
import { NewOrderButton } from "./newOrderButton";
import { BeginButton } from "./beginButton";
import { BarLoader } from "react-spinners";

interface RectangleProps {
  title: string;
}

export function Reclangle({ title }: RectangleProps) {
  const startAnimation = useSelector(startAnimationSelector);

  const runAnimation = startAnimation && title === "Panini creator";

  const status = useSelector(statusSelector);
  const loading = status === "loading";

  const override: CSSProperties = {
    margin: "25px auto 25px",
  };

  const containerClass = classNames([styles.container], {
    [styles.startAnimation]: runAnimation,
  });

  return (
    <div className={containerClass}>
      <Text message={title} />
      <div className={styles.buttonsContainer}>
        <BarLoader
          loading={loading}
          speedMultiplier={2}
          cssOverride={override}
        />
        <GoToOrdersButton />
        <NewOrderButton />
        <BeginButton />
      </div>
    </div>
  );
}
