import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState(false);
  const [mpin, setMpin] = useState(false);
  const navigate = useNavigate();
  const toggleMpin = () => {
    setMpin(!password);
  };
  const togglePassword = () => {
    setPassword(!password);
  };
  const existedUsers = localStorage.getItem("users") || "[]";

  if (existedUsers === "[]") {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const mobile = e.target.mobileNo.value;
    const mPin = e.target.mPin.value;
    const cmPin = e.target.cmPin.value;

    const userValues = { mobile, mPin, cmPin };
    console.log("userValues", userValues);

    const enteredData = JSON.parse(localStorage.getItem("users") || "[]");
    console.log("entered", enteredData);

    const newArr = [];
    enteredData.map((user) => {
      if (user.mobile === userValues.mobile) {
        newArr.push("exists");
      }
    });

    if (newArr.includes("exists")) {
      alert("User already exists");
    } else {
      if (
        userValues.mobile !== "" &&
        userValues.mPin !== "" &&
        userValues.cmPin !== ""
      ) {
        if (userValues.mPin && userValues.cmPin && userValues.mPin === cmPin) {
          enteredData.push(userValues);
          localStorage.setItem("users", JSON.stringify(enteredData));
          localStorage.setItem(JSON.stringify(mobile), JSON.stringify([]));
          sessionStorage.setItem("success", "true");
          navigate("/");
        } else {
          alert("MPIN doesnot match");
        }
      } else {
        alert("enter all fields");
      }
    }
  };

  // const existedUsers = localStorage.getItem("users") || "[]";
  // console.log("existing users:", existedUsers);

  // if (existedUsers === "[]") {
  //   localStorage.setItem("users", JSON.stringify([]));
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const userName = e.target.mobileNo.value;
  //   const mPin = e.target.mPin.value;
  //   const cmPin = e.target.cmPin.value;

  //   const userValues = { userName, mPin, cmPin };
  //   console.log("userValues", userValues);
  //   const enteredData = JSON.parse(localStorage.getItem("users") || "[]");
  //   const newarr[] = [];
  //   enteredData.map((user) => {
  //     if (user.userName === userValues.userName) {
  //       newarr.push("exists");
  //     }
  //   });
  //   if (newarr.includes("exists")) {
  //     alert("user already exists");
  //   } else {
  //     enteredData.push(userValues);
  //     localStorage.setItem("users", JSON.stringify(enteredData));
  //   }

  //   // if (JSON.stringify(newarr) !== "[]") {
  //   //   if (newarr.includes("exists")) {
  //   //     alert("user already exists");
  //   //   } else {
  //   //     existedUsers.push(userValues);
  //   //     localStorage.setItem("users", JSON.stringify(existedUsers));
  //   //   }
  //   // } else {
  //   //   existedUsers.push(userValues);
  //   //   localStorage.setItem("users", JSON.stringify(existedUsers));
  //   // }

  //   console.log("ex", existedUsers);
  // };

  return (
    <div className="signIn">
      <div className="signInHead">SIGN UP </div>
      <div className="signInForm">
        <form className="formConatiner" onSubmit={submitHandler}>
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
              type={mpin ? "text" : "password"}
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
              onClick={toggleMpin}
            />
          </div>
          <div className="txtField">
            <input
              type={password ? "text" : "password"}
              className="cMPin"
              placeholder="Re-enter Mpin"
              name="cmPin"
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

          <div>
            <button className="btnSignIn">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
