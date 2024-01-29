import React from "react";
import styles from "./creator.module.scss";
import { Header } from "./header";
import { Base } from "./base/base";
import { Extras } from "./extras/extras";
import { Final } from "./final/final";

export function Creator() {
  return (
    <div className={styles.creatorContainer}>
      <Header />
      <Base />
      <Extras />
      <Final />
    </div>
  );
}
