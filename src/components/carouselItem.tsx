import React from "react";
import styles from "./carouselItem.module.scss";

export interface CarouselItemInfo {
  text: string;
  index?: number;
  icon?: string;
}

interface CarouselItemProps {
  text: string;
  index?: number;
  icon?: string;
}

export function CarouselItem({ text, index, icon }: CarouselItemProps) {
  return (
    <div className={styles.carouselItemContainer}>
      <div className={styles.centered}>
        {icon && <img src={icon} />}
        {text}
      </div>
    </div>
  );
}
