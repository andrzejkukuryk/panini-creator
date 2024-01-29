import React from "react";
import styles from "./rectangle.module.scss";
import classNames from "classnames";
import { Text } from "./text";
import { AppButton } from "./appButton";

interface RectangleProps {
  startAnimation?: boolean;
  setStartAnimation?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Reclangle({
  startAnimation,
  setStartAnimation,
}: RectangleProps) {
  const handleClickBegin = () => {
    if (setStartAnimation !== undefined) {
      setStartAnimation(true);
    }
  };

  const containerClass = classNames([styles.container], {
    [styles.startAnimation]: startAnimation,
  });

  return (
    <div className={containerClass}>
      <Text message="Panini Creator" />
      <AppButton handledFunction={handleClickBegin} text="begin" />
    </div>
  );
}
