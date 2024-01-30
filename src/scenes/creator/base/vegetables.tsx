import React from "react";
import styles from "./vegetables.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import {
  vegetableVariantsSelector,
  vegetablesSelector,
} from "../../../store/vegetables/selectors";
import { addVegetable } from "../../../store/vegetables/vegetablesSlice";
import { CheckboxFrame } from "../../../components/checkboxFrame";

export function Vegetables() {
  const dispatch = useDispatch();
  const vegetableVariants = useSelector(vegetableVariantsSelector);
  const vegetables = useSelector(vegetablesSelector);

  const handleClick = (veg: string) => {
    dispatch(addVegetable(veg));
  };

  return (
    <div className={styles.vegetablesContainer}>
      <Label text="vegetables" />
      <div className={styles.multiselectContainer}>
        {vegetableVariants.map((vegetable) => (
          <CheckboxFrame
            label={vegetable.toLowerCase()}
            checked={vegetables.includes(vegetable)}
            handleClick={() => handleClick(vegetable)}
            key={`checkbox${vegetable}`}
          />
        ))}
      </div>
    </div>
  );
}
