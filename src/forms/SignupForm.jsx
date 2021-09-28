import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import Buttons from "../components/Buttons/Buttons";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";

const StyledForm = styled.form`
  background-color: var(--lighter-black);
`;

const SignupForm = () => {
  return (
    <StyledForm
      className={`max-w-md w-full mt-10 p-4 rounded-xl shadow-lg gap-6 flex flex-col`}
    >
      <InputWrapper label="Email" htmlFor="email" labelIcon={faEnvelope}>
        <Input placeholder="your email" type="email" />
      </InputWrapper>

      <InputWrapper label="Password" htmlFor="password" labelIcon={faKey}>
        <Input placeholder="***" type="password" />
      </InputWrapper>

      <InputWrapper
        label="Confirm Password"
        htmlFor="confirmPassword"
        labelIcon={faKey}
      >
        <Input placeholder="***" type="password" />
      </InputWrapper>

      <Buttons>Complete</Buttons>
    </StyledForm>
  );
};

export default SignupForm;
