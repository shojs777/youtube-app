import axios from "axios";

const KEY = "AIzaSyBim8pmcTn4guxXyuGS_uI5vWftkL6loMM";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
const params = {
  part: "snippet",
  maxResults: 40,
  key: KEY,
  regionCode: "JP",
  type: "video",
};
export const fetchPopularData = async () => {
  return await youtube.get("/videos", {
    params: {
      part: "snippet",
      maxResults: 40,
      key: KEY,
      regionCode: "JP",
      type: "video",
      chart: "mostPopular",
    },
  });
};
export const fetchSelectedData = async (id) => {
  return await youtube.get("videos", {
    params: {
      ...params,
      id,
    },
  });
};
export const fetchRelatedData = async (id) => {
  return await youtube.get("/search", {
    params: {
      ...params,
      relatedToVideoID: id,
    },
  });
};
