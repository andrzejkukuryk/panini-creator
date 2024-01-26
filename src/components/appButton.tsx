import React from "react";
import styles from "./appButton.module.scss";
import classNames from "classnames";

interface AppButtonProps {
  handledFunction: () => void;
  text: string;
  black?: boolean;
}

export function AppButton({ handledFunction, text, black }: AppButtonProps) {
  const buttonClass = classNames({
    [styles.appButton]: !!!black,
    [styles.blackButton]: black,
  });

  return (
    <button onClick={handledFunction} className={buttonClass}>
      {text}
    </button>
  );
}
