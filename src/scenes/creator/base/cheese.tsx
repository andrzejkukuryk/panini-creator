import React, { useEffect, useState } from "react";
import styles from "./cheese.module.scss";
import { Label } from "../../../components/label";
import { Dropdown, DropdownInfo } from "../../../components/dropdown";
import { Switch } from "../../../components/switch";
import { AddSubButton } from "../../../components/addSubButton";
import { useSelector, useDispatch } from "react-redux";
import {
  cheeseVariantsSelector,
  addCheeseSelector,
  cheesesSelector,
} from "../../../store/selectors";
import {
  addNextCheese,
  subCheese,
  updateAddCheese,
  updateCheeses,
} from "../../../store/cheeseSlice";

export function Cheese() {
  const dispatch = useDispatch();

  const [selectedCheeses, setSelectedCheeses] = useState<string[]>([]);

  const cheeseVariants = useSelector(cheeseVariantsSelector);
  const addCheese = useSelector(addCheeseSelector);
  const cheeses = useSelector(cheesesSelector);
  const cheeseInfo: DropdownInfo[] = cheeseVariants.map((variant, index) => ({
    value: index,
    label: variant,
  }));

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

  const handleChange = (index: number, value: number) => {
    dispatch(updateCheeses({ index, value }));
  };

  const createSelectedCheeses = () => {
    if (addCheese) {
      const temporarySelectedCheeses = cheeses.map(
        (item) => cheeseVariants[item]
      );
      setSelectedCheeses(temporarySelectedCheeses);
    } else {
      setSelectedCheeses([]);
    }
  };

  useEffect(() => createSelectedCheeses(), [cheeses, addCheese]);

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
              key={`keyCheese${cheese}`}
            >
              <AddSubButton ftn={() => handleButton(index)} sub={index !== 0} />
              <Dropdown
                options={cheeseInfo}
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
