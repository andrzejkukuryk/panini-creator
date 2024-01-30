import React, { useEffect, useState } from "react";
import styles from "./carousel.module.scss";
import { CarouselButton } from "./carouselButton";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import classNames from "classnames";
import { CarouselItem, CarouselItemInfo } from "./carouselItem";

interface CarouselProps {
  options: string[];
  icons?: string[];
  index: number;
  value: string;
  valueSetter: (index: number, value: string) => void;
}

export function Carousel({
  options,
  icons,
  index,
  value,
  valueSetter,
}: CarouselProps) {
  const [currentOptions, setCurrentOptions] = useState<CarouselItemInfo[]>([]);
  const [selectedOption, setSelectedOption] = useState(value);
  const [slideRight, setSlideRight] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);

  const createInitialOptions = () => {
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

    const inititialOptions: CarouselItemInfo[] = temporaryOptions.map(
      (option, index) => {
        const initialOption: CarouselItemInfo = {
          text: option,
          icon: checkIcons(index),
        };
        return initialOption;
      }
    );
    setCurrentOptions(inititialOptions);
  };

  useEffect(() => {
    createInitialOptions();
  }, []);

  const createCarouselItems = () => {
    const items = currentOptions.map((option, index) => (
      <CarouselItem option={option} key={`carouselItem${index}`} />
    ));
    return items;
  };

  const checkValue = () => {
    const temporaryOptions = [...currentOptions];
    const indexOfOption = temporaryOptions
      .map((item) => item.text)
      .indexOf(value);
    if (indexOfOption !== 1) {
      const beginning = temporaryOptions.splice(0, indexOfOption);
      const itemOnFirstPlace = temporaryOptions.concat(beginning);
      const lastItem = itemOnFirstPlace.pop();
      if (lastItem) {
        itemOnFirstPlace.unshift(lastItem);
        setCurrentOptions(itemOnFirstPlace);
      }
    }
  };

  useEffect(() => checkValue(), [value]);

  const checkOption = () => {
    if (currentOptions[1]) {
      setSelectedOption(currentOptions[1].text);
    }
  };

  useEffect(() => checkOption(), [currentOptions]);
  useEffect(() => {
    valueSetter(index, selectedOption);
  }, [selectedOption]);

  const nextItem = () => {
    const temporaryOptions = [...currentOptions];
    const firstOption = temporaryOptions.shift();
    if (firstOption) {
      temporaryOptions.push(firstOption);
      setSlideLeft(false);
    }
    setCurrentOptions(temporaryOptions);
  };

  const prevItem = () => {
    const temporaryOptions = [...currentOptions];
    const lastOption = temporaryOptions.pop();
    if (lastOption) {
      temporaryOptions.unshift(lastOption);
      setSlideRight(false);
    }
    setCurrentOptions(temporaryOptions);
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
        <div className={carouselClass}>{createCarouselItems()}</div>
      </div>
      <CarouselButton ftn={moveCarouselRight} icon={arrowRight} />
    </div>
  );
}
