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

const CustomTooltip = ({ active, payload, label, selectedChart }) => {
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

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <ResponsiveContainer className="linecharts-chart" width="100%" height={240}>
      <AreaChart
        className="area-chart"
        data={chartData.reverse()}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="index"
          axisLine={false}
          fontSize={13}
          tickLine={false}
        />
        <YAxis
          type="number"
          axisLine={false}
          fontSize={13}
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
