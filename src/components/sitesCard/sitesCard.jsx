import React from "react";
import "./sitesCard.css";
import { useState } from "react";

// type siteProps = {
//   siteData: {
//     url: string;
//     siteName: string;
//     sector: string;
//     userName;
//     sitePass;
//     notes: string;
//   }[];
// };
const SitesCard = (props) => {
  const [modal, setModal] = useState("false");
  console.log("props.search", props);
  return (
    <div>
      <div className="sitesContainer" data-cy="suggestion-list">
        {props &&
          props.siteData
            .filter((ele) => {
              return props.search.toLowerCase() === ""
                ? ele
                : ele.siteName
                    .toLowerCase()
                    .includes(props.search.toLowerCase());
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
                            props.childToParent(true, i);
                          }}
                        />
                      ) : (
                        <img src={ele.icon} alt="" />
                      )}
                    </div>

                    <div>
                      <div className="copyTitle"> {ele.siteName}</div>
                      <div className="cardCopy" style={{ cursor: "pointer" }}>
                        <img
                          src={require("../../assets/icons/copy.png")}
                          alt="copy"
                          onClick={() => {
                            navigator.clipboard.writeText(ele.sitePassword);
                          }}
                        />
                        <div
                          className="copyPass"
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
    </div>
  );
};

export default SitesCard;
