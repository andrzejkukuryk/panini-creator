import React from "react";
import styles from "./carouselItem.module.scss";

export interface CarouselItemInfo {
  text: string;
  icon?: string;
}

interface CarouselItemProps {
  option: CarouselItemInfo;
}

export function CarouselItem({ option }: CarouselItemProps) {
  return (
    <div className={styles.carouselItemContainer}>
      <div className={styles.centered}>
        {option.icon && <img src={option.icon} />}
        {option.text}
      </div>
    </div>
  );
}
