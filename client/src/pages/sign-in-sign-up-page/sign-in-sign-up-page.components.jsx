import React from "react";
import { SignInAndSignUpContainer } from "./sign-in-sign-up.styles";
import SignIn from "../../components/sign-in/sign-in.components";
import SignUp from "../../components/sign-up/sign-up.components";
const SignInSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInSignUpPage;
