import Sidebar from "../components/sidebar/SideBar";
import LineCharts from "../components/chart/LineCharts";
import PieC from "../components/chart/piechart";
import HeatMap from "../components/chart/heatmap";
import "./dashboard.css";
import Header from "../components/Header/Header";
import UploadVideo from "../components/UploadVideo/UploadVideo";
import ContentPieChart from "../components/chart/ContentPieChart";
const DashBoard = () => {
  return (
    <div id="sidebar-Dashboard">
      <Sidebar />
      <div className="dashboard">
        <div className="header">
          <Header />
        </div>
        <div className="analytics">
          <div className="section chart">
            <LineCharts />
            <HeatMap />
            <PieC />
          </div>
        </div>
        <div className="content">
          <UploadVideo />
          <ContentPieChart />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
