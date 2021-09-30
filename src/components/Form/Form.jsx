import React from "react";
import styled from "styled-components";
const StyledForm = styled.form`
  background-color: var(--lighter-black);
  max-width: ${(props) => (props.wide ? "100%" : "448px")};
`;
const Form = (props) => {
  return (
    <StyledForm
      className={`w-full mt-10 p-4 rounded-xl shadow-lg gap-6 flex flex-col ${
        props.className ?? ""
      }`}
      wide={props.wide}
    >
      {props.children}
    </StyledForm>
  );
};

export default Form;
