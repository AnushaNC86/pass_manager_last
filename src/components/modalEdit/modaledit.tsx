import { useState } from "react";
import "../modal/modal.css";
import "./modalEdit.css"

const ModalEdit = (props: any) => {
  const [value, setValue] = useState({
    url: "",
    siteName: "",
    folder: "",
    userName: "",
    sitePassword: "",
    notes: "",
  });
  const [edit, setEdit] = useState(false);
  const [pass, setPass] = useState(false);

  const togglePass = () => {
    setPass(!pass)
  }


  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "[]");
  const editData = JSON.parse(localStorage.getItem(currentUser) || "[]");

  const modalHandler = (event: any, i: number) => {
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
    editData[i] = modalData;
    localStorage.setItem(currentUser, JSON.stringify(editData));
    window.location.reload();
  };

  const editHandler = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="modalItem">

        <div className="dashBoardForm">
          <form
            action=""
            className="modalForm"
            onSubmit={(e) => modalHandler(e, props.index)}
          >
            <div className="modalBtn">
              <div className="addSiteModal"><div className="addSiteHead">{!edit ? "Site Details" : "Edit"}</div></div>
              <div className="modalButton">

                {props.edit1 ? (
                  <div>
                    {!edit ? (
                      <button type="button" onClick={() => setEdit(true)} className="editBtn">
                        Edit
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}


              </div></div>

            <div className="url">
              <div className="classLabel">URL</div>
              <input
                type="text"
                className="inputStyle"
                name="url"
                onChange={editHandler}
                value={edit ? value.url : editData[props.index].url}
              />
            </div>

            <div className="firstLine">
              <div className="siteName">
                <div className="classLabel">Site Name</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="siteName"
                  onChange={editHandler}
                  value={edit ? value.siteName : editData[props.index].siteName}
                />
              </div>

              <div className="selectFolder">
                <div className="classLabel">select/Folder</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="folder"
                  onChange={editHandler}
                  value={edit ? value.folder : editData[props.index].folder}
                />
              </div>
            </div>

            <div className="firstLine">
              <div className="userName">
                <div className="classLabel">user Name</div>
                <input
                  type="text"
                  className="inputStyle"
                  name="userName"
                  onChange={editHandler}
                  value={edit ? value.userName : editData[props.index].userName}
                />
              </div>

              <div className="sitePassword">
                <div className="classLabel">site password</div>
                <input
                  type={pass ? "text" : "password"}
                  className="inputStyle"
                  name="sitePassword"
                  onChange={editHandler}
                  value={
                    edit
                      ? value.sitePassword
                      : editData[props.index].sitePassword
                  }
                />
                <img
                  src={require("../../assets/icons/eye_modal.png")}
                  alt="eye"
                  className="passwordEye"
                  onClick={togglePass}
                />
              </div>
            </div>

            <div className="textArea">
              <div className="classLabel">notes</div>
              <textarea
                className="inputStyle"
                name="notes"
                onChange={editHandler}
                value={edit ? value.notes : editData[props.index].notes}
              />
            </div>


            <div className="modalButton">

              {edit ? (
                <button type="submit" className="btnUpdate">Update</button>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
