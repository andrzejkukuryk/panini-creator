import React from "react";
import styles from "./rectangle.module.scss";
import { Text } from "./text";
import { BeginButton } from "./beginButton";

export function Reclangle() {
  return (
    <div className={styles.container}>
      <Text message="Panini Creator" />
      <BeginButton />
    </div>
  );
}
