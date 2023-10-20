import React from "react";
import styles from "./creator.module.scss";
import { Header } from "./header";

export function Creator() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
