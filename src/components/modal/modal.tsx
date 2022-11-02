import { useState } from "react"
import "./modal.css";

const Modal = () => {
  const [pass, setPass] = useState(false);

  const togglePass = () => {
    setPass(!pass)
  }

  const modalHandler = (event: any) => {
    event.preventDefault();
    const url = event.target.url.value;
    const siteName = event.target.siteName.value;
    const folder = event.target.folder.value;
    const userName = event.target.userName.value;
    const sitePassword = event.target.sitePassword.value;
    const notes = event.target.notes.value;

    const modalData = {
      url,
      siteName,
      folder,
      userName,
      sitePassword,
      notes,
    };
    if (modalData.url !== "" &&
      modalData.siteName !== "" &&
      modalData.folder !== "" &&
      modalData.userName !== "" &&
      modalData.sitePassword !== "" &&
      modalData.notes !== "") {
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
      const oldData = JSON.parse(localStorage.getItem(currentUser) || "[]");
      oldData.push(modalData);
      localStorage.setItem(currentUser, JSON.stringify(oldData));
      sessionStorage.setItem("modalSuccess", "true");
      window.location.reload()
    }
    else {
      alert("enter all fields")
    }

  };
  return (
    <div>
      <div className="modalItem">
        <div className="addSiteModal"><div className="addSiteHead">Add Site</div></div>
        <div className="dashBoardForm">
          <form action="" className="modalForm" onSubmit={modalHandler}>
            <div className="url">
              <div className="classLabel">URL</div>
              <input type="text" className="inputStyle" name="url" />
            </div>

            <div className="firstLine">
              <div className="siteName">
                <div className="classLabel">Site Name</div>
                <input type="text" className="inputStyle" name="siteName" />
              </div>

              <div className="selectFolder">
                <div className="classLabel">Sector/Folder</div>
                <input type="text" className="inputStyle" name="folder" />
                <img
                  src={require("../../assets/icons/drop_down.png")}
                  alt="drop down"
                  className="dropDown"

                />
              </div>
            </div>

            <div className="firstLine">
              <div className="userName">
                <div className="classLabel">User Name</div>
                <input type="text" className="inputStyle" name="userName" />
              </div>

              <div className="sitePassword">
                <div className="classLabel">
                  Site Password</div>
                <input type={pass ? "text" : "password"} className="inputStyle" name="sitePassword" />
                <img
                  src={require("../../assets/icons/eye_modal.png")}
                  alt="eye"
                  className="passwordEye"
                  onClick={togglePass}
                />
              </div>
            </div>

            <div className="textArea">
              <div className="classLabel">Notes</div>
              <textarea className="inputStyle" name="notes" />
            </div>

            <div className="modalButton">
              <button className="modalButtons resetBtn" type="reset">
                Reset
              </button>
              <button className="modalButtons saveBtn" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
