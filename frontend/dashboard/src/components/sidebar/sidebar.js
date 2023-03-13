import "./sidebar.css";
import React, { useState } from "react";
import { Data } from "../../assets/Data/sidebarData";
import Logo from "../../assets/img/logo.png";

const Sidebar = () => {
  const [btnActive, setBtnActive] = useState(0);

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <div class="sidebar">
      <div id="logoImg">
        <img src={Logo} alt="" />
      </div>
      <div className="menu">
        {Data.map((item, idx) => {
          return (
            <div>
              <button
                value={idx}
                className={"btn" + (idx == btnActive ? " active" : "")}
                onClick={toggleActive}
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
