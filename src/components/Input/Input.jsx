import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  background: ${(props) =>
    props.light ? "var(--lighter-black)" : "var(--raisin-black)"};
`;

const Input = ({ className, ...props }) => (
  <CustomInput
    className={`p-2 px-3 mt-2 rounded-md text-sm text-gray-300 ${
      className ?? ""
    }`}
    {...props}
  />
);

export default Input;
