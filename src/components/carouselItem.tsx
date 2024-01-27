import React from "react";
import styles from "./carouselItem.module.scss";

export interface CarouselItemInfo {
  text: string;
  icon?: string;
}

interface CarouselItemProps {
  text: string;
  icon?: string;
}

export function CarouselItem({ text, icon }: CarouselItemProps) {
  return (
    <div className={styles.carouselItemContainer}>
      <div className={styles.centered}>
        {icon && <img src={icon} />}
        {text}
      </div>
    </div>
  );
}
