import React from "react";
import styles from "./dropdown.module.scss";
import Select, { GroupBase, SingleValue, StylesConfig } from "react-select";

export interface DropdownInfo {
  value: string;
  label: string;
}

interface DropdownProps {
  options: string[];
  value: string;
  index: number;
  valueSetter: (index: number, value: string) => void;
}

export function Dropdown({
  options,
  value,
  index,
  valueSetter,
}: DropdownProps) {
  const dropdownOptions: DropdownInfo[] = options.map((option) => {
    return { value: option, label: option };
  });

  const indexOfSelectedOption = options.indexOf(value);

  const handleChange = (selectedOption: SingleValue<DropdownInfo>) => {
    if (selectedOption !== null) {
      valueSetter(index, selectedOption.value);
    }
  };

  const dropdownStyle: StylesConfig<
    DropdownInfo,
    false,
    GroupBase<DropdownInfo>
  > = {
    control: (styles) => ({
      ...styles,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#000000",
      borderRadius: 0,
      flexShrink: 0,
    }),
  };

  return (
    <div className={styles.dropdownContainer}>
      <div style={{ width: "100%", height: "100%" }}>
        <Select
          options={dropdownOptions}
          onChange={handleChange}
          value={dropdownOptions[indexOfSelectedOption]}
          styles={dropdownStyle}
        />
      </div>
    </div>
  );
}
