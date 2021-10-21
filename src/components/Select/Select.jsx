import React from "react";
import { default as ReactSelect } from "react-select";

const styles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "var(--lighter-black)",
    borderColor: "transparent",
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "var(--lighter-black)",
    borderColor: "transparent",
    color: "white",
  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? "var(--safety-yellow)" : "",
    "&:hover": {
      backgroundColor: "var(--safety-yellow)",
      color: "var(--raisin-black)",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "var(--safety-yellow)",
  }),
};

const Select = ({ options, onChange, className, ...rest }) => {
  return (
    <ReactSelect
      options={options}
      isMulti
      onChange={onChange}
      className={className}
      styles={styles}
      {...rest}
    />
  );
};

export default Select;
