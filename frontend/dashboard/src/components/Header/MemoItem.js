import profileImg1 from "../../assets/img/profile1.svg";
import profileImg2 from "../../assets/img/profile2.svg";
import profileImg3 from "../../assets/img/profile3.svg";
import profileImg4 from "../../assets/img/profile4.svg";
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

const MemoItem = ({ imageUrl, name, createdAt, content, comments }) => {
  const [isCommentOpened, setIsCommentOpened] = useState(false);
  const [isCommentWriteOpened, setIsCommentWriteOpened] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");
  const commentsCnt = comments.length;

  const commentData = comments.map(function (el) {
    let obj = {};
    obj["commentId"] = el.commentsId;
    obj["content"] = el.content;
    obj["adminId"] = el.adminId;
    obj["createdAt"] = el.createdAt;
    obj["adminName"] = el.adminName;
    obj["adminImageUrl"] = el.adminImageUrl;
    return obj;
  });

  return (
    <div className="memo-item">
      <div className="memo-profile-img-box">
        <img className="memo-profile-img" src={imageUrl} alt="" />
      </div>
      <div className="memo-item-content">
        <div className="memo-item-content-header">
          <div className="memo-info">
            <span className="memo-profile-name">{name}</span>
            <span className="memo-date">{createdAt}</span>
          </div>
          <div className="memo-setting">
            <button>
              <RxDotsVertical size={20} />
            </button>
          </div>
        </div>
        <p className="memo-content">{content}</p>
        <div className="comment-header">
          <button
            onClick={() => {
              setIsCommentOpened(!isCommentOpened);
            }}
            className="comment-btn-header"
          >
            <>
              {commentData.map((memo) => {
                return (
                  <>
                    <img
                      className="comment-header-profile-img"
                      src={memo.adminImageUrl}
                      alt=""
                    />
                  </>
                );
              })}
            </>
            {commentsCnt > 0 ? (
              <>
                <span className="comment-num">댓글 {commentsCnt}</span>
                {isCommentOpened ? (
                  <BiChevronUp size={24} />
                ) : (
                  <BiChevronDown size={24} />
                )}
              </>
            ) : (
              <>
                <span className="comment-num">댓글 {commentsCnt}</span>
              </>
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
            {commentData.map((memo) => (
              <>
                <CommentItem
                  img={memo.adminImageUrl}
                  name={memo.adminName}
                  content={memo.content}
                />
              </>
            ))}
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
