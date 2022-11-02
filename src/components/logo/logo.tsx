import "./logo.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const [select, setSelect] = useState("login");

  return (
    <div className="logoConatiner">
      <div className="logoImg">
        <img
          src={require("../../assets/logo/logo.png")}
          alt="logo"
          className="logoWeb"
        />
        <img
          src={require("../../assets/icons/logo.png")}
          alt=""
          className="logoMob"
        />
      </div>
      <div className="logoText">
        Protect & Manage every password in your business
      </div>
      <div className="signInUpTabs">
        <div className={select === "login" ? "signInTab" : ""}>
          <Link to="/" className="linkTab">
            SIGN IN
          </Link>
        </div>
        <div
          className={select === "signup" ? "signInTab" : ""}
          onClick={() => {
            setSelect("signup");
          }}
        >
          <Link to="/signup" className="linkTab">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
