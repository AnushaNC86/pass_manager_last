import DashBoardBody from "../../components/DashboardBody/dashboardBody";
import SideBar from "../../components/sideBar/sideBar";
import Toast from "../../components/toast/toast";
import TopBar from "../../components/topBar/topBar";
import { useState, useEffect } from "react";
import "./dashboard.css";

const DashBoard = () => {
  const [toast, setToast] = useState(false);
  useEffect(() => {
    setToast(Boolean(sessionStorage.getItem("modalSuccess")))
  }, [])

  setInterval(() => {
    sessionStorage.removeItem("modalSuccess");
    setToast(Boolean(sessionStorage.getItem("modalSuccess")));
  }, 4000)

  return (
    <div className="dashboardContainer">

      <div className="dashboard">
        {toast ? <Toast message="Site added successfully" /> : ""}
        <div className="dashobardInside">
          <div className="sideBar">
            <SideBar />
          </div>
          <div className="topBar">
            <TopBar />
          </div>
          <div className="dashboardBody">
            <DashBoardBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
