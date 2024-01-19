import React from "react";
import styles from "./vegetables.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import {
  vegetableVariantsSelector,
  vegetablesSelector,
} from "../../../store/selectors";
import { addVegetable } from "../../../store/vegetablesSlice";
import { CheckboxFrame } from "../../../components/checkboxFrame";

export function Vegetables() {
  const dispatch = useDispatch();
  const vegetableVariants = useSelector(vegetableVariantsSelector);
  const vegetables = useSelector(vegetablesSelector);

  const handleClick = (veg: number) => {
    dispatch(addVegetable(veg));
  };

  return (
    <div className={styles.vegetablesContainer}>
      <Label text="vegetables" />
      <div className={styles.multiselectContainer}>
        {vegetableVariants.map((vegetable, index) => (
          <CheckboxFrame
            label={vegetable.toLowerCase()}
            checked={vegetables.includes(index)}
            handleClick={() => handleClick(index)}
            key={`checkbox${vegetable}`}
          />
        ))}
      </div>
    </div>
  );
}
