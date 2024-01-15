import React from "react";
import styles from "./carouselButton.module.scss";

interface CarouselButtonProps {
  ftn: () => void;
  icon: string;
}

export function CarouselButton({ ftn, icon }: CarouselButtonProps) {
  return (
    <button onClick={ftn} className={styles.carouselButton}>
      <img src={icon} />
    </button>
  );
}
