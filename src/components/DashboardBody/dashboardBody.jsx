import "./dashboardBody.css";
import { useState } from "react";
import Modal from "../modal/modal";
import SitesCard from "../sitesCard/sitesCard";
import ModalEdit from "../modalEdit/modaledit";

const DashBoardBody = () => {
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [modalEdit, setModalEdit] = useState(0);

  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  console.log("currentUser", currentUser);

  const siteData = JSON.parse(localStorage.getItem(currentUser) || "[]");
  console.log("siteData", siteData);

  const openModal = () => {
    setModal(!modal);
  };
  const openModalEdit = () => {
    setEdit(!edit);
  };
  const getSearch = (e) => {
    setSearch(e.target.value);
    console.log("search term", search);
  };

  const childToParent = (data, i) => {
    setEdit(data);
    setModalEdit(i);
  };

  return (
    <div className="homeBodyContiner">
      <div className="homebodyHead">
        <div className="sitesMedia">
          <div className="socialMediaContainer">
            <div className="Sites" data-cy="site-head">
              Sites
            </div>
          </div>
          <div className="searchContainer">
            <div className="searchBar">
              <input
                type="text"
                className="search"
                name="search"
                placeholder="Search Here"
                onChange={getSearch}
              />
              <img
                src={require("../../assets/icons/search.png")}
                alt=""
                className="searchIcon"
              />
            </div>
            <div className="addModal" data-cy="add-site-modal">
              <img
                src={require("../../assets/icons/close_btn.png")}
                alt=""
                className="cross"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      </div>
      {JSON.stringify(siteData) === "[]" ? (
        <div className="addNewDataContainer">
          <div className="addSite">
            <div className="addNew">
              Please Click on the “+” symbol <br />
              to add sites
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="socialMediaHead">
            <div className="socialMedia">Social Media</div>
            <div className="dropdown">
              <img src={require("../../assets/icons/drop_down.png")} alt="" />
            </div>
            <div className="socialMediaCount">
              {siteData.length < 10 ? `0${siteData.length}` : siteData.length}
            </div>
          </div>
          <div className="sitesMobile">
            <div className="Sites">Sites</div>
            <div className="socialMediaHead1">
              <div className="socialMedia">Social Media</div>
              <div className="dropdown">
                <img src={require("../../assets/icons/drop_down.png")} alt="" />
              </div>
              <div className="socialMediaCount">
                {siteData.length < 10 ? `0${siteData.length}` : siteData.length}
              </div>
            </div>
          </div>
          <div className="addSiteContainer">
            <div className="sitesContainer">
              {siteData
                .filter((ele) => {
                  return search.toLowerCase() === ""
                    ? ele
                    : ele.siteName.toLowerCase().includes(search.toLowerCase());
                })
                .map((ele, i) => {
                  return (
                    <div key={i} className="sitesContents">
                      <div className="cardHead">
                        <div className="cardLogo">
                          {ele.icon !== "" ? (
                            <img
                              src={require("../../assets/icons/Facebook.png")}
                              className="fbImg"
                              onClick={() => {
                                childToParent(true, i);
                              }}
                            />
                          ) : (
                            <img src={ele.icon} alt="" />
                          )}
                        </div>

                        <div>
                          <div className="copyTitle"> {ele.siteName}</div>
                          <div
                            className="cardCopy"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={require("../../assets/icons/copy.png")}
                              alt="copy"
                              onClick={() => {
                                navigator.clipboard.writeText(ele.sitePassword);
                              }}
                            />
                            <div
                              className="copyPass"
                              data-cy="copy-password"
                              onClick={() => {
                                navigator.clipboard.writeText(ele.sitePassword);
                              }}
                            >
                              Copy Password
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="siteLink">{ele.url}</div>
                    </div>
                  );
                })}
            </div>
            <div className="addModalMobile">
              <img
                src={require("../../assets/icons/close_btn.png")}
                alt=""
                className="cross"
                onClick={openModal}
              />
            </div>
          </div>
        </div>
      )}
      {modal && (
        <>
          <div className="modal">
            <div className="overlay">
              <div className="modelInfo">
                <div className="modalContent">
                  <Modal />
                  <button className="close-modal">
                    <img
                      src={require("../../assets/icons/close_btn.png")}
                      alt="drop"
                      className="closeImg"
                      onClick={() => {
                        setModal(false);
                      }}
                    />
                  </button>
                  <button className="arrow">
                    <img
                      src={require("../../assets/icons/aerrow.png")}
                      alt="drop"
                      className="arrowImg"
                      onClick={() => {
                        setModal(false);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {edit && (
        <>
          <div className="modal">
            <div className="overlay">
              <div className="modelInfo">
                <div className="modalContent">
                  <ModalEdit
                    index={modalEdit}
                    edit1={edit}
                    setEdit1={setEdit}
                  />
                  <button className="arrow">
                    <img
                      src={require("../../assets/icons/aerrow.png")}
                      alt="drop"
                      className="arrowImg"
                      onClick={() => {
                        setEdit(false);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DashBoardBody;
