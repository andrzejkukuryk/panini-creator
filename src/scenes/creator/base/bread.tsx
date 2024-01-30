import React from "react";
import styles from "./bread.module.scss";
import wheat from "../../../assets/IconWheat.png";
import grain from "../../../assets/IconGrain.png";
import { Label } from "../../../components/label";
import { Carousel } from "../../../components/carousel";
import { useSelector, useDispatch } from "react-redux";
import {
  breadSelector,
  breadVariantsSelector,
} from "../../../store/bread/selectors";
import { updateBread } from "../../../store/bread/breadSlice";

const icons = [wheat, grain];

export function Bread() {
  const dispatch = useDispatch();
  const breadVariants = useSelector(breadVariantsSelector);
  const bread = useSelector(breadSelector);

  const handleChange = (_index: number, value: string) => {
    dispatch(updateBread(value));
  };

  return (
    <div className={styles.breadContainer}>
      <Label text="bread" />
      <Carousel
        options={breadVariants}
        icons={icons}
        index={0}
        value={bread}
        valueSetter={handleChange}
      />
    </div>
  );
}
