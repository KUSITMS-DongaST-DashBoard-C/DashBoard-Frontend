import "./Header.css";

import profileImg1 from "../../assets/img/profile1.svg";
import profileImg2 from "../../assets/img/profile2.svg";
import profileImg3 from "../../assets/img/profile3.svg";
import profileImg4 from "../../assets/img/profile4.svg";

import { Login } from "../../api/Login";
import { useState } from "react";
import { Logout } from "../../api/Logout";
import Memo from "./Memo";
// import { ActiveProfile } from "../../api/Active-profile";

const Header = () => {
  const [login, setLogin] = useState(false);
  const toggleLogin = () => {
    setLogin(true);
    Login();
  };
  const toggleLogout = () => {
    Logout();
    setLogin(false);
  };

  return (
    <div className="header-container">
      <div className="header-section">
        <img className="profile-img" src={profileImg1} alt="" />
        <div className="admin">관리자</div>
        <div
          className={"login" + (login ? "" : " hidden")}
          onClick={toggleLogout}
        >
          로그아웃
        </div>
        <div
          className={"login" + (login ? " hidden" : "")}
          onClick={toggleLogin}
        >
          로그인
        </div>
      </div>
      <div className="header-section">
        <div className="active-profile-container">
          <img className="active-profile" src={profileImg2} alt="" />
          <img className="active-profile" src={profileImg3} alt="" />
          <img className="active-profile" src={profileImg4} alt="" />
          <div className="more-active-profile active-profile">3</div>
        </div>
        <Memo />
      </div>
    </div>
  );
};

export default Header;
