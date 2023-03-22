import profileImg1 from "../../assets/img/profile1.svg";
import profileImg2 from "../../assets/img/profile2.svg";
import profileImg3 from "../../assets/img/profile3.svg";
import { RxDotsVertical } from "react-icons/rx";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { AiOutlineSend } from "react-icons/ai";
import "./MemoItem.css";
import { useState } from "react";

const CommentItem = ({ img, name, content }) => {
  return (
    <div className="comment-item">
      <img className="comment-profile-img" src={img} alt="" />
      <span className="comment-name">{name}</span>
      <span className="comment-content">{content}</span>
    </div>
  );
};

const MemoItem = () => {
  const [isCommentOpened, setIsCommentOpened] = useState(false);
  const [isCommentWriteOpened, setIsCommentWriteOpened] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");

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
              <RxDotsVertical size={20} />
            </button>
          </div>
        </div>
        <p className="memo-content">
          큐시즘 관리자님, 지역별 트래픽 이슈 건 금일 중으로 확인 부탁드립니다.
        </p>
        <div className="comment-header">
          <button
            onClick={() => {
              setIsCommentOpened(!isCommentOpened);
            }}
            className="comment-btn-header"
          >
            <img
              className="comment-header-profile-img"
              src={profileImg2}
              alt=""
            />
            <img
              className="comment-header-profile-img"
              src={profileImg3}
              alt=""
            />
            <span className="comment-num">댓글 2</span>
            {isCommentOpened ? (
              <BiChevronUp size={24} />
            ) : (
              <BiChevronDown size={24} />
            )}
          </button>
          <button
            onClick={() => {
              // setIsCommentOpened(true);
              setIsCommentWriteOpened(!isCommentWriteOpened);
            }}
          >
            <GoPencil
              size={20}
              color={isCommentWriteOpened ? "black" : "#868E96"}
            />
          </button>
        </div>
        {isCommentOpened && (
          <>
            <CommentItem
              img={profileImg2}
              name="관리자2"
              content="네 확인했습니다."
            />
            <CommentItem
              img={profileImg3}
              name="관리자3"
              content="네 확인했습니다. 혹시 오후 회의 때 참여 가능하신가요?"
            />
          </>
        )}
        {isCommentWriteOpened && (
          <div className="new-comment">
            <textarea
              type="text"
              placeholder="새 댓글을 작성하세요."
              className="new-comment-text"
              onChange={(event) => setNewCommentText(event.target.value)}
            />
            <button className="new-comment-send">
              <AiOutlineSend size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoItem;
