import "./Header.css";
import { Login } from "../../api/Login";
import { useState, useEffect } from "react";
import { Logout } from "../../api/Logout";
import Memo from "./Memo";
import myProfileImg from "../../assets/img/profile4.svg";
const Header = () => {
  const [login, setLogin] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const toggleLogin = () => {
    setLogin(true);
  };

  useEffect(() => {
    const result = async () => {
      const response = await Login();
      console.log(response);
      setActiveUsers(response.data.activeUser);
      console.log(activeUsers);
    };
    if (login) {
      console.log(login);
      result();
    }
  }, [login]);

  const toggleLogout = () => {
    Logout();
    setLogin(false);
  };

  return (
    <div className="header-container">
      <div className="header-section">
        <img className="profile-img" src={myProfileImg} alt="" />
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
          {login &&
            activeUsers?.map((itm, idx) => {
              if (idx <= 3) {
                return (
                  <div className="active-name-img">
                    <img
                      src={itm.imgUrl}
                      className="active-profile-img"
                      alt=""
                    />
                    <span className="profile-name">{itm.name}</span>
                  </div>
                );
              }
            })}
          <div
            className={
              "more-active-profile" +
              (activeUsers?.length - 3 > 0 ? "" : " more-active-hidden")
            }
          >
            {activeUsers?.length - 3}
          </div>
        </div>
        <Memo />
      </div>
    </div>
  );
};

export default Header;
