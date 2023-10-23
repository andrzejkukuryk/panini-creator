import React from "react";
import styles from "./cheese.module.scss";
import { Label } from "../../../components/label";
import { Dropdown, DropdownInfo } from "../../../components/dropdown";
import { cheeseVariants } from "../../../data/cheese";

export function Cheese() {
  const cheeseInfo: DropdownInfo[] = cheeseVariants.map((variant) => ({
    value: variant.toLowerCase(),
    label: variant,
  }));

  return (
    <div className={styles.cheeseContainer}>
      <Label text="cheese" />
      <Dropdown options={cheeseInfo} />
    </div>
  );
}
