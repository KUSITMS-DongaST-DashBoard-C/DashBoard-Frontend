import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserStats.css";

const UserStatsContainer = ({ title, changeRate, value }) => {
  return (
    <div className="userstats-container">
      <div className="userstats-container-header">
        <span className="userstats-container-title">{title}</span>
        <span
          className={
            changeRate >= 0
              ? "userstats-container-variation change-positive"
              : "userstats-container-variation change-negative"
          }
        >
          {changeRate > 0 && "+"}
          {changeRate.toLocaleString()}%
        </span>
      </div>
      <span className="userstats-container-value">
        {value.toLocaleString()}
      </span>
    </div>
  );
};

const UserStats = () => {
  const [visitorData, setVisitorData] = useState({});
  const [pageViewData, setPageViewData] = useState({});
  const [newMemberData, setNewMemberData] = useState({});
  const [bounceRateData, setBounceRateData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://43.201.80.154:80/chart/daily")
        .then((res) => res.data);

      setVisitorData(response.data.visitorData);
      setPageViewData(response.data.pageViewData);
      setNewMemberData(response.data.newMemberData);
      setBounceRateData(response.data.bounceRateData);
      setIsLoading(false);
      console.log(visitorData.visitorNum);
    };
    getData();
  }, []);

  let today = new Date();
  let month = ("0" + (1 + today.getMonth())).slice(-2); // 월
  let date = ("0" + today.getDate()).slice(-2); // 날짜

  return (
    <>
      <div className="userstats">
        <span className="standard">
          {month}-{date} 기준
        </span>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
            <UserStatsContainer
              title="방문자 수"
              changeRate={visitorData.changRate}
              value={visitorData.visitorNum}
            ></UserStatsContainer>
            <UserStatsContainer
              title="페이지 뷰 수"
              changeRate={pageViewData.changRate}
              value={pageViewData.pageViewNum}
            ></UserStatsContainer>
            <UserStatsContainer
              title="신규 가입자 수"
              changeRate={newMemberData.changRate}
              value={newMemberData.newMemberNum}
            ></UserStatsContainer>
            <UserStatsContainer
              title="회원 이탈율"
              changeRate={bounceRateData.changRate}
              value={bounceRateData.bounceRate + "%"}
            ></UserStatsContainer>
          </>
        )}
      </div>
    </>
  );
};

export default UserStats;
