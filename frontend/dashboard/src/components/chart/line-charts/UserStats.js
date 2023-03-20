import "./UserStats.css";

const UserStatsContainer = ({ title, variation, value }) => {
  return (
    <div className="userstats-container">
      <div className="userstats-container-header">
        <span className="userstats-container-title">{title}</span>
        <span className="userstats-container-variation">{variation}</span>
      </div>
      <span className="userstats-container-value">{value}</span>
    </div>
  );
};

const UserStatsContainers = () => {
  return (
    <>
      <UserStatsContainer
        title="방문자 수"
        variation="+5%"
        value="19"
      ></UserStatsContainer>
      <UserStatsContainer
        title="페이지 뷰 수"
        variation="+8%"
        value="123,456"
      ></UserStatsContainer>
      <UserStatsContainer
        title="신규 가입자 수"
        variation="+3%"
        value="202"
      ></UserStatsContainer>
      <UserStatsContainer
        title="회원 이탈율"
        variation="-12%"
        value="20%"
      ></UserStatsContainer>
    </>
  );
};

const UserStats = () => {
  return (
    <>
      <div className="userstats">
        <span className="standard">03-16 기준</span>
        <UserStatsContainers />
      </div>
    </>
  );
};

export default UserStats;
