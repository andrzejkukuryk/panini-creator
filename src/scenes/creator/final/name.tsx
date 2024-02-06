import React, { useEffect } from "react";
import styles from "./name.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { nameSelector } from "../../../store/name/selectors";
import { updateName } from "../../../store/name/nameSlice";
import {
  addCheeseSelector,
  cheesesSelector,
} from "../../../store/cheese/selectors";
import { addMeatSelector, meatsSelector } from "../../../store/meat/selectors";
import {
  addDressingSelector,
  dressingsSelector,
} from "../../../store/dressing/selectors";
import { vegetablesSelector } from "../../../store/vegetables/selectors";
import { addEggSelector, eggsSelector } from "../../../store/egg/selectors";
import { spreadSelector } from "../../../store/spreads/selectors";
import { toppingSelector } from "../../../store/topping/selectors";

export function Name() {
  const dispatch = useDispatch();

  const paniniName = useSelector(nameSelector);

  const addCheese = useSelector(addCheeseSelector);
  const currentCheese = useSelector(cheesesSelector);
  const cheese = addCheese ? currentCheese : [];

  const addMeat = useSelector(addMeatSelector);
  const currentMeat = useSelector(meatsSelector);
  const meat = addMeat ? currentMeat : [];

  const addDressing = useSelector(addDressingSelector);
  const currentDressing = useSelector(dressingsSelector);
  const dressing = addDressing ? currentDressing : [];

  const vegetables = useSelector(vegetablesSelector);

  const addEgg = useSelector(addEggSelector);
  const currentEgg = useSelector(eggsSelector);
  const egg = addEgg ? currentEgg : [];

  const spread = useSelector(spreadSelector);
  const topping = useSelector(toppingSelector);

  const allSelectors = [
    meat,
    cheese,
    egg,
    vegetables,
    dressing,
    spread,
    topping,
  ];

  const createName = () => {
    const mainIngredients: string[] = [];

    allSelectors.forEach((selector) => {
      if (mainIngredients.length <= 1) {
        if (selector.length > 0) {
          mainIngredients.push(selector[0]);
        }
      }
    });

    console.log(mainIngredients);

    const newName =
      mainIngredients.length === 2
        ? `${mainIngredients[0]} & ${mainIngredients[1]} SANDWICH`
        : mainIngredients.length === 1
        ? `${mainIngredients[0]} SANDWICH`
        : "DRY BREAD FOR THE HORSE";

    console.log(newName, newName.length);
    return newName;
  };

  // useEffect(
  //   () => createName(),
  //   [meat, cheese, vegetables, dressing, egg, spread, topping]
  // );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(event.target.value));
  };

  return (
    <div className={styles.nameContainer}>
      <Label text="Panini name" />
      <input
        type="text"
        className={styles.inputCell}
        onChange={handleChange}
        value={paniniName}
        placeholder={`E.G. ${createName()}`}
      ></input>
    </div>
  );
}
