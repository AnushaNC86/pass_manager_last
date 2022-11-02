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
  const getSearch = (e: any) => {
    setSearch(e.target.value);
    console.log("search term", search);
  };

  const childToParent = (data: any, i: number) => {
    setEdit(data);
    setModalEdit(i);
  };

  return (
    <div className="homeBodyContiner">
      <div className="homebodyHead">
        <div className="sitesMedia">
          <div className="socialMediaContainer">
            <div className="Sites">Sites</div>
          </div>
          <div className="searchContainer">
            <div className="searchBar">
              <input
                type="text"
                className="search"
                name="search"
                placeholder="Search here"
                onChange={getSearch}
              />
              <img
                src={require("../../assets/icons/search.png")}
                alt=""
                className="searchIcon"
              />
            </div>
            <div className="addModal">
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
            <SitesCard
              siteData={siteData}
              search={search}
              childToParent={childToParent}
            />
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
                  <button className="arrow"
                  ><img
                      src={require("../../assets/icons/aerrow.png")}
                      alt="drop"
                      className="arrowImg"
                      onClick={() => {
                        setModal(false);
                      }}
                    /></button>
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
                  <button className="arrow"
                  ><img
                      src={require("../../assets/icons/aerrow.png")}
                      alt="drop"
                      className="arrowImg"
                      onClick={() => {
                        setEdit(false);
                      }}
                    /></button>

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
