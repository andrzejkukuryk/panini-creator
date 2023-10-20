import React from "react";
import styles from "./bread.module.scss";
import { Label } from "../../../components/label";
import { Carousel } from "../../../components/carousel";

export function Bread() {
  return (
    <div className={styles.breadContainer}>
      <Label text="bread" />
      <Carousel />
    </div>
  );
}
