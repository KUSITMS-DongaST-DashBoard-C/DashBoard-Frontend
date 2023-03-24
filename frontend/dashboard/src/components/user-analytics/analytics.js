import "./analytics.css";
import styled from "styled-components";

const StyledNum = styled.div`
  height: 23px;
  padding: 10px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 500;
  color: white;
  background: #fb6358;
  margin-right: 10px;
`;

const StyledDiv = styled.div`
  height: 28px;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  margin: 8px;
`;

function UserNum({ temp }) {
  return <div className="user-num">{temp}</div>;
}

const Analytics = () => {
  return (
    <div className="user-analytics-container">
      <div className="bounce-rate">
        <StyledDiv>
          <div className="">회원 이탈률</div>
        </StyledDiv>
        <StyledNum>
          <UserNum temp={"4%"} />
        </StyledNum>
      </div>
      <div className="number-of-views">
        <StyledDiv>
          <div>전체 페이지 뷰수</div>
        </StyledDiv>
        <StyledNum>
          <UserNum temp={"123,456"} />
        </StyledNum>
      </div>
    </div>
  );
};

export default Analytics;
