import { useState } from "react";
import { MdOutlineModeComment } from "react-icons/md";
import MemoItem from "./MemoItem";
import "./Memo.css";

const Memo = () => {
  const [isOpenMemo, setIsOpenMemo] = useState(false);

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
            <div className="memo-item-header">new Memo</div>
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
