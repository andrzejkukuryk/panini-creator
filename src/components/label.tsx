import React from "react";
import styles from "./label.module.scss";

interface LabelProps {
  text: string;
}

export function Label({ text }: LabelProps) {
  return <h3 className={styles.label}>{text}</h3>;
}
