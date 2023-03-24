import { useState } from "react";
import CommentItem from "./memo-components/CommentItem";
import { deleteMemoData, postComment, updateMemoData } from "../../api/memo";

import { RxDotsVertical } from "react-icons/rx";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { AiOutlineSend } from "react-icons/ai";
import "./MemoItem.css";

const MemoInfo = ({ name, displayCreatedAt }) => {
  return (
    <div className="memo-info">
      <span className="memo-profile-name">{name}</span>
      <span className="memo-date">{displayCreatedAt}</span>
    </div>
  );
};

const MemoItemHeader = ({
  memoId,
  name,
  displayCreatedAt,
  accessToken,
  getData,
  isUpdateOpened,
  setIsUpdateOpened,
}) => {
  const [isMemoSettingOpened, setIsMemoSettingOpened] = useState(false);

  const deleteMemo = () => {
    deleteMemoData({ memoId, accessToken });
    getData();
    setIsMemoSettingOpened(false);
  };

  return (
    <div className="memo-item-content-header">
      <MemoInfo name={name} displayCreatedAt={displayCreatedAt} />
      <div className="memo-setting">
        {isMemoSettingOpened && (
          <div className="memo-setting-button">
            <button
              onClick={() => {
                setIsUpdateOpened(!isUpdateOpened);
                setIsMemoSettingOpened(!isMemoSettingOpened);
              }}
              className="memo-setting-btn-menu"
            >
              수정
            </button>
            <button onClick={deleteMemo} className="memo-setting-btn-menu">
              삭제
            </button>
          </div>
        )}
        <button
          onClick={() => {
            setIsMemoSettingOpened(!isMemoSettingOpened);
          }}
        >
          <RxDotsVertical
            size={20}
            style={{ backgroundColor: "transparent" }}
          />
        </button>
      </div>
    </div>
  );
};

const MemoItem = ({
  imageUrl,
  name,
  createdAt,
  content,
  comments,
  memoId,
  accessToken,
  getData,
}) => {
  const [isUpdateOpened, setIsUpdateOpened] = useState(false);
  const [isCommentOpened, setIsCommentOpened] = useState(false);
  const [isCommentWriteOpened, setIsCommentWriteOpened] = useState(false);
  const [updateMemoText, setUpdateMemoText] = useState(content);
  const [newCommentText, setNewCommentText] = useState("");
  const commentsCnt = comments.length;

  const commentData = comments.map(function (el) {
    let obj = {};
    obj["commentId"] = el.commentsId;
    obj["content"] = el.content;
    obj["adminId"] = el.adminId;
    obj["createcAt"] = el.createdAt;
    obj["adminName"] = el.adminName;
    obj["adminImageUrl"] = el.adminImageUrl;
    return obj;
  });

  const createdAtMonth = createdAt.toString().slice(5, 7);
  const createdAtDate = createdAt.toString().slice(8, 10);
  const createdAtTime = createdAt.toString().slice(11, 16);
  const displayCreatedAt =
    createdAtMonth + "/" + createdAtDate + " " + createdAtTime;

  const postNewComment = () => {
    postComment({ newCommentText, memoId, accessToken });
    setIsCommentWriteOpened(false);
    setNewCommentText("");
    getData();
  };

  const updateMemo = () => {
    updateMemoData({ updateMemoText, memoId, accessToken });
    setIsUpdateOpened(false);
    getData();
  };

  return (
    <div className="memo-item">
      <div className="memo-profile-img-box">
        <img className="memo-profile-img" src={imageUrl} alt="" />
      </div>
      <div className="memo-item-content">
        <MemoItemHeader
          accessToken={accessToken}
          memoId={memoId}
          name={name}
          displayCreatedAt={displayCreatedAt}
          getData={getData}
          isUpdateOpened={isUpdateOpened}
          setIsUpdateOpened={setIsUpdateOpened}
        />
        {isUpdateOpened ? (
          <div className="update-memo-container">
            <textarea
              type="text"
              value={updateMemoText}
              className="update-memo-text"
              onChange={(event) => setUpdateMemoText(event.target.value)}
            />
            <div className="update-memo-btn-div">
              <button onClick={updateMemo} className="update-memo-btn">
                완료
              </button>
            </div>
          </div>
        ) : (
          <p className="memo-content">{content}</p>
        )}
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
            <button onClick={postNewComment} className="new-comment-send">
              <AiOutlineSend size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoItem;
