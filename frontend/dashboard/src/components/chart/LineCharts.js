import "./LineCharts.css";
const LineCharts = () => {
  return (
    <div className="linecharts-container">
      <div className="linecharts-charts">
        <div className="linecharts-button">
          <span className="DAU">DAU</span>
          <span className="WAU">WAU</span>
          <span className="MAU">MAU</span>
        </div>
        <div className="linecharts-chart">A</div>
      </div>
      <div className="linecharts-stats">
        <span>03-16 기준</span>
      </div>
    </div>
  );
};

export default LineCharts;
