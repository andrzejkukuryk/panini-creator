import React from "react";
import styles from "./rectangle.module.scss";
import { Text } from "./text";
import { AppButton } from "./appButton";

export function Reclangle() {
  return (
    <div className={styles.container}>
      <Text message="Panini Creator" />
      <AppButton text="begin" />
    </div>
  );
}
