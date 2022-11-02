import { useState } from "react";
import "./signIn.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [password, setPassword] = useState(false);

  const navigate = useNavigate();

  const togglePassword = () => {
    setPassword(!password);
  };

  const onsubmitHandler = (e: any) => {
    e.preventDefault();
    const mobile = e.target.mobileNo.value;
    const mPin = e.target.mPin.value;

    const loginData = { mobile, mPin };
    console.log("login data", loginData);

    const storedData = JSON.parse(localStorage.getItem("users") || "[]");
    console.log("storedData", storedData);
    if (loginData.mobile !== "" && loginData.mPin !== "") {
      storedData.map((user: any) => {
        if (user.mobile === loginData.mobile) {
          if (user.mPin === loginData.mPin) {
            localStorage.setItem("currentUser", JSON.stringify(mobile));
            localStorage.setItem("Auth", JSON.stringify(true));
            sessionStorage.setItem("signInSuccess", "true");
            navigate("/home");
            window.location.reload();
          } else {
            alert("enter valid credentials");
          }
        }

      });
    } else {
      alert("enter all fileds");
    }
  };

  // const existedUsers = localStorage.getItem("users") || "[]";
  // console.log("existing users:", existedUsers);

  // if (existedUsers == "[]") {
  //   localStorage.setItem("users", JSON.stringify([]));
  // }

  // const submitHandler = (e: any) => {
  //   e.preventDefault();

  //   const userName = e.target.mobileNo.value;
  //   const mPin = e.target.mPin.value;

  //   const userValues = { userName, mPin };
  //   console.log("userValues", userValues);

  //   const newData = localStorage.setItem("users", JSON.parse(userValues));
  //   console.log("new data", newData);
  // };

  return (
    <div className="signIn">
      <div className="signInHead">Sign in to your account</div>
      <div className="signInForm">
        <form className="formConatiner" onSubmit={onsubmitHandler}>
          <div className="txtField">
            <input
              type="text"
              className="mobileNo"
              placeholder="Mobile Number"
              name="mobileNo"
              maxLength={10}
              minLength={10}
            />

          </div>
          <div className="txtField">
            <input
              type={password ? "text" : "password"}
              className="mPin"
              placeholder="Enter Mpin"
              name="mPin"

              maxLength={4}
              minLength={4}
            />
            <img
              src={require("../../assets/icons/eye_on.png")}
              alt=""
              className="eyeIcon"
              onClick={togglePassword}
            />
          </div>
          <div className="forgotPassword">Forgot your password?</div>
          <div>
            <button className="btnSignIn">SIGN IN</button>
          </div>
        </form>
      </div>
      <div className="registerLink">
        Don’t have a Account?{" "}
        <Link to="/signup" className="regLink">
          SIGNUP
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
