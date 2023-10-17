import React from "react";
import styles from "./appButton.module.scss";

interface AppButtonProps {
  text: string;
}

export function AppButton({ text }: AppButtonProps) {
  return <button className={styles.begin}>{text}</button>;
}
