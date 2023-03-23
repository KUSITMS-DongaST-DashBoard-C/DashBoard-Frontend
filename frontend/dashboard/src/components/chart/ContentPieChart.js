import "./ContentPieChart.css";
import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { ContentPieData } from "../../api/ContentPieData";
// {
//   "message": "콘텐츠별 유입률 조회를 성공했습니다",
//   "data": [
//     {
//       "contents": "original",
//       "ratio": 40
//     },
//     {
//       "contents": "vod",
//       "ratio": 24
//     },
//     {
//       "contents": "live",
//       "ratio": 16
//     },
//     {
//       "contents": "life",
//       "ratio": 18
//     }
//   ]
// }

const GenreCustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <div>
          {payload.map((pld, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-block",
                padding: "1rem 2rem 1rem 2rem",
                backgroundColor: "white",
                borderRadius: "1rem",
                boxShadow: "0px 0px 8px 4px rgba(173, 181, 189, 0.15)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  color: "#343A40",
                  fontWeight: "500",
                  marginBottom: "0.5rem",
                  fontSize: "14px",
                }}
              >{`${pld.name}`}</div>
              <div
                style={{
                  display: "flex",
                  color: "#FB6358",
                  fontWeight: "500",
                  fontSize: "16px",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                {`${pld.value}`}%
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const COLORS = ["#FB6358", "#FC9481", "#FDB19A", "#FED1BC", "#FEEADD"];

const renderColorfulLegendText = (value) => {
  return <span style={{ color: "#868E96" }}>{value}</span>;
};
export default function ContentPieChart() {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    const getPieData = async () => {
      const response = await ContentPieData();
      setPieData(response.data);
    };
    getPieData();
  }, [pieData]);

  const data = pieData?.map(function (el, idx) {
    let obj = {};
    obj["name"] = el.contents;
    obj["value"] = el.ratio;

    return obj;
  });

  return (
    <div className="piechart-container">
      <div className="pie-header">콘텐츠별 유입률</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            cy="40%"
            cx="50%"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            content={<GenreCustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={5}
            width="70px"
            formatter={renderColorfulLegendText}
            wrapperStyle={{ fontSize: "12px", fontWeight: "500" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
