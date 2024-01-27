import React from "react";
import styles from "./spreads.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import {
  spreadVariantsSelector,
  spreadSelector,
} from "../../../store/spreads/selectors";
import { addSpread } from "../../../store/spreads/spreadsSlice";
import { Checkbox } from "../../../components/checkbox";

export function Spreads() {
  const dispatch = useDispatch();
  const spreadVariants = useSelector(spreadVariantsSelector);
  const spreads = useSelector(spreadSelector);

  const handleClick = (spr: string) => {
    dispatch(addSpread(spr));
  };

  return (
    <div className={styles.spreadContainer}>
      <Label text="spreads" />
      <div className={styles.checkboxContainer}>
        {spreadVariants.map((spread) => (
          <Checkbox
            label={spread}
            checked={spreads.includes(spread)}
            handleClick={() => handleClick(spread)}
            key={`checkbox${spread}`}
          />
        ))}
      </div>
    </div>
  );
}
