import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./topBar.css";

const TopBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [myCourse, setMyCourse] = useState(false);
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  const toggleClass = () => {
    setActive(!isActive);
  };

  const logOut = () => {
    navigate('/');
  };
  return (
    <div className="topBarContainer">
      <div className="topbarContents">
        <div className="topBarLogo">
          <img
            src={require("../../assets/icons/pass_logo.png")}
            alt="topbarLogo"
          />
        </div>
        <div className="topBarChoices">
          <div className="sync">
            <img src={require("../../assets/icons/sync.png")} alt="" />
          </div>
          <div className="head-profile" onClick={(e) => e.stopPropagation()}>


            <img
              src={require("../../assets/icons/profile.png")}
              onClick={() => setDropdown(!dropdown)}
              className="head-photo"
              alt="profile"

            />
            {dropdown ? (
              <div className="dropdown1">
                <div
                  onClick={() => {
                    setMyCourse(true);
                  }} className="my-course"
                >

                  My course
                </div>

                <div onClick={logOut} className="my-course3">

                  Logout
                </div>
              </div>
            ) : (
              ''
            )}


          </div>
        </div>
      </div>
      <div className="topBarMobile">
        <div className="topBarLeft">
          <div className="leftImg1" >
            <img src={require("../../assets/icons/burger_menu.png")} alt="" />

          </div>
          <div className="leftImg2">
            {" "}
            <img src={require("../../assets/icons/pass.png")} alt="" />
          </div>
        </div>
        <div className="topBarRight">
          <div className="rightImg1" >

            <img src={require("../../assets/icons/search_mobile.png")} alt="" />
          </div>
          <div className="rightImg2">
            <img src={require("../../assets/icons/sync_icn.png")} alt="" />
          </div>
          <div className="rightImg3">
            <img src={require("../../assets/icons/profile_mob.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
