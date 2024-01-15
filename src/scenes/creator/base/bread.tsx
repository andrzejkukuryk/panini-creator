import React from "react";
import styles from "./bread.module.scss";
import { breadVariants } from "../../../data/bread";
import wheat from "../../../assets/IconWheat.png";
import grain from "../../../assets/IconGrain.png";
import { Label } from "../../../components/label";
import { Carousel } from "../../../components/carousel";
import {
  CarouselItem,
  CarouselItemInfo,
} from "../../../components/carouselItem";

const icons = [wheat, grain];

export function Bread() {
  const breadInfo: CarouselItemInfo[] = breadVariants.map((variant, index) => ({
    text: variant,
    icon: icons[index],
  }));

  // carousel needs at least 3 items for animation
  const items = [...breadInfo, ...breadInfo].map((bread, index) => (
    <CarouselItem info={bread} key={`breadKey${index}`} />
  ));

  return (
    <div className={styles.breadContainer}>
      <Label text="bread" />
      <Carousel items={items} />
    </div>
  );
}
