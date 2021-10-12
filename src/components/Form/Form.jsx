import React from "react";
import styled from "styled-components";
const StyledForm = styled.form`
  background-color: var(--lighter-black);
  max-width: ${(props) => (props.wide ? "100%" : "448px")};
`;
const Form = ({ className, wide, children, ...rest }) => {
  return (
    <StyledForm
      className={`w-full mt-10 p-4 rounded-xl shadow-lg gap-6 flex flex-col ${
        className ?? ""
      }`}
      wide={wide}
      {...rest}
    >
      {children}
    </StyledForm>
  );
};

export default Form;
