import React from "react";
import styles from "./serving.module.scss";
import { Label } from "../../../components/label";
import { useDispatch, useSelector } from "react-redux";
import {
  servingVariantsSelector,
  servingSelector,
} from "../../../store/serving/selectors";
import { updateServing } from "../../../store/serving/servingSlice";
import { Radio } from "../../../components/radio";

export function Serving() {
  const dispatch = useDispatch();
  const servingVariants = useSelector(servingVariantsSelector);
  const serving = useSelector(servingSelector);

  const handleClick = (serv: string) => {
    dispatch(updateServing(serv));
  };

  return (
    <div className={styles.servingContainer}>
      <Label text="serving" />
      <div className={styles.radioContainer}>
        {servingVariants.map((serv) => (
          <Radio
            label={serv}
            name="servRadio"
            handleClick={() => handleClick(serv)}
            value={serv}
            checked={serv === serving}
            key={`radio${serv}`}
          />
        ))}
      </div>
    </div>
  );
}
