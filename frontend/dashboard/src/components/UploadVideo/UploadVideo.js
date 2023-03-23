import "./UploadVideo.css";
import { useEffect, useRef, useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import MenuDropDown from "../DropDown/DropDown";
import useDetectClose from "../DropDown/UseDetectClose";
import { UploadVideoData } from "../../api/UploadVideoData";
const UploadVideo = () => {
  // const dropUploadDownRef = useRef();
  // const [uploadIdentify, setUploadIdentify] = useState("업로드 예정");
  // const [isOpen, setIsOpen] = useDetectClose(dropUploadDownRef, false);

  const dropDownRef = useRef();
  const [menuIdentify, setMenuIdentify] = useState("ORIGINAL");
  const menuList = {
    original: "ORIGINAL",
    vod: "VOD",
    live: "LIVE",
    life: "LIFE",
  };
  const [menuOpen, setMenuOpen] = useDetectClose(dropDownRef, false);
  const [uploadVideoList, setUploadVideoList] = useState([]); //디폴트 값
  // const uploadMenu = [
  //   {
  //     expectedUpload: "업로드 예정",
  //     doneUpload: "업로드 완료",
  //   },
  // ];
  useEffect(() => {
    const keysOfMenu = Object.keys(menuList);
    const key = keysOfMenu.find((key) => menuList[key] === menuIdentify);
    console.log(key);
    UploadVideoData(key).then((res) => setUploadVideoList(res.data));
  }, [menuIdentify]);

  return (
    <div className="expected-video">
      <div className="content-header">
        <div className="upload-icon">
          {/* <div ref={dropUploadDownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="upload-btn"
            >
              {uploadIdentify}
              <UilAngleDown />
            </button>
            {isOpen && (
              <ul className="dropdown-content dropdown-upload">
                {Object.values(uploadMenu[0]).map((value, index) => (
                  <MenuDropDown
                    key={index}
                    value={value}
                    setIsOpen={setIsOpen}
                    setMenuIdentify={setUploadIdentify}
                    isOpen={isOpen}
                    className="dropdown-li"
                  />
                ))}
              </ul>
            )}
          </div> */}
          <div className="upload-header-text">업로드 예정</div>
          <div className="more-view">더보기</div>
        </div>
        <div ref={dropDownRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="analyze-btn"
          >
            {menuIdentify}
            <UilAngleDown className="genre-dropdown-icon" />
          </button>
          {menuOpen && (
            <ul className="dropdown-content">
              {Object.values(menuList).map((value, index) => (
                <MenuDropDown
                  key={index}
                  value={value}
                  setIsOpen={setMenuOpen}
                  setMenuIdentify={setMenuIdentify}
                  isOpen={menuOpen}
                  className="dropdown-li"
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="content-video-container">
        {uploadVideoList.map((itm, idx) => {
          return (
            <div className="video" key={idx}>
              <div
                className={
                  "video-img" + (menuIdentify === "LIFE" ? " life_hidden" : "")
                }
              >
                <img src={itm.thumbnailUrl} alt="" />
              </div>
              <div
                className={
                  "video-info" +
                  (menuIdentify === "LIFE" ? " life-video-info" : "")
                }
              >
                <div className="title">{itm.title}</div>
                <div className="author-major">
                  <div className="major">{itm.major}</div>
                </div>
                <div className="date">
                  {" "}
                  {itm.expectedUploadTime} 업로드 예정
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadVideo;
