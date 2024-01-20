import React from "react";
import styles from "./meat.module.scss";
import { Label } from "../../../components/label";
import { Dropdown, DropdownInfo } from "../../../components/dropdown";
import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";
import { useSelector, useDispatch } from "react-redux";
import {
  meatVariantsSelector,
  addMeatSelector,
  meatsSelector,
} from "../../../store/meat/selectors";
import {
  addNextMeat,
  subMeat,
  updateAddMeat,
  updateMeats,
} from "../../../store/meat/meatSlice";

export function Meat() {
  const dispatch = useDispatch();

  const meatVariants = useSelector(meatVariantsSelector);
  const addMeat = useSelector(addMeatSelector);
  const meats = useSelector(meatsSelector);
  const meatInfo: DropdownInfo[] = meatVariants.map((variant, index) => ({
    value: index,
    label: variant,
  }));

  const handleSwitch = () => {
    dispatch(updateAddMeat());
  };

  const handleButton = (i: number) => {
    if (i !== 0) {
      return dispatch(subMeat(i));
    } else {
      return dispatch(addNextMeat());
    }
  };

  const handleChange = (index: number, value: number) => {
    dispatch(updateMeats({ index, value }));
  };

  return (
    <div className={styles.meatContainer}>
      <div className={styles.labelAndSwitch}>
        <Label text="meat" />
        <Switch checked={addMeat} ftn={handleSwitch} />
      </div>
      {addMeat && (
        <div className={styles.dropdowns}>
          {meats.map((meat, index) => (
            <div className={styles.buttonAndDropdown} key={`keyMeat${meat}`}>
              <AddSubButton ftn={() => handleButton(index)} sub={index !== 0} />
              <Dropdown
                options={meatInfo}
                value={meat}
                index={index}
                valueSetter={handleChange}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
