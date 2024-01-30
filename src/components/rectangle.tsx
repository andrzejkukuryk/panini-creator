import React from "react";
import styles from "./rectangle.module.scss";
import classNames from "classnames";
import { Text } from "./text";
import { AppButton } from "./appButton";

interface RectangleProps {
  title: string;
  buttonText: string;
  buttonFunction: () => void;
  startAnimation?: boolean;
}

export function Reclangle({
  title,
  buttonText,
  buttonFunction,
  startAnimation,
}: RectangleProps) {
  const containerClass = classNames([styles.container], {
    [styles.startAnimation]: startAnimation,
  });

  return (
    <div className={containerClass}>
      <Text message={title} />
      <AppButton handledFunction={buttonFunction} text={buttonText} />
    </div>
  );
}
