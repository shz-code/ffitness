import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";

const options = {
  headers: {
    "X-RapidAPI-Key": "764ac538a4msh2058723fa431bd0p149715jsne8aadbaf7daa",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
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
