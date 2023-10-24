import React, { useEffect, useState } from "react";
import styles from "./cheese.module.scss";
import { Label } from "../../../components/label";
import { Dropdown, DropdownInfo } from "../../../components/dropdown";
import { cheeseVariants } from "../../../data/cheese";
import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";

export function Cheese() {
  const [addCheese, setAddCheese] = useState(true);
  const [cheeses, setCheeses] = useState<number[]>([0]);
  const cheeseInfo: DropdownInfo[] = cheeseVariants.map((variant, index) => ({
    value: index,
    label: variant,
  }));

  const handleSwitch = () => {
    setAddCheese(!addCheese);
  };

  const addNextCheese = () => {
    const temporaryCheeses = [...cheeses];
    temporaryCheeses.push(0);
    setCheeses(temporaryCheeses);
  };

  const subCheese = (num: number) => {
    console.log(num);
    const temporaryCheeses = [...cheeses];
    console.log("temporary before: ", temporaryCheeses);
    temporaryCheeses.splice(num, 1);
    console.log("temporary after: ", temporaryCheeses);
    setCheeses(temporaryCheeses);
  };

  const handleButton = (i: number) => {
    if (i !== 0) {
      return subCheese(i);
    } else {
      return addNextCheese();
    }
  };

  const choosenCheese = (index: number, value: number) => {
    let temporaryCheeses = [...cheeses];
    temporaryCheeses[index] = value;
    setCheeses(temporaryCheeses);
  };

  useEffect(() => console.log("cheeses: ", cheeses), [cheeses]);

  return (
    <div className={styles.cheeseContainer}>
      <Label text="cheese" />
      <Switch checked={addCheese} ftn={handleSwitch} />
      <div className={styles.options}>
        {cheeses.map((cheese, index) => (
          <div className={styles.firstCheese}>
            <AddSubButton ftn={() => handleButton(index)} sub={index !== 0} />
            <Dropdown
              options={cheeseInfo}
              value={cheese}
              index={index}
              valueSetter={choosenCheese}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
