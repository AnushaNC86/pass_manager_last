import Logo from "../../components/logo/logo";
import { useState, useEffect } from "react";
import SignIn from "../../components/signIn/signIn";
import "./loginPage.css";
import Toast from "../../components/toast/toast";

const LoginPage = () => {
  const [toast, setToast] = useState(false);
  useEffect(() => {
    setToast(Boolean(sessionStorage.getItem("success")));

  });
  setInterval(() => {
    sessionStorage.removeItem("success");
    setToast(Boolean(sessionStorage.getItem("success")));
  }, 3000);

  return (
    <div className="login">
      {toast ? <Toast message="Congrats!! succesfylly signed in:)" /> : ""}
      <div className="loginPageContainer">
        <div className="logo">
          <Logo />
        </div>
        <div className="signupForm">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
