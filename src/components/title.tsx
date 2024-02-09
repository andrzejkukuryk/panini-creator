import React from "react";
import styles from "./title.module.scss";

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return <h2 className={styles.title}>{text}</h2>;
}
