import axios from "axios";
export async function Login() {
  const response = await axios
    .post(
      `http://43.201.80.154:80/admin/login?email=test003%40test.com&password=test003`
    )
    .then((res) => res.data);
  console.log(response);
  return response;
}
