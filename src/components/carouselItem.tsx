import React from "react";
import styles from "./carouselItem.module.scss";

export interface CarouselItemInfo {
  text: string;
  icon?: string;
}

interface CarouselItemProps {
  info: CarouselItemInfo;
}

export function CarouselItem({ info }: CarouselItemProps) {
  return (
    <div className={styles.carouselItemContainer}>
      <div className={styles.centered}>
        {info.icon && <img src={info.icon} />}
        {info.text}
      </div>
    </div>
  );
}
