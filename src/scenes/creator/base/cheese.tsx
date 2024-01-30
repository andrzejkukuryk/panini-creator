import React from "react";
import styles from "./cheese.module.scss";
import { Label } from "../../../components/label";
import { Dropdown } from "../../../components/dropdown";
import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";
import { useSelector, useDispatch } from "react-redux";
import {
  cheeseVariantsSelector,
  addCheeseSelector,
  cheesesSelector,
} from "../../../store/cheese/selectors";
import {
  addNextCheese,
  subCheese,
  updateAddCheese,
  updateCheeses,
} from "../../../store/cheese/cheeseSlice";

export function Cheese() {
  const dispatch = useDispatch();

  const cheeseVariants = useSelector(cheeseVariantsSelector);
  const addCheese = useSelector(addCheeseSelector);
  const cheeses = useSelector(cheesesSelector);

  const handleSwitch = () => {
    dispatch(updateAddCheese());
  };

  const handleButton = (i: number) => {
    if (i !== 0) {
      return dispatch(subCheese(i));
    } else {
      return dispatch(addNextCheese());
    }
  };

  const handleChange = (index: number, value: string) => {
    dispatch(updateCheeses({ index, value }));
  };

  return (
    <div className={styles.newCheeseContainer}>
      <div className={styles.labelAndSwitch}>
        <Label text="cheese" />
        <Switch checked={addCheese} ftn={handleSwitch} />
      </div>
      {addCheese && (
        <div className={styles.dropdowns}>
          {cheeses.map((cheese, index) => (
            <div
              className={styles.buttonAndDropdown}
              key={`keyCheese${cheese}${index}`}
            >
              <AddSubButton ftn={() => handleButton(index)} sub={index !== 0} />
              <Dropdown
                options={cheeseVariants}
                value={cheese}
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
