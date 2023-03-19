import axios from "axios";
export async function ActiveProfile() {
  const response = await axios
    .get(`http://43.201.80.154:80/admin/info`)
    .then((res) => res.data);
  console.log(response);
  return response;
}
