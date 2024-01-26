import React from "react";
import styles from "./creator.module.scss";
import { Header } from "./header";
import { Base } from "./base/base";
import { Final } from "./final/final";

export function Creator() {
  return (
    <div className={styles.creatorContainer}>
      <Header />
      <Base />
      <Final />
    </div>
  );
}
