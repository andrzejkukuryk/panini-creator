import React from "react";
import styles from "./appButton.module.scss";

interface AppButtonProps {
  handledFunction: () => void;
  text: string;
}

export function AppButton({ handledFunction, text }: AppButtonProps) {
  return (
    <button onClick={handledFunction} className={styles.appButton}>
      {text}
    </button>
  );
}
