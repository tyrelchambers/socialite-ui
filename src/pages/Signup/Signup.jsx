import React from "react";
import SignupForm from "../../forms/SignupForm";
import Header from "../../layouts/Header/Header";
import Wrapper from "../../layouts/Wrapper/Wrapper";

const Signup = () => {
  return (
    <div>
      <Header />
      <Wrapper className="flex flex-col items-center mt-20">
        <h1 className="text-4xl">Become a Socialite</h1>
        <SignupForm />
      </Wrapper>
    </div>
  );
};

export default Signup;
