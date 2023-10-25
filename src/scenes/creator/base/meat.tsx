import React, { useEffect, useState } from "react";
import styles from "./meat.module.scss";
import { Label } from "../../../components/label";
import { Dropdown, DropdownInfo } from "../../../components/dropdown";
import { meatVariants } from "../../../data/meat";
import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";

export function Meat() {
  const [addMeat, setAddMeat] = useState(true);
  const [meats, setMeats] = useState<number[]>([0]);
  const [selectedMeats, setSelectedMeats] = useState<string[]>([]);
  const meatInfo: DropdownInfo[] = meatVariants.map((variant, index) => ({
    value: index,
    label: variant,
  }));

  const handleSwitch = () => {
    setAddMeat(!addMeat);
  };

  const addNextMeat = () => {
    const temporaryMeats = [...meats];
    temporaryMeats.push(0);
    setMeats(temporaryMeats);
  };

  const subMeat = (num: number) => {
    const temporaryMeats = [...meats];
    temporaryMeats.splice(num, 1);
    setMeats(temporaryMeats);
  };

  const handleButton = (i: number) => {
    if (i !== 0) {
      return subMeat(i);
    } else {
      return addNextMeat();
    }
  };

  const choosenMeat = (index: number, value: number) => {
    let temporaryMeats = [...meats];
    temporaryMeats[index] = value;
    setMeats(temporaryMeats);
  };

  const createSelectedMeats = () => {
    if (addMeat) {
      const temporarySelectedMeats = meats.map((item) => meatVariants[item]);
      setSelectedMeats(temporarySelectedMeats);
    } else {
      setSelectedMeats([]);
    }
  };

  useEffect(() => createSelectedMeats(), [meats, addMeat]);

  return (
    <div className={styles.meatContainer}>
      <div className={styles.labelAndSwitch}>
        <Label text="meat" />
        <Switch checked={addMeat} ftn={handleSwitch} />
      </div>
      {addMeat && (
        <div className={styles.dropdowns}>
          {meats.map((meat, index) => (
            <div className={styles.buttonAndDropdown} key={`keyMeat${meat}`}>
              <AddSubButton ftn={() => handleButton(index)} sub={index !== 0} />
              <Dropdown
                options={meatInfo}
                value={meat}
                index={index}
                valueSetter={choosenMeat}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
