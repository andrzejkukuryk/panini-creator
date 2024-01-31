import React, { useEffect, useState } from "react";
import styles from "./listItem.module.scss";
import { Label } from "../../components/label";
import classNames from "classnames";
import { Line } from "../../components/line";

interface ListItemProps {
  label: string;
  ingredients: string[];
}

interface Counter {
  [key: string]: number;
}

export function ListItem({ label, ingredients }: ListItemProps) {
  const [countedIngredients, setCountedIngredients] = useState<Counter>({});
  const [ingredientList, setIngredientList] = useState("");

  const countIngredients = () => {
    let counter: Counter = {};
    ingredients.forEach((ingredient) => {
      if (counter[ingredient]) {
        counter[ingredient]++;
      } else {
        counter[ingredient] = 1;
      }
    });
    console.log(counter);
    setCountedIngredients(counter);
  };

  useEffect(() => {
    countIngredients();
  }, [ingredients]);

  const createList = () => {
    let list = "";
    Object.entries(countedIngredients).map((ingr) => {
      if (ingr[1] > 1) {
        list = list.concat(`${ingr[1]}x ${ingr[0]}, `);
      } else {
        list = list.concat(`${ingr[0]}, `);
      }
    });

    setIngredientList(list);
  };

  useEffect(() => createList(), [countedIngredients]);

  const containerClass = classNames([styles.itemContainer], {
    [styles.hide]: ingredients.length === 0,
  });

  return (
    <>
      <div className={containerClass}>
        <Label text={label} />
        <p className={styles.ingredientList}>{ingredientList}</p>
      </div>
      <Line />
    </>
  );
}
