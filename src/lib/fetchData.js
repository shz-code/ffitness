import axios from "axios";

const BASE_URL = "https://exercisedb.p.rapidapi.com/exercises";

const options = {
  headers: {
    "X-RapidAPI-Key": "2b498667c5msh5388419417ade02p1d68dfjsn2bfb7a00dd7d",
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
