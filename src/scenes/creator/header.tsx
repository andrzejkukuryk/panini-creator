import React from "react";
import styles from "./header.module.scss";
import { Title } from "./title";
import { AppButton } from "../../components/appButton";

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <Title />
      <AppButton text="randomize panini" handledFunction={() => {}} />
    </div>
  );
}
