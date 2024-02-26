import React from "react";
import styles from "./header.module.scss";
import { Title } from "../../components/title";
import { AppButton } from "../../components/appButton";
import { useDispatch } from "react-redux";
import { randomBread } from "../../store/bread/breadSlice";
import { AppDispatch } from "../../store/store";
import { randomCheese } from "../../store/cheese/cheeseSlice";

export function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const handleClickRandom = () => {
    dispatch(randomBread());
    dispatch(randomCheese());
  };

  return (
    <div className={styles.headerContainer}>
      <Title text="Panini Creator" />
      <AppButton text="randomize panini" handledFunction={handleClickRandom} />
    </div>
  );
}
