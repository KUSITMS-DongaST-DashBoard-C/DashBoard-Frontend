import axios from "axios";

export async function ActiveProfile(accessToken) {
  const response = await axios
    .get("http://43.201.80.154:80/admin/info", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data);

  return response;
}
