import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";
import { CarouselButton } from "./carouselButton";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import classNames from "classnames";

interface CarouselProps {
  items: JSX.Element[];
  index?: number;
  value?: number;
  valueSetter?: (index: number, value: number) => void;
}

export function Carousel({ items, index, value, valueSetter }: CarouselProps) {
  const [currentItems, setCurrentItems] = useState(items);
  const [selectedOption, setSelectedOption] = useState(1);
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);

  const checkValue = () => {
    if (value !== undefined && currentItems[1].props.info.index !== undefined) {
      const temporaryItems = [...items];
      const indexOfItem = temporaryItems
        .map((item) => item.props.info.index)
        .indexOf(value);
      if (indexOfItem !== 1) {
        const beginning = temporaryItems.splice(0, indexOfItem);
        const itemOnFirstPlace = temporaryItems.concat(beginning);
        const lastItem = itemOnFirstPlace.pop();
        if (lastItem) {
          itemOnFirstPlace.unshift(lastItem);
          setCurrentItems(itemOnFirstPlace);
        }
      }
    }
  };

  useEffect(() => checkValue(), [value]);

  const checkOption = () => {
    setSelectedOption(currentItems[1].props.info.index);
  };

  const tryToUseValueSetter = () => {
    if (valueSetter !== undefined && index !== undefined) {
      valueSetter(index, selectedOption);
    }
  };

  useEffect(() => checkOption(), [currentItems]);
  useEffect(() => tryToUseValueSetter(), [selectedOption]);

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
