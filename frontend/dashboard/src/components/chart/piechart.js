import "./piechart.css";
import React, { useEffect, useState } from "react";
// import { PieMajor } from "../../api/PieMajor";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const MajorCustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.log(payload[0].payload, label);
    return (
      <div className="custom-tooltip">
        {/* <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p> */}
        <div>
          {payload.map((pld) => (
            <div
              style={{
                display: "inline-block",
                padding: "1rem",
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
                }}
              >
                <div
                  style={{
                    width: "100%",
                    color: "#868E96",
                    marginRight: "1rem",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  총 회원 수
                </div>
                <div
                  style={{
                    color: "#FB6358",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >{`${pld.value} `}</div>
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
export default function PieC() {
  const [isLoading, setLoad] = useState(true);
  const [Major, setMajor] = useState([]);

  useEffect(() => {
    const getMajor = async () => {
      const response = await axios
        .get("http://43.201.80.154:80/chart/major")
        .then((res) => res.data);
      setLoad(false);
      setMajor(response.data);
    };
    getMajor();
  }, []);

  const data = Major.map(function (el) {
    let obj = {};
    obj["name"] = el.majorName;
    obj["value"] = el.majorNum;

    return obj;
  });

  return (
    <div className="piechart-container">
      <div className="pie-header">진료과별 유저수</div>
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
            content={<MajorCustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={5}
            width="30%"
            formatter={renderColorfulLegendText}
            wrapperStyle={{ fontSize: "12px", fontWeight: "500" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
