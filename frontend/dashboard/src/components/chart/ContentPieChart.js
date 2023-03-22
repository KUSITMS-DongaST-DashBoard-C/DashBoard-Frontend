import "./ContentPieChart.css";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
const GenreCustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.log(payload[0].payload, label);
    return (
      <div className="custom-tooltip">
        <div>
          {payload.map((pld) => (
            <div
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
              >{`${pld.value}`}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
const data = [
  { name: "ORIGINAL", value: 400 },
  { name: "ON AIR", value: 300 },
  { name: "VOD", value: 300 },
  { name: "LIFE", value: 200 },
  { name: "그 외", value: 100 },
];

const COLORS = ["#FB6358", "#FC9481", "#FDB19A", "#FED1BC", "#FEEADD"];

const renderColorfulLegendText = (value) => {
  return <span style={{ color: "#868E96" }}>{value}</span>;
};
export default function ContentPieChart() {
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
            cy="30%"
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
            width="33%"
            formatter={renderColorfulLegendText}
            wrapperStyle={{ fontSize: "12px", fontWeight: "500" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
