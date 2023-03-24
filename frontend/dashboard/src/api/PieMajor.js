import axios from "axios";
export async function PieMajor() {
  const response = await axios
    .get(`http://43.201.80.154:80/chart/major`)
    .then((res) => res.data);

  return response;
}
