import axios from "axios";

export async function getMemoData() {
  const response = await axios
    .get("http://43.201.80.154/memo/?page=0&size=50")
    .then((res) => res.data);
  return response;
}

export async function postMemo({ newMemoText, accessToken }) {
  await axios.post(
    `http://43.201.80.154:80/memo?content=${newMemoText}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

export async function deleteMemoData({ memoId, accessToken }) {
  await axios.delete(
    `http://43.201.80.154:80/memo/${memoId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

export async function updateMemoData({ updateMemoText, memoId, accessToken }) {
  await axios.post(
    `http://43.201.80.154:80/memo/update?content=${updateMemoText}&memoId=${memoId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}

export async function postComment({ newCommentText, memoId, accessToken }) {
  await axios.post(
    `http://43.201.80.154:80/comments`,
    {
      content: newCommentText,
      memoId: memoId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
}
