import React, { useEffect, useState } from "react";
import styles from "./dressing.module.scss";
import { Label } from "../../../components/label";
import { dressingVariants } from "../../../data/dressing";
import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";
import { Carousel } from "../../../components/carousel";
import {
  CarouselItem,
  CarouselItemInfo,
} from "../../../components/carouselItem";

export function Dressing() {
  const [addDressing, setAddDressing] = useState(true);
  const [dressings, setDressings] = useState<number[]>([1]);
  const [selectedDressings, setSelectedDressings] = useState<string[]>([]);

  const dressingInfo: CarouselItemInfo[] = dressingVariants.map(
    (variant, index) => ({
      text: variant,
      index: index,
    })
  );

  const items = dressingInfo.map((dressing, index) => (
    <CarouselItem info={dressing} key={`dressingKey${index}`} />
  ));

  const handleSwitch = () => {
    setAddDressing(!addDressing);
  };

  const addNextDressing = () => {
    const temporaryDressings = [...dressings];
    temporaryDressings.push(0);
    setDressings(temporaryDressings);
  };

  const subDressing = (num: number) => {
    const temporaryDressings = [...dressings];
    temporaryDressings.splice(num, 1);
    setDressings(temporaryDressings);
  };

  const handleButton = (i: number) => {
    if (i !== 0) {
      return subDressing(i);
    } else {
      return addNextDressing();
    }
  };

  const choosenDressing = (index: number, value: number) => {
    let temporaryDressings = [...dressings];
    temporaryDressings[index] = value;
    setDressings(temporaryDressings);
  };

  const createSelectedDressings = () => {
    if (addDressing) {
      const temporarySelectedDressings = dressings.map(
        (item) => dressingVariants[item]
      );
      setSelectedDressings(temporarySelectedDressings);
    } else {
      setSelectedDressings([]);
    }
  };

  useEffect(() => createSelectedDressings(), [dressings, addDressing]);
  console.log(selectedDressings, dressings);

  return (
    <div className={styles.dressingContainer}>
      <div className={styles.labelAndSwitch}>
        <Label text="dressing" />
        <Switch checked={addDressing} ftn={handleSwitch} />
      </div>
      {addDressing && (
        <div className={styles.carousels}>
          {dressings.map((dressing, index) => (
            <div
              className={styles.buttonAndCarousel}
              key={`keyDressing${index}`}
            >
              <AddSubButton ftn={() => handleButton(index)} sub={index !== 0} />
              {/* <Dropdown
                options={dressingInfo}
                value={dressing}
                index={index}
                valueSetter={choosenDressing}
              /> */}
              <Carousel
                items={items}
                index={index}
                value={dressing}
                valueSetter={choosenDressing}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
