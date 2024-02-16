import React, { useEffect } from "react";
import styles from "./creator.module.scss";
import { Header } from "./header";
import { Base } from "./base/base";
import { Extras } from "./extras/extras";
import { Final } from "./final/final";
import { useDispatch, useSelector } from "react-redux";
import { statusSelector } from "../../store/appControl/selectors";
import { fetchIngredients } from "../../store/ingredientsSlice";
import { AppDispatch } from "../../store/store";

export function Creator() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(statusSelector);

  const fetchData = () => {
    dispatch(fetchIngredients());
  };

  useEffect(() => {
    if (status === "idle") {
      fetchData();
    }
  }, []);

  return (
    <div className={styles.creatorContainer}>
      <Header />
      <Base />
      <Extras />
      <Final />
    </div>
  );
}
