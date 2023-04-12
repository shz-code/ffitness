import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ytApiSlice = createApi({
  reducerPath: "ytApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-search-and-download.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    },
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (param) => ({
        url: `search?query=${param} exercise&type=v`,
      }),
    }),
  }),
});

export default ytApiSlice;
export const { useGetVideosQuery } = ytApiSlice;
