import React from "react";
import LoginForm from "../../forms/LoginForm";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const Login = () => {
  return (
    <>
      <Header />
      <Wrapper className="flex flex-col items-center mt-20">
        <h1 className="text-4xl">Welcome back, Creator!</h1>
        <LoginForm />
      </Wrapper>
    </>
  );
};

export default Login;
