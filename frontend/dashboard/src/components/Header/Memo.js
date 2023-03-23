import { useEffect, useState } from "react";
import { MdOutlineModeComment } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import MemoItem from "./MemoItem";
import axios from "axios";
import "./Memo.css";

const Memo = ({ accessToken }) => {
  const [isOpenMemo, setIsOpenMemo] = useState(false);
  const [isOpenNewMemo, setIsOpenNewMemo] = useState(false);
  const [newMemoText, setNewMemoText] = useState("");

  const [memoDataList, setMemoDataList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://43.201.80.154/memo/?page=0&size=10")
        .then((res) => res.data);

      setIsLoading(false);
      setMemoDataList(response.data.data);
    };
    getData();
  }, []);

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

  const postNewMemo = () => {
    const postMemo = async () => {
      const response = await axios
        .post(
          `http://43.201.80.154:80/memo?content=${newMemoText}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log("accessToken", accessToken);
          console.log("실패");
          console.log(error);
          console.log(newMemoText);
        });
      console.log("postNewMemo", response);
      // return response;
    };
    postMemo();
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
        {/* <div id="circle"></div> */}
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
                  <span className="new-memo-name">관리자1</span>
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
                    imageUrl={memo.imageUrl}
                    name={memo.adminName}
                    createdAt={memo.createdAt}
                    content={memo.content}
                    comments={memo.comments}
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
