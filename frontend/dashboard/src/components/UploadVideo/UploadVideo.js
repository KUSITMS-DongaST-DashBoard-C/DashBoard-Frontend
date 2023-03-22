import "./UploadVideo.css";
import { useEffect, useRef, useState } from "react";
import {
  UilAngleDown,
  UilAngleUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import {
  AnalyzeVideoData,
  AnalyzedVideoData,
} from "../../api/AnalyzeVideoData";
import {
  UploadedVideoData,
  UploadingVideoData,
} from "../../api/UploadVideoData";
import MenuDropDown from "../DropDown/DropDown";
import useDetectClose from "../DropDown/UseDetectClose";

const UploadVideo = () => {
  const dropUploadDownRef = useRef();
  const [uploadIdentify, setUploadIdentify] = useState("업로드 예정");
  const uploadMenu = ["업로드 예정", "업로드 완료"]; // ['010', '011', '017', ...]
  const [isOpen, setIsOpen] = useDetectClose(dropUploadDownRef, false);

  const dropDownRef = useRef();
  const [menuIdentify, setMenuIdentify] = useState("전체");
  const menuList = ["전체", "ORIGINAL", "VOD", "LIVE", "LIFE"];
  const [menuOpen, setMenuOpen] = useDetectClose(dropDownRef, false);

  return (
    <div className="expected-video">
      <div className="content-header">
        <div className="upload-icon">
          <div ref={dropUploadDownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="upload-btn"
            >
              {uploadIdentify}
              <UilAngleDown />
            </button>
            {isOpen && (
              <ul className="dropdown-content">
                {uploadMenu.map((value, index) => (
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
          </div>
          <div className="more-view">더보기</div>
        </div>
        <div ref={dropDownRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="analyze-btn"
          >
            {menuIdentify}
            <UilAngleDown />
          </button>
          {menuOpen && (
            <ul className="dropdown-content">
              {menuList.map((value, index) => (
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
        {UploadedVideoData.map((itm, idx) => {
          return (
            <div className="video" key={idx}>
              <div className="video-img">
                <img src={itm.img} alt="" />
              </div>
              <div className="video-info">
                <div className="title">{itm.title}</div>
                <div className="author-major">
                  <div className="major">{itm.major}</div>
                </div>
                <div className="date">{itm.date} 업로드 예정</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UploadVideo;
