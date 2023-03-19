import axios from "axios";
export async function Login() {
  const response = await axios
    .post(
      `http://43.201.80.154:80/user/login?email=test001@test.com&password=test001`
    )
    .then((res) => res.data);
  console.log(response);
  return response;
}
