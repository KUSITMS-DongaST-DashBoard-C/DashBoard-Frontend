import Sidebar from "../components/sidebar/SideBar";
import LineChart from "../components/chart/linechart";
import PieC from "../components/chart/piechart";
import HeatMap from "../components/chart/heatmap";
import "./dashboard.css";
import Header from "../components/Header/Header";
import UploadVideo from "../components/UploadVideo/UploadVideo";
import ContentPieChart from "../components/chart/ContentPieChart";
// import DetailedContent from "../components/DetailedContent/DetailedContent";
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
            <LineChart />
            <HeatMap />
            <PieC />
          </div>
        </div>
        <div className="content">
          <UploadVideo />
          {/* <DetailedContent /> */}
          <ContentPieChart />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
