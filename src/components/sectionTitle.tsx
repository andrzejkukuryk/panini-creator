import React from "react";
import styles from "./sectionTitle.module.scss";

interface SectionTitleProps {
  text: string;
}

export function SectionTitle({ text }: SectionTitleProps) {
  return <h2 className={styles.title}>{text}</h2>;
}
