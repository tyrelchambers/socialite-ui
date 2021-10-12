import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import Form from "../components/Form/Form";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { useLogin } from "../hooks/useLogin";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const login = useLogin();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!state.email || !state.password) return;

    login.mutate(state);
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputWrapper label="Email" htmlFor="email" labelIcon={faEnvelope}>
        <Input
          placeholder="your email"
          type="email"
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </InputWrapper>

      <InputWrapper label="Password" htmlFor="password" labelIcon={faKey}>
        <Input
          placeholder="***"
          type="password"
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
      </InputWrapper>

      <Buttons type="submit">Login</Buttons>
    </Form>
  );
};

export default LoginForm;
