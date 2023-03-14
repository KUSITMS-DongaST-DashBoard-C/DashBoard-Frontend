import Sidebar from "../components/sidebar/sidebar";
import AdminpProfile from "../components/adminprofile/Adminprofile";
import LineChart from "../components/chart/linechart";
import PieC from "../components/chart/piechart";
import HeatMap from "../components/chart/heatmap";
import Analytics from "../components/user-analytics/analytics";
import Memo from "../components/memo/memo";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div id="sidebar-Dashboard">
      <Sidebar />
      <div className="dashboard">
        <div className="analytics">
          <div className="section user-analytics">
            <div className="header-user-analytics">유저 통계</div>
            <Analytics />
          </div>
          <div className="section chart">
            <LineChart />
            <HeatMap />
            <PieC />
          </div>
          <div className="section anything"></div>
        </div>
        <div className="profile-memo">
          <AdminpProfile />
          <Memo />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
