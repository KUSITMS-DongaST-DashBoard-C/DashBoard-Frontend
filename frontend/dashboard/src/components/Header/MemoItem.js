import profileImg1 from "../../assets/img/profile1.svg";
import { RxDotsVertical } from "react-icons/rx";
import "./MemoItem.css";

const MemoItem = () => {
  return (
    <div className="memo-item">
      <img className="memo-profile-img" src={profileImg1} alt="" />
      <span className="memo-profile-name">관리자1</span>
      <span className="memo-date">03/12</span>
      <RxDotsVertical />
    </div>
  );
};

export default MemoItem;
