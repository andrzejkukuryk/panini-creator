import React from "react";
import styles from "./bread.module.scss";
import wheat from "../../../assets/IconWheat.png";
import grain from "../../../assets/IconGrain.png";
import { Label } from "../../../components/label";
import { Carousel } from "../../../components/carousel";
import {
  CarouselItem,
  CarouselItemInfo,
} from "../../../components/carouselItem";
import { useSelector, useDispatch } from "react-redux";
import { breadSelector, breadVariantsSelector } from "../../../store/selectors";
import { updateBread } from "../../../store/breadSlice";

const icons = [wheat, grain];

export function Bread() {
  const dispatch = useDispatch();
  const breadVariants = useSelector(breadVariantsSelector);
  const bread = useSelector(breadSelector);

  const breadInfo: CarouselItemInfo[] = breadVariants.map((variant, index) => ({
    text: variant,
    icon: icons[index],
    index: index,
  }));

  const handleChange = (index: number, value: number) => {
    dispatch(updateBread(value));
  };

  // carousel needs at least 3 items for animation
  const items = [...breadInfo, ...breadInfo].map((bread, index) => (
    <CarouselItem info={bread} key={`breadKey${index}`} />
  ));

  return (
    <div className={styles.breadContainer}>
      <Label text="bread" />
      <Carousel
        items={items}
        index={0}
        value={bread}
        valueSetter={handleChange}
      />
    </div>
  );
}