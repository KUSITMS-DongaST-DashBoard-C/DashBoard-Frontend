import { useEffect, useState } from "react";
import MemoItem from "./MemoItem";
import { getMemoData, postMemo } from "../../api/memo";

import { MdOutlineModeComment } from "react-icons/md";
import { AiOutlineSend } from "react-icons/ai";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";

import "./Memo.css";

const Memo = ({ accessToken }) => {
  const [isOpenMemo, setIsOpenMemo] = useState(false);
  const [isOpenNewMemo, setIsOpenNewMemo] = useState(false);
  const [newMemoText, setNewMemoText] = useState("");

  const [memoDataList, setMemoDataList] = useState([]);
  const [, setIsLoading] = useState(true);

  useEffect(() => {
    getMemo();
  }, [memoDataList]);

  const memoData = memoDataList.map(function (el) {
    let obj = {};
    obj["memoId"] = el.memoId;
    obj["content"] = el.content;
    obj["createdAt"] = el.createdAt;
    obj["updatedAt"] = el.updatedAt;
    obj["adminName"] = el.adminName;
    obj["imageUrl"] = el.imageUrl;
    obj["adminEmail"] = el.adminEmail;
    obj["comments"] = el.comments;
    return obj;
  });

  const getMemo = async () => {
    const response = getMemoData();
    setIsLoading(false);
    setMemoDataList(response.data.data);
  };

  const postNewMemo = () => {
    postMemo({ newMemoText, accessToken });
    setIsOpenNewMemo(false);
    setNewMemoText("");
    getMemo();
  };

  return (
    <>
      <div className="memo">
        <button
          onClick={() => {
            setIsOpenMemo(!isOpenMemo);
          }}
          className={
            isOpenMemo
              ? "memo-button memo-button-opened"
              : "memo-button memo-button-closed"
          }
        >
          <MdOutlineModeComment size={20} />
        </button>
        {isOpenMemo && (
          <div className="memo-container">
            <div className={"memo-item-header"}>
              <div className="memo-item-button">
                <button
                  onClick={() => {
                    setIsOpenNewMemo(!isOpenNewMemo);
                  }}
                >
                  {isOpenNewMemo ? (
                    <>
                      <HiMinusCircle
                        size={28}
                        style={{
                          color: "black",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <HiPlusCircle
                        size={28}
                        style={{
                          color: "rgba(134, 142, 150, 1)",
                        }}
                      />
                    </>
                  )}
                </button>
              </div>
              {isOpenNewMemo && (
                <div className="new-memo">
                  <div className="new-memo-text-container">
                    <textarea
                      type="text"
                      placeholder="새 메모를 작성하세요."
                      className="new-memo-text"
                      onChange={(event) => setNewMemoText(event.target.value)}
                    />
                    <button className="new-memo-send" onClick={postNewMemo}>
                      <AiOutlineSend size={20} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="memo-items">
              {memoData.map((memo) => (
                <>
                  <MemoItem
                    accessToken={accessToken}
                    memoId={memo.memoId}
                    imageUrl={memo.imageUrl}
                    name={memo.adminName}
                    createdAt={memo.createdAt}
                    content={memo.content}
                    comments={memo.comments}
                    getData={getMemo}
                  />
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Memo;
