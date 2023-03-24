import axios from "axios";
export async function UploadVideoData(category) {
  console.log(category);
  const response = await axios
    .get(`http://43.201.80.154:80/${category}/expectedUpload`)
    .then((res) => res.data);
  return response;
}
