import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";

const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
  },
};

const fetchData = async (url) => {
  const { data } =
    url === undefined
      ? await axios.get(`${BASE_URL}`, options)
      : await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export default fetchData;
