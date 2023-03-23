import "./AnalyzeContent.css";
import Calendar from "../Calendar/Calendar";
import MenuDropDown from "../DropDown/DropDown";
import useDetectClose from "../DropDown/UseDetectClose";
import { useEffect, useRef, useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";
import filteringIcon from "../../assets/img/filtering-icon.svg";
import { AnalyzeVideoData } from "../../api/AnalyzeVideoData";
import { original, vod, life, live } from "../../assets/Data/FilterData";
const AnalyzeContent = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const dropDownRef = useRef();
  const [menuIdentify, setMenuIdentify] = useState("ORIGINAL");
  const menuList = {
    original: "ORIGINAL",
    vod: "VOD",
    live: "LIVE",
    life: "LIFE",
  };
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const [filterList, setFilterList] = useState(original);
  const dropDownFilterRef = useRef();
  const [filterIdentify, setFilterIdentify] = useState("정렬");
  const [isFilterOpen, setIsFilterOpen] = useDetectClose(dropDownFilterRef);
  const [analyzeVideoList, setAnalyzeVideoList] = useState([]);

  useEffect(() => {
    if (menuIdentify === "ORIGINAL") {
      setFilterList(original);
    } else if (menuIdentify === "VOD") {
      setFilterList(vod);
    } else if (menuIdentify === "LIFE") {
      setFilterList(life);
    } else {
      setFilterList(live);
    }
  }, [menuIdentify]);

  useEffect(() => {
    let stDate, edDate;
    let keysOfFilterMenu, filterkey;
    const keysOfMenu = Object.keys(menuList);
    const key = keysOfMenu.find((key) => menuList[key] === menuIdentify);

    const DateTransform = (date) => {
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const dateStr = `${year}-${month}-${day}`;
      return dateStr;
    };
    if (filterIdentify === "정렬") {
      filterkey = "view/desc";
    } else {
      keysOfFilterMenu = Object.keys(filterList);
      filterkey = keysOfFilterMenu.find(
        (key) => filterList[key] === filterIdentify
      );
    }
    if (startDate && endDate) {
      stDate = DateTransform(startDate);
      edDate = DateTransform(endDate);
    } else {
      stDate = "2023-03-10";
      edDate = "2023-04-10";
    }
    AnalyzeVideoData(key, filterkey, stDate, edDate).then((res) =>
      setAnalyzeVideoList(res.data)
    );
  }, [filterIdentify, startDate, endDate, menuIdentify]);

  return (
    <div className="analyze-videos">
      <div className="details-header">
        <div className="text-more">
          <div className="analyze-header-text">세부 콘텐츠 분석</div>
          <div className="more-view">더보기</div>
        </div>
        <div className="calendar-dropdown-menu">
          <div className="calendar">
            <Calendar
              dateRange={dateRange}
              setDateRange={setDateRange}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
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
                {Object.values(menuList).map((value, index) => (
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
        <div ref={dropDownFilterRef}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            type="button"
            className="filtering-btn"
          >
            <img className="filtering-icon" src={filteringIcon} alt="" />
            {filterIdentify}
          </button>
          {isFilterOpen && (
            <ul className="dropdown-content dropdown-upload">
              {Object.values(filterList).map((value, index) => (
                <MenuDropDown
                  key={index}
                  value={value}
                  setIsOpen={setIsFilterOpen}
                  setMenuIdentify={setFilterIdentify}
                  isOpen={isFilterOpen}
                  className="dropdown-li"
                />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="analyze-video-container">
        {analyzeVideoList.map((itm, idx) => {
          var date = itm.uploadDate;
          date = date.substr(0, 10);
          return (
            <div className="video" key={idx}>
              <div className="video-img">
                <img src={itm.thumbnailUrl} alt="" />
              </div>
              <div className="video-info">
                <div className="title">{itm.seriesName}</div>
                <div className="author-major">
                  <div className="major">{itm.major}</div>
                </div>

                <div className="date-views">
                  <div className="analyze-date">{date}</div>
                  <div className="views">조회 수 {itm.hits}</div>
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
