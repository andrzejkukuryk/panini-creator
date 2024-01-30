import React from "react";
import styles from "./rectangle.module.scss";
import classNames from "classnames";
import { Text } from "./text";
import { AppButton } from "./appButton";
import { useSelector } from "react-redux";
import { startAnimationSelector } from "../store/appControl/selectors";

interface RectangleProps {
  title: string;
  buttonText: string;
  buttonFunction: () => void;
}

export function Reclangle({
  title,
  buttonText,
  buttonFunction,
}: RectangleProps) {
  const startAnimation = useSelector(startAnimationSelector);

  const runAnimation = startAnimation && title === "Panini Creator";

  const containerClass = classNames([styles.container], {
    [styles.startAnimation]: runAnimation,
  });

  return (
    <div className={containerClass}>
      <Text message={title} />
      <AppButton handledFunction={buttonFunction} text={buttonText} />
    </div>
  );
}
