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

// const data = [
//   { name: "정형외과", value: 400 },
//   { name: "내과", value: 300 },
//   { name: "내분비내과", value: 300 },
//   { name: "신경과", value: 200 },
//   { name: "그 외", value: 100 },
// ];

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
          <Tooltip />
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
