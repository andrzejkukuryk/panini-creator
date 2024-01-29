import React from "react";
import styles from "./text.module.scss";

interface TextProps {
  message: string;
}

export function Text({ message }: TextProps) {
  return <h1 className={styles.header}>{message}</h1>;
}
