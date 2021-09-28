import React from "react";
import styled from "styled-components";
const StyledForm = styled.form`
  background-color: var(--lighter-black);
`;
const Form = (props) => {
  return (
    <StyledForm
      className={`max-w-md w-full mt-10 p-4 rounded-xl shadow-lg gap-6 flex flex-col ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </StyledForm>
  );
};

export default Form;
