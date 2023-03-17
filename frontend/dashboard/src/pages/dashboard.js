import Sidebar from "../components/sidebar/SideBar";
import LineChart from "../components/chart/linechart";
import PieC from "../components/chart/piechart";
import HeatMap from "../components/chart/heatmap";
import "./dashboard.css";
import Header from "../components/Header/Header";

const DashBoard = () => {
  return (
    <div id="sidebar-Dashboard">
      <Sidebar />
      <div className="dashboard">
        <div className="analytics">

          <div className="section header">
            <Header />
          </div>

          <div className="section chart">
            <LineChart />
            <HeatMap />
            <PieC />
          </div>
          <div className="section anything"></div>
        </div>
        {/* <div className="profile-memo">
          <AdminProfile />
          <Memo />
        </div> */}
      </div>
    </div>
  );
};

export default DashBoard;
