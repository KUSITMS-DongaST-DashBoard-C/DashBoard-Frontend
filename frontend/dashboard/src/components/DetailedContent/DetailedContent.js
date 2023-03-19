import "./DetailedContent.css";
import VideoImg from "../../assets/img/video.svg";

const DetailedContent = () => {
  const data = [
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      views: "281,206",
    },
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      views: "281,206",
    },
    {
      img: VideoImg,
      title: "위산억제제의 특징과 가스터의 효과",
      author: "인제대학교 최정민 교수",
      major: "내과",
      views: "281,206",
    },
  ];
  return (
    <div className="detail-video-container">
      <div className="analyze-video">
        <div className="content-header">
          <div className="upload-icon">
            <div className="upload-selection">세부 콘텐츠 분석</div>
          </div>
          <div className="more-view">더보기</div>
        </div>
        <div className="video-container">
          {data.map((itm, idx) => {
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

export default DetailedContent;
