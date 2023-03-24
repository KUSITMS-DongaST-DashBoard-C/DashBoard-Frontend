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

  const [totalView, setTotalView] = useState("");
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
    AnalyzeVideoData(key, filterkey, stDate, edDate).then((res) => {
      let msg;
      if (menuIdentify === "LIFE") {
        setAnalyzeVideoList(res.data.getFilteredLifeResList);
        setTotalView(res.data.totalViewNum);
      } else if (menuIdentify === "LIVE") {
        setAnalyzeVideoList(res.data.getFilteredLiveResList);
        setTotalView(res.data.totalViewNum);
      } else {
        setAnalyzeVideoList(res.data);
        msg = res.message;
        setTotalView(msg.substr(5));
      }
    });
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
          <div className="whole-views-num">{totalView}</div>
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
        {analyzeVideoList?.map((itm, idx) => {
          if (idx >= 3) {
            return;
          }
          var date = itm.uploadDate;
          date = date.substr(0, 10);
          var title = "";
          var videoInfo = "";
          var videoHitsInfo = "";

          if (menuIdentify === "ORIGINAL") {
            title = itm.seriesName + "_" + itm.episodeNum;
            videoInfo = itm.uploadDate.substr(0, 10) + " | " + itm.major;
            videoHitsInfo =
              "댓글: " +
              itm.commentNum +
              " / 좋아요 수: " +
              itm.likeNum +
              " / 리뷰: " +
              itm.reviewNum;
          } else if (menuIdentify === "VOD") {
            title = itm.title;
            videoInfo = itm.uploadDate.substr(0, 10) + " | " + itm.major;
            videoHitsInfo = "vod id: " + itm.vodId;
          } else if (menuIdentify === "LIVE") {
            if (itm.title?.length > 23) {
              title = itm.title.substr(0, 22) + "...";
            } else {
              title = itm.title;
            }
            videoInfo = itm.uploadDate.substr(0, 10);
            videoHitsInfo = itm.applicantNum + " / " + itm.applicableNum;
          } else {
            if (itm.title?.length > 40) {
              title = itm.title.substr(0, 39) + "...";
            } else {
              title = itm.title;
            }
            videoInfo = itm.uploadDate + "_" + itm.category;
            if (itm.commentNum === null && itm.likeNum === null) {
              videoHitsInfo = "댓글: 0 / " + "좋아요 수: 0";
            } else if (itm.commentNum === null) {
              videoHitsInfo = "댓글: 0 / " + "좋아요 수: " + itm.likeNum;
            } else {
              videoHitsInfo = "댓글: " + itm.commentNum + " / " + itm.likeNum;
            }
          }

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
                <div className="title">{title}</div>
                <div className="author-major">
                  <div className="video-under-title">{videoInfo}</div>
                </div>

                <div className="date-views">
                  <div className="analyze-date">{videoHitsInfo}</div>
                  <div className="views">
                    조회 수 {itm.viewNum ? itm.viewNum : "0"}
                  </div>
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
