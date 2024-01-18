import React from "react";
import styles from "./vegetables.module.scss";
import { Label } from "../../../components/label";

export function Vegetables() {
  return (
    <div className={styles.vegetablesContainer}>
      <Label text="vegetables" />
      <div className={styles.multiselectContainer}></div>
    </div>
  );
}
