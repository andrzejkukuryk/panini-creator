import React from "react";
import styles from "./dressing.module.scss";
import { Label } from "../../../components/label";

import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";
import { Carousel } from "../../../components/carousel";
import {
  CarouselItem,
  CarouselItemInfo,
} from "../../../components/carouselItem";
import { useSelector, useDispatch } from "react-redux";
import {
  dressingVariantsSelector,
  addDressingSelector,
  dressingsSelector,
} from "../../../store/selectors";
import {
  addNextDressing,
  subDressing,
  updateAddDressing,
  updateDressings,
} from "../../../store/dressingSlice";

export function Dressing() {
  const dispatch = useDispatch();

  const dressingVariants = useSelector(dressingVariantsSelector);
  const addDressing = useSelector(addDressingSelector);
  const dressings = useSelector(dressingsSelector);

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
    dispatch(updateAddDressing());
  };

  const handleButton = (i: number) => {
    if (i !== 0) {
      return dispatch(subDressing(i));
    } else {
      return dispatch(addNextDressing());
    }
  };

  const handleChange = (index: number, value: number) => {
    dispatch(updateDressings({ index, value }));
  };

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
              <Carousel
                items={items}
                index={index}
                value={dressing}
                valueSetter={handleChange}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
