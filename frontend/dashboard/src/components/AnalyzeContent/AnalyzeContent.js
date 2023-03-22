import "./AnalyzeContent.css";
import { UilAngleDown, UilAngleUp } from "@iconscout/react-unicons";
import {
  AnalyzeVideoData,
  AnalyzedVideoData,
} from "../../api/AnalyzeVideoData";
// import Calendar from "../Calendar/Calendar";
import MenuDropDown from "../DropDown/DropDown";
import useDetectClose from "../DropDown/UseDetectClose";
import { useEffect, useRef, useState } from "react";

const AnalyzeContent = () => {
  const dropDownRef = useRef();
  const [menuIdentify, setMenuIdentify] = useState("전체");
  const menuList = ["전체", "ORIGINAL", "VOD", "LIVE", "LIFE"];
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [isMostView, setIsMostView] = useState(true);
  const ToggleViews = () => {
    setIsMostView((prev) => !prev);
  };
  return (
    <div className="analyze-videos">
      <div className="details-header">
        <div className="text-more">
          <div className="analyze-header-text">세부 콘텐츠 분석</div>
          <div className="more-view">더보기</div>
        </div>
        <div className="calendar-dropdown-menu">
          {/* <div className="calendar">
            <Calendar />
          </div> */}
          <div ref={dropDownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="analyze-btn"
            >
              {menuIdentify}
              <UilAngleDown className="genre-dropdown-icon" />
            </button>
            {isOpen && (
              <ul className="dropdown-content">
                {menuList.map((value, index) => (
                  <MenuDropDown
                    key={index}
                    value={value}
                    setIsOpen={setIsOpen}
                    setMenuIdentify={setMenuIdentify}
                    isOpen={isOpen}
                    className="dropdown-li"
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="filtering">
        <div className="whole-views">
          <div className="whole-views-text">총 조회수</div>
          <div className="whole-views-num">238,129</div>
        </div>

        {isMostView ? (
          <div className="filtering-btn" onClick={ToggleViews}>
            <UilAngleUp className="up-icon" />
            <span>조회수 높은 순</span>
          </div>
        ) : (
          <div className="filtering-btn" onClick={ToggleViews}>
            <UilAngleDown className="down-icon" />
            <span>조회수 낮은 순</span>
          </div>
        )}
      </div>
      <div className="analyze-video-container">
        {AnalyzeVideoData.map((itm, idx) => {
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

                <div className="date-views">
                  <div className="analyze-date">{itm.date}</div>
                  <div className="views">조회 수 {itm.views}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnalyzeContent;
