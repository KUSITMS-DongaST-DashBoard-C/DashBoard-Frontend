import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./LineCharts.css";

const data = [
  {
    name: "10월",
    uv: 15,
    pv: 24,
    amt: 24,
  },
  {
    name: "11월",
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: "12월",
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: "1월",
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: "2월",
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: "3월",
    uv: 23,
    pv: 38,
    amt: 25,
  },
];

function Chart() {
  return (
    <ResponsiveContainer width="100%" height={268}>
      <AreaChart
        className="area-chart"
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" axisLine={false} fontSize={13} tickLine={false} />
        <YAxis
          type="number"
          axisLine={false}
          fontSize={13}
          tickLine={false}
          width={30}
        />
        <Tooltip />
        <Area
          type="linear"
          dataKey="uv"
          stroke="#FB6358"
          strokeWidth={2}
          fill="#FB6358"
          fillOpacity={0.2}
          isAnimationActive={false}
        />
        <Area
          type="linear"
          dataKey="pv"
          stroke="#FB6358"
          strokeWidth={2}
          fill="#FB6358"
          fillOpacity={0.1}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const LineCharts = () => {
  return (
    <div className="linecharts-container">
      <div className="linecharts-charts">
        <div className="linecharts-button">
          <span className="DAU">DAU</span>
          <span className="WAU">WAU</span>
          <span className="MAU">MAU</span>
        </div>
        <div className="linecharts-chart">
          <Chart />
        </div>
      </div>
      <div className="linecharts-stats">
        <span>03-16 기준</span>
      </div>
    </div>
  );
};

export default LineCharts;
