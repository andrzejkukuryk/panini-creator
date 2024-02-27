import React, { useEffect } from "react";
import styles from "./header.module.scss";
import { Title } from "../../components/title";
import { AppButton } from "../../components/appButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { randomOrderSelector } from "../../store/orders/selectors";
import { createRandomOrder } from "../../store/orders/ordersSlice";
import { randomState } from "../../store/appControl/appControlSlice";

export function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const randomOrderState = useSelector(randomOrderSelector);
  const handleClickRandom = () => {
    dispatch(createRandomOrder());
    dispatch(randomState(randomOrderState));
  };

  useEffect(() => {
    dispatch(createRandomOrder());
    console.log(randomOrderState);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <Title text="Panini Creator" />
      <AppButton text="randomize panini" handledFunction={handleClickRandom} />
    </div>
  );
}
