import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Buttons from "../components/Buttons/Buttons";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";

const SignupForm = () => {
  return (
    <Form>
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
    </Form>
  );
};

export default SignupForm;
