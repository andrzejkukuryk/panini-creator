import React from "react";
import styles from "./base.module.scss";
import { SectionTitle } from "../../../components/sectionTitle";
import { Line } from "../../../components/line";
import { Bread } from "./bread";
import { Cheese } from "./cheese";
import { Meat } from "./meat";
import { Dressing } from "./dressing";
import { CheckboxFrame } from "../../../components/checkboxFrame";
import { Checkbox } from "../../../components/checkbox";
import { Radio } from "../../../components/radio";

export function Base() {
  return (
    <section className={styles.baseContainer}>
      <SectionTitle text="configure base" />
      <Line />
      <Bread />
      <Line />
      <Cheese />
      <Line />
      <Meat />
      <Line />
      <Dressing />
      <Line />
      <CheckboxFrame label="test" checked={false} handleClick={() => {}} />
      <CheckboxFrame label="test" checked={true} handleClick={() => {}} />
      <Checkbox label="test" checked={false} handleClick={() => {}} />
      <Radio
        label="hot"
        value={0}
        name="firstTest"
        handleClick={() => {}}
        checked
      />
      <Radio label="cold" value={1} name="firstTest" handleClick={() => {}} />
    </section>
  );
}
