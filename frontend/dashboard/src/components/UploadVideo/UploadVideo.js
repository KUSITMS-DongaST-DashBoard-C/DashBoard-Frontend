import "./UploadVideo.css";
import VideoImg from "../../assets/img/video.svg";
import {
  UilAngleDown,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
const UploadVideo = () => {
  const UploadVideoData = [
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      date: "03.28",
    },
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      date: "03.28",
    },
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      date: "03.28",
    },
  ];
  const analyzeVideoData = [
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      views: "281,432",
    },
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      views: "281,432",
    },
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      views: "281,432",
    },
  ];
  return (
    <div className="upload-video-container">
      <div className="expected-video">
        <div className="content-header">
          <div className="upload-icon">
            <div className="upload-selection">업로드 예정</div>
            <UilAngleDown />
          </div>

          <div className="more-view">더보기</div>
        </div>
        <div className="video-container">
          {UploadVideoData.map((itm, idx) => {
            return (
              <div className="video">
                <div className="video-img">
                  <img src={itm.img} alt="" />
                </div>
                <div className="video-info">
                  <div className="title">{itm.title}</div>
                  <div className="author-major">
                    <div className="author">{itm.author}</div>
                    <div className="major">{itm.major}</div>
                  </div>
                  <div className="date">{itm.date} 업로드 예정</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="analyze-video">
        <div className="details-header">
          <div className="upload-icon">
            <div className="upload-selection">세부 콘텐츠 분석</div>
          </div>
          <div className="more-view">더보기</div>
        </div>
        <div className="filtering">
          <div className="whole-views">
            <div className="whole-views-text">총 조회수</div>
            <div className="whole-views-num">238,129</div>
          </div>
          <div className="filtering-btn">
            조회수 <UilArrowUp className="up-icon" />
          </div>
        </div>
        <div className="video-container">
          {analyzeVideoData.map((itm, idx) => {
            return (
              <div className="video">
                <div className="video-img">
                  <img src={itm.img} alt="" />
                </div>
                <div className="video-info">
                  <div className="title">{itm.title}</div>
                  <div className="author-major">
                    <div className="author">{itm.author}</div>
                    <div className="major">{itm.major}</div>
                  </div>
                  <div className="views">조회 수 {itm.views}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
