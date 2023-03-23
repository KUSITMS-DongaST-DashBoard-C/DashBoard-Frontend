import axios from "axios";

export async function Login() {
  let accessToken;
  await axios
    .post(
      `http://43.201.80.154:80/admin/login?email=test003%40test.com&password=test003`
    )
    .then((res) => {
      console.log(res);
      accessToken = res.data.data.accessToken;
    });
  await axios.post(
    `http://43.201.80.154:80/admin/login?email=test001%40test.com&password=test001`
  );
  await axios.post(
    `http://43.201.80.154:80/admin/login?email=test002%40test.com&password=test002`
  );

  const response = await axios
    .get("http://43.201.80.154:80/admin/info", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data);

  return response;
}
