import axios from "axios";
export async function AnalyzeVideoData(category, sortby, startDate, endDate) {
  console.log(
    `http://43.201.80.154:80/${category}/detail/${sortby}?endDate=${endDate}&startDate=${startDate}`
  );
  const response = await axios
    .get(
      `http://43.201.80.154:80/${category}/detail/${sortby}?endDate=${endDate}&startDate=${startDate}`
    )
    .then((res) => res.data);

  return response;
}
