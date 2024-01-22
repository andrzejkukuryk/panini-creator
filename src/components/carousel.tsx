import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";
import { CarouselButton } from "./carouselButton";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import classNames from "classnames";
import { CarouselItem } from "./carouselItem";

interface CarouselProps {
  options: string[];
  icons?: string[];
  index: number;
  value: number;
  valueSetter: (index: number, value: number) => void;
}

export function Carousel({
  options,
  icons,
  index,
  value,
  valueSetter,
}: CarouselProps) {
  const [currentItems, setCurrentItems] = useState<JSX.Element[]>([]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);

  const createCarouselItems = () => {
    const temporaryOptions =
      options.length > 2 ? options : [...options, ...options];

    const checkIcons = (index: number) => {
      if (icons) {
        const temporaryIcons = icons.length > 2 ? icons : [...icons, ...icons];
        return temporaryIcons[index];
      } else {
        return undefined;
      }
    };

    const items = temporaryOptions.map((option, index) => (
      <CarouselItem
        text={option}
        icon={checkIcons(index)}
        index={index}
        key={`carouselItem${index}`}
      />
    ));

    setCurrentItems(items);
  };

  useEffect(() => {
    createCarouselItems();
  }, []);

  useEffect(() => console.log(currentItems), [currentItems]);

  // const checkValue = () => {
  //   const temporaryItems = [...items];
  //   const indexOfItem = temporaryItems
  //     .map((item) => item.props.info.index)
  //     .indexOf(value);
  //   if (indexOfItem !== 1) {
  //     const beginning = temporaryItems.splice(0, indexOfItem);
  //     const itemOnFirstPlace = temporaryItems.concat(beginning);
  //     const lastItem = itemOnFirstPlace.pop();
  //     if (lastItem) {
  //       itemOnFirstPlace.unshift(lastItem);
  //       setCurrentItems(itemOnFirstPlace);
  //     }
  //   }
  // };

  // useEffect(() => checkValue(), [value]);

  // const checkOption = () => {
  //   setSelectedOption(currentItems[1].props.index);
  // };

  // useEffect(() => checkOption(), [currentItems]);
  useEffect(() => {
    valueSetter(index, selectedOption);
  }, [selectedOption]);

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
