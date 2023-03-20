import { UilCommentAlt } from "@iconscout/react-unicons";
import { useState } from "react";
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
          <UilCommentAlt />
        </button>
        {/* <div id="circle"></div> */}
        {isOpenMemo && (
          <div className="memo-container">
            <div className="memo-item">AA</div>
            <div className="memo-item">AA</div>
            <div className="memo-item">AA</div>
            <div className="memo-item">AA</div>
            <div className="memo-item">AA</div>
            <div className="memo-item">AA</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Memo;
