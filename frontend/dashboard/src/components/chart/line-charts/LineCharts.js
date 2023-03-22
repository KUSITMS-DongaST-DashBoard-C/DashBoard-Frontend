import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BsFillCircleFill } from "react-icons/bs";
import "./LineCharts.css";
import UserStats from "./UserStats";

const CustomTooltip = ({ active, payload, selectedChart }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="tooltip-row">
          <div className="tooltip-row-left">
            <BsFillCircleFill color="#FDB19A" size={12} />
            <span className="tooltip-title">{selectedChart.toUpperCase()}</span>
          </div>
          <span className="tooltip-value">{payload[0].value}</span>
        </div>
        <div className="box"> </div>
        <div className="tooltip-row">
          <div className="tooltip-row-left">
            <BsFillCircleFill color="#FB6358" size={12} />
            <span className="tooltip-title">신규 가입자</span>
          </div>
          <span className="tooltip-value">{payload[1].value}</span>
        </div>
      </div>
    );
  }
  return null;
};

const Chart = ({ selectedChart }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const today = new Date();
  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const date = today.getDate(); // 날짜
  const day = today.getDay(); // 요일

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("http://43.201.80.154:80/chart/".concat(selectedChart))
        .then((res) => res.data);

      setData(response.data);
      setIsLoading(false);
    };
    getData();
  }, [selectedChart]);

  const chartData = data.reverse().map(function (el) {
    let obj = {};
    if (selectedChart === "dau") {
      obj["index"] = el.daysBefore;
      obj["value"] = el.dau;
    } else if (selectedChart === "wau") {
      obj["index"] = el.weeksNum;
      obj["value"] = el.wau;
    } else if (selectedChart === "mau") {
      obj["index"] = el.monthsBefore;
      obj["value"] = el.mau;
    }

    obj["signupNum"] = el.signupNum;

    return obj;
  });

  function addDays(date, days) {
    const clone = new Date(date);
    clone.setDate(date.getDate() + days);
    return clone;
  }

  function getDauWAxis(tickItem) {
    const before = addDays(today, -1 * tickItem);
    const beforeMonth = ("00" + (before.getMonth() + 1)).toString().slice(-2);
    const beforeDate = ("00" + before.getDate()).toString().slice(-2);
    return `${beforeMonth}/${beforeDate}`;
  }

  function getWauXAxis(tickItem) {
    const before = addDays(today, -7 * tickItem - 6);
    const beforeMonth = ("00" + (before.getMonth() + 1)).toString().slice(-2);
    const beforeDate = ("00" + before.getDate()).toString().slice(-2);
    const after = addDays(today, -7 * tickItem);
    const afterMonth = ("00" + (after.getMonth() + 1)).toString().slice(-2);
    const afterDate = ("00" + after.getDate()).toString().slice(-2);
    return `${beforeMonth}/${beforeDate} - ${afterMonth}/${afterDate}`;
  }

  function getMauXAxis(tickItem) {
    const monthsBefore = month - tickItem;
    if (monthsBefore > 0) {
      return `${monthsBefore}월`;
    } else {
      return `'${(year - 1).toString().slice(-2)}년 ${12 + monthsBefore}월`;
      // return `${year - 1}년 ${12 + monthsBefore}월`;
    }
  }

  function CustomizedTick(props) {
    const { x, y, payload } = props;
    if (selectedChart === "dau") {
      return (
        <g className="x-axis" transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={12} textAnchor="middle" fill="#666">
            {getDauWAxis(payload.value)}
          </text>
        </g>
      );
    } else if (selectedChart === "wau") {
      const wauXaxis = getWauXAxis(payload.value);
      return (
        <g className="x-axis" transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={8} textAnchor="middle" fill="#666">
            {wauXaxis.slice(0, 5)}
          </text>
          <text x={0} y={0} dy={22} textAnchor="middle" fill="#666">
            {wauXaxis.slice(-8)}
          </text>
        </g>
      );
    } else if (selectedChart === "mau") {
      const mauXaxis = getMauXAxis(payload.value);
      if (mauXaxis.length > 4) {
        return (
          <g className="x-axis" transform={`translate(${x},${y})`}>
            <text x={2} y={0} dy={8} textAnchor="middle" fill="#666">
              {mauXaxis.slice(0, 4)}
            </text>
            <text x={4} y={0} dy={22} textAnchor="middle" fill="#666">
              {mauXaxis.slice(-3)}
            </text>
          </g>
        );
      } else {
        return (
          <g className="x-axis" transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={12} textAnchor="middle" fill="#666">
              {mauXaxis}
            </text>
          </g>
        );
      }
    }
  }

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <ResponsiveContainer className="linecharts-chart" width="100%" height={240}>
      <AreaChart
        className="area-chart"
        data={chartData.reverse()}
        margin={{
          top: 0,
          right: 30,
          left: 0,
          bottom: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="index"
          axisLine={false}
          fontSize={12}
          tickLine={false}
          tick={<CustomizedTick />}
          // tickFormatter={formatXAxis}
        />
        <YAxis
          type="number"
          axisLine={false}
          fontSize={12}
          tickLine={false}
          width={30}
        />
        <Tooltip
          wrapperStyle={{ outline: 0 }}
          content={<CustomTooltip selectedChart={selectedChart} />}
        />
        <Area
          type="linear"
          dataKey="value"
          stroke="#FB6358"
          strokeWidth={2}
          fill="#FB6358"
          fillOpacity={0.1}
          isAnimationActive={true}
        />
        <Area
          type="linear"
          dataKey="signupNum"
          stroke="#FB6358"
          strokeWidth={2}
          fill="#FB6358"
          fillOpacity={0.2}
          isAnimationActive={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const LineChartsButton = (props) => {
  return (
    <div className="linecharts-button-container">
      <button
        onClick={() => {
          props.setSelectedChart("dau");
        }}
        className={
          props.selectedChart === "dau"
            ? "selectedChart linecharts-button"
            : "linecharts-button"
        }
      >
        DAU
      </button>
      <button
        onClick={() => {
          props.setSelectedChart("wau");
        }}
        className={
          props.selectedChart === "wau"
            ? "selectedChart linecharts-button"
            : "linecharts-button"
        }
      >
        WAU
      </button>
      <button
        onClick={() => {
          props.setSelectedChart("mau");
        }}
        className={
          props.selectedChart === "mau"
            ? "selectedChart linecharts-button"
            : "linecharts-button"
        }
      >
        MAU
      </button>
    </div>
  );
};

const LineCharts = () => {
  const [selectedChart, setSelectedChart] = useState("dau");
  return (
    <div className="linecharts-container">
      <div className="linecharts-charts">
        <LineChartsButton
          selectedChart={selectedChart}
          setSelectedChart={setSelectedChart}
        />
        <Chart selectedChart={selectedChart} />
      </div>
      <UserStats />
    </div>
  );
};

export default LineCharts;
