import React from "react";
import styles from "./header.module.scss";
import { Title } from "../../components/title";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <Title text="Ordered panini" />
    </div>
  );
}
