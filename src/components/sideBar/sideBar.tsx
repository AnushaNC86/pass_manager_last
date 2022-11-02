import "./sideBar.css";
const SideBar = () => {
  return (
    <div className="sideBarContainer">
      <div className="sideBarContents">
        <div className="burgerMenu">
          <img
            src={require("../../assets/icons/burger_menu.png")}
            alt=""
            className="burger"
          />
        </div>
        <div className="home">
          <img
            src={require("../../assets/icons/home_icn.png")}
            alt=""
            className="homeIcon"
          />
        </div>
      </div>
      <div className="activeTab"></div>
    </div>
  );
};

export default SideBar;
