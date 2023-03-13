import Sidebar from "../components/sidebar/sidebar";
import AdminpProfile from "../components/adminprofile/Adminprofile";
import LineChart from "../components/chart/linechart";
import PieChart from "../components/chart/piechart";
import HeatMap from "../components/chart/heatmap";
import Analytics from "../components/user-analytics/analytics";
import Memo from "../components/memo/memo";
import "./dashboard.css";

const DashBoard = () => {
  return (
    <div id="sidebar-Dashboard">
      <Sidebar />
      <div class="dashboard">
        <div class="analytics">
          <div class="section user-analytics">
            <div class="header-user-analytics">
              <span>사용자 통계</span>
            </div>
            <Analytics />
          </div>
          <div class="section chart">
            <LineChart />
            <HeatMap />
            <PieChart />
          </div>
          <div class="section anything"></div>
        </div>
        <div class="profile-memo">
          <AdminpProfile />
          <Memo />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
