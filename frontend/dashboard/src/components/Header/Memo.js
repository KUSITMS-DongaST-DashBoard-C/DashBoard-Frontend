import { useEffect, useState } from "react";
import { MdOutlineModeComment } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import MemoItem from "./MemoItem";
import "./Memo.css";

const Memo = () => {
  const [isOpenMemo, setIsOpenMemo] = useState(false);
  const [isOpenNewMemo, setIsOpenNewMemo] = useState(false);
  const [newMemoText, setNewMemoText] = useState("");

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
        {/* <div id="circle"></div> */}
        {isOpenMemo && (
          <div className="memo-container">
            <div className={"memo-item-header"}>
              <button
                onClick={() => {
                  setIsOpenNewMemo(!isOpenNewMemo);
                }}
              >
                <BsPlusCircleFill
                  size={24}
                  style={{
                    color: isOpenNewMemo ? "black" : "rgba(134, 142, 150, 1)",
                  }}
                />
              </button>
            </div>
            {isOpenNewMemo && (
              <div className="new-memo">
                <span className="new-memo-name">관리자1</span>
                <textarea
                  type="text"
                  placeholder="새 메모를 작성하세요."
                  className="new-memo-text"
                  onChange={(event) => setNewMemoText(event.target.value)}
                />
                <button className="new-memo-send">
                  <AiOutlineSend size={20} />
                </button>
              </div>
            )}
            <div className="memo-items">
              <MemoItem />
              <MemoItem />
              <MemoItem />
              <MemoItem />
              <MemoItem />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Memo;
