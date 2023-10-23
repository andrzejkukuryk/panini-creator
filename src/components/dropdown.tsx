import React, { useEffect, useState } from "react";
import styles from "./dropdown.module.scss";
import Select from "react-select";

export interface DropdownInfo {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownInfo[];
}

export function Dropdown({ options }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (selectedOption) => {
    if (selectedOption.value) {
      setSelectedOption(selectedOption.value);
    }
  };

  useEffect(() => console.log(selectedOption), [selectedOption]);

  const dropdownStyle = {
    control: (styles) => ({
      ...styles,
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#000000",
      borderRadius: 0,
    }),
  };
  return (
    <div className={styles.dropdownContainer}>
      <Select
        options={options}
        onChange={handleChange}
        defaultValue={options[0]}
        styles={dropdownStyle}
      />
    </div>
  );
}
