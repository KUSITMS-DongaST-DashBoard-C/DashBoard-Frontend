import profileImg1 from "../../assets/img/profile1.svg";
import profileImg2 from "../../assets/img/profile2.svg";
import profileImg3 from "../../assets/img/profile3.svg";
import { RxDotsVertical } from "react-icons/rx";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import "./MemoItem.css";

const MemoItem = () => {
  return (
    <div className="memo-item">
      <img className="memo-profile-img" src={profileImg1} alt="" />
      <div className="memo-item-content">
        <div className="memo-item-content-header">
          <div className="memo-info">
            <span className="memo-profile-name">관리자1</span>
            <span className="memo-date">03/12</span>
          </div>
          <div className="memo-setting">
            <button>
              <RxDotsVertical size={24} />
            </button>
          </div>
        </div>
        <p className="memo-content">
          큐시즘 관리자님, 지역별 트래픽 이슈 건 금일 중으로 확인 부탁드립니다.
        </p>
        <div className="coment-header">
          <img className="coment-profile-img" src={profileImg2} alt="" />
          <img className="coment-profile-img" src={profileImg3} alt="" />
          <span className="coment-num">댓글 2</span>
          <BiChevronDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default MemoItem;
