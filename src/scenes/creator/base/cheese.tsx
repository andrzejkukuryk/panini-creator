import React, { useEffect, useState } from "react";
import styles from "./cheese.module.scss";
import { Label } from "../../../components/label";
import { Dropdown, DropdownInfo } from "../../../components/dropdown";
import { cheeseVariants } from "../../../data/cheese";
import { MultiIngredient } from "../../../components/multiIngredent";
import { Switch } from "../../../components/switch";

export function Cheese() {
  const [addCheese, setAddCheese] = useState(true);
  const cheeseInfo: DropdownInfo[] = cheeseVariants.map((variant) => ({
    value: variant.toLowerCase(),
    label: variant,
  }));

  const handleSwitch = () => {
    setAddCheese(!addCheese);
  };

  useEffect(() => console.log("addCheese: ", addCheese), [addCheese]);

  return (
    <div className={styles.cheeseContainer}>
      <Label text="cheese" />
      <Switch checked={addCheese} ftn={handleSwitch} />

      <div>
        <Dropdown options={cheeseInfo} />
      </div>
    </div>
  );
}
