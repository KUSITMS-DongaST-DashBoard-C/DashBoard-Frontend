import "./Header.css";
import { Login } from "../../api/Login";
import { useState, useEffect } from "react";
import { Logout } from "../../api/Logout";
import Memo from "./Memo";
import myProfileImg from "../../assets/img/profile4.svg";
import { ActiveProfile } from "../../api/ActiveProfile";

const Header = () => {
  const [login, setLogin] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const toggleLogin = () => {
    setLogin(true);
  };
  const [accessToken, setAccessToken] = useState([]);
  const [myProfile, setMyProfile] = useState([]);
  useEffect(() => {
    const result = async () => {
      await Login().then((res) => setAccessToken(res));
      const response = await ActiveProfile(accessToken);
      setActiveUsers(response.data.activeUser);
      setMyProfile(response.data);
      console.log(response.data.email);
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
        <img
          className={login ? "profile-img" : "profile-img-hidden"}
          src={myProfile ? myProfile.imgUrl : myProfileImg}
          alt=""
        />
        <div className={login ? "admin" : "admin-hidden"}>
          {myProfile.email}
        </div>
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
              if (idx < 3) {
                return (
                  <div className="active-name-img" key={idx}>
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
              (login && activeUsers?.length - 3 > 0
                ? ""
                : " more-active-hidden")
            }
          >
            {activeUsers?.length - 3}
          </div>
        </div>
        <div className={login ? "" : "admin-hidden"}>
          <Memo
            accessToken={accessToken}
            myProfileImg={myProfile.imgUrl}
            myProfileName={myProfile.email}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
