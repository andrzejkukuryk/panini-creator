import React, { useEffect } from "react";
import styles from "./name.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import { updateDefaultName, updateName } from "../../../store/name/nameSlice";
import { orderCheeseSelector } from "../../../store/cheese/selectors";
import { orderMeatSelector } from "../../../store/meat/selectors";
import { orderDressingSelector } from "../../../store/dressing/selectors";
import { vegetablesSelector } from "../../../store/vegetables/selectors";
import { orderEggsSelector } from "../../../store/egg/selectors";
import { spreadSelector } from "../../../store/spreads/selectors";
import { toppingSelector } from "../../../store/topping/selectors";

export function Name() {
  const dispatch = useDispatch();

  const cheese = useSelector(orderCheeseSelector);
  const meat = useSelector(orderMeatSelector);
  const dressing = useSelector(orderDressingSelector);
  const vegetables = useSelector(vegetablesSelector);
  const egg = useSelector(orderEggsSelector);
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

    const newName =
      mainIngredients.length === 2
        ? `${mainIngredients[0]} & ${mainIngredients[1]} SANDWICH`
        : mainIngredients.length === 1
        ? `${mainIngredients[0]} SANDWICH`
        : "DRY BREAD FOR THE HORSE";

    return newName;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(event.target.value.trim()));
  };

  useEffect(() => {
    dispatch(updateDefaultName(createName()));
  }, [meat, cheese, egg, vegetables, dressing, spread, topping]);

  return (
    <div className={styles.nameContainer}>
      <Label text="Panini name" />
      <input
        type="text"
        className={styles.inputCell}
        onChange={handleChange}
        placeholder={`E.G. ${createName()}`}
      ></input>
    </div>
  );
}
