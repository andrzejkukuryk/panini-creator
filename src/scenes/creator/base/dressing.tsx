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
} from "../../../store/dressing/selectors";
import {
  addNextDressing,
  subDressing,
  updateAddDressing,
  updateDressings,
} from "../../../store/dressing/dressingSlice";

export function Dressing() {
  const dispatch = useDispatch();

  const dressingVariants = useSelector(dressingVariantsSelector);
  const addDressing = useSelector(addDressingSelector);
  const dressings = useSelector(dressingsSelector);


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
                options={dressingVariants}
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
