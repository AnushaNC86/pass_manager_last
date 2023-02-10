import { Routes, Route } from "react-router-dom";
import DashBoard from "../../views/dashboard/dasboard";
import LoginPage from "../../views/loginPage/loginPage";
import RegisterPage from "../../views/registerPage/registerPage";
import { useEffect, useState } from "react"
const Routers = () => {
  const [authorize, setAuthorize] = useState(false)
  const auth = localStorage.getItem("Auth");
  console.log("auth", typeof auth);


  return (
    <div className="login1">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="*" element={<LoginPage />} />
        <Route
          path="/home"
          element={auth === "true" ? <DashBoard /> : <LoginPage />}
        />
      </Routes>
    </div>
  );
};

export default Routers;
