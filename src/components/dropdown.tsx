import React from "react";
import styles from "./dropdown.module.scss";
import Select from "react-select";

export interface DropdownInfo {
  value: number;
  label: string;
}

interface DropdownProps {
  options: DropdownInfo[];
  value: number;
  index: number;
  valueSetter: (index: number, value: number) => void;
}

export function Dropdown({
  options,
  value,
  index,
  valueSetter,
}: DropdownProps) {
  //@ts-ignore
  const handleChange = (selectedOption) => {
    if (selectedOption.value !== "undefinded") {
      valueSetter(index, selectedOption.value);
    }
  };

  const dropdownStyle = {
    //@ts-ignore
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
          options={options}
          onChange={handleChange}
          value={options[value]}
          styles={dropdownStyle}
        />
      </div>
    </div>
  );
}
