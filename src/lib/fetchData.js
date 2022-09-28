import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";
const BASE_YL_URL = "https://youtube-search-and-download.p.rapidapi.com";

const optionsYt = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
};

export const fetchYoutubeVideos = async (url) => {
  const { data } = await axios.get(`${BASE_YL_URL}/${url}`, optionsYt);
  return data;
};

const fetchData = async (url) => {
  const { data } =
    url === undefined
      ? await axios.get(`${BASE_URL}`, options)
      : await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export default fetchData;
