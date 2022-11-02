import React from "react";
import Logo from "../../components/logo/logo";
import SignUp from "../../components/signUp/signUp";

const RegisterPage = () => {
  return (
    <div className="login">
      <div className="loginPageContainer">
        <div className="logo">
          <Logo />
        </div>
        <div className="signupForm">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
