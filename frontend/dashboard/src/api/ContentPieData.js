import axios from "axios";
export async function ContentPieData() {
  const response = await axios
    .get(`http://43.201.80.154:80/chart/contents`)
    .then((res) => res.data);
  return response;
}
