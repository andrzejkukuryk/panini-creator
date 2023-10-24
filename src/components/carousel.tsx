import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";
import { CarouselButton } from "./carouselButton";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import classNames from "classnames";

interface CarouselProps {
  items: JSX.Element[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentItems, setCurrentItems] = useState(items);
  const [selectedOption, setSelectedOption] = useState("");
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);


  const checkOption = () => {
    setSelectedOption(currentItems[1].props.info.text.toLowerCase());
  };

  useEffect(() => checkOption(), [currentItems]);

  const nextItem = () => {
    const temporaryItems = [...currentItems];
    const firstItem = temporaryItems.shift();
    if (firstItem) {
      temporaryItems.push(firstItem);
      setSlideLeft(false);
    }
    setCurrentItems(temporaryItems);
  };

  const prevItem = () => {
    const temporaryItems = [...currentItems];
    const lastItem = temporaryItems.pop();
    if (lastItem) {
      temporaryItems.unshift(lastItem);
      setSlideRight(false);
    }
    setCurrentItems(temporaryItems);
  };

  const moveCarouselRight = () => {
    setSlideRight(true);
    setTimeout(prevItem, 400);
  };

  const moveCarouselLeft = () => {
    setSlideLeft(true);
    setTimeout(nextItem, 400);
  };

  const carouselClass = classNames([styles.innerContainer], {
    [styles.slideRight]: slideRight,
    [styles.slideLeft]: slideLeft,
  });

  return (
    <div className={styles.carouselContainer}>
      <CarouselButton ftn={moveCarouselLeft} icon={arrowLeft} />
      <div className={styles.frame}>
        <div className={carouselClass}>{currentItems}</div>
      </div>
      <CarouselButton ftn={moveCarouselRight} icon={arrowRight} />
    </div>
  );
}