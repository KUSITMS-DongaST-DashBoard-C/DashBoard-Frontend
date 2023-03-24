import axios from "axios";
export async function Logout() {
  const response = await axios
    .post(`http://43.201.80.154:80/admin/logoutAll`)
    .then((res) => res.data);
  console.log(response);
  return response;
}
