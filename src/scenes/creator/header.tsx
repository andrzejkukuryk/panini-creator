import React from "react";
import styles from "./header.module.scss";
import { Title } from "../../components/title";
import { AppButton } from "../../components/appButton";
import { useDispatch } from "react-redux";
import { randomBread } from "../../store/bread/breadSlice";
import { AppDispatch } from "../../store/store";
import { randomCheese } from "../../store/cheese/cheeseSlice";
import { randomMeat } from "../../store/meat/meatSlice";

export function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const handleClickRandom = () => {
    dispatch(randomBread());
    dispatch(randomCheese());
    dispatch(randomMeat());
  };

  return (
    <div className={styles.headerContainer}>
      <Title text="Panini Creator" />
      <AppButton text="randomize panini" handledFunction={handleClickRandom} />
    </div>
  );
}
