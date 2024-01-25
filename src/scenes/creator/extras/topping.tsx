import React from "react";
import styles from "./topping.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import {
  toppingVariantsSelector,
  toppingSelector,
} from "../../../store/topping/selectors";
import { addTopping } from "../../../store/topping/toppingSlice";
import { Checkbox } from "../../../components/checkbox";

export function Topping() {
  const dispatch = useDispatch();
  const toppingVariants = useSelector(toppingVariantsSelector);
  const toppings = useSelector(toppingSelector);

  const handleClick = (top: string) => {
    dispatch(addTopping(top));
  };

  return (
    <div className={styles.toppingContainer}>
      <Label text="topping" />
      <div className={styles.checkboxContainer}>
        {toppingVariants.map((topping) => (
          <Checkbox
            label={topping}
            checked={toppings.includes(topping)}
            handleClick={() => handleClick(topping)}
            key={`checkbox${topping}`}
          />
        ))}
      </div>
    </div>
  );
}
