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
import { text } from "stream/consumers";

const icons = [wheat, grain];

export function Bread() {
  const breadInfo: CarouselItemInfo[] = breadVariants.map((variant, index) => ({
    text: variant,
    icon: icons[index],
  }));

  const items = breadInfo.map((bread) => <CarouselItem info={bread} />);

  return (
    <div className={styles.breadContainer}>
      <Label text="bread" />
      <Carousel items={items} />
      {/* <CarouselItem info={{ text: "wheat" }} /> */}
    </div>
  );
}
