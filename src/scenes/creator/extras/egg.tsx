import React from "react";
import styles from "./egg.module.scss";
import { Label } from "../../../components/label";
import { Dropdown } from "../../../components/dropdown";
import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";
import { useSelector, useDispatch } from "react-redux";
import {
  eggVariantsSelector,
  addEggSelector,
  eggsSelector,
} from "../../../store/egg/selectors";
import {
  addNextEgg,
  subEgg,
  updateAddEgg,
  updateEggs,
} from "../../../store/egg/eggSlice";

export function Egg() {
  const dispatch = useDispatch();

  const eggVariants = useSelector(eggVariantsSelector);
  const addEgg = useSelector(addEggSelector);
  const eggs = useSelector(eggsSelector);

  const handleSwitch = () => {
    dispatch(updateAddEgg());
  };

  const handleButton = (i: number) => {
    if (i !== 0) {
      return dispatch(subEgg(i));
    } else {
      return dispatch(addNextEgg());
    }
  };

  const handleChange = (index: number, value: string) => {
    dispatch(updateEggs({ index, value }));
  };

  return (
    <div className={styles.eggContainer}>
      <div className={styles.labelAndSwitch}>
        <Label text="egg" />
        <Switch checked={addEgg} ftn={handleSwitch} />
      </div>
      {addEgg && (
        <div className={styles.dropdowns}>
          {eggs.map((egg, index) => (
            <div
              className={styles.buttonAndDropdown}
              key={`keyEggs${egg}${index}`}
            >
              <AddSubButton ftn={() => handleButton(index)} sub={index !== 0} />
              <Dropdown
                options={eggVariants}
                value={egg}
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
