import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const exercisesApiSlice = createApi({
  reducerPath: "exercisesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://exercisedb.p.rapidapi.com",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  }),
  endpoints: (builder) => ({
    getExercises: builder.query({
      query: () => "exercises",
      onQueryStarted(args, { queryFulfilled, dispatch }) {
        console.log("Get Exercises Api");
      },
    }),
    getExercise: builder.query({
      query: (id) => `exercises/exercise/${id}`,
      onQueryStarted(args, { queryFulfilled, dispatch }) {
        console.log("Get Exercise Api");
      },
    }),
    getSimilarExercise: builder.query({
      query: (name) => `exercises/target/${encodeURIComponent(name)}`,
      onQueryStarted(args, { queryFulfilled, dispatch }) {
        console.log("Get Similar Exercise Api");
      },
    }),
    getBodyParts: builder.query({
      query: () => "exercises/bodyPartList",
      onQueryStarted(args, { queryFulfilled, dispatch }) {
        console.log("Get BodyPart Api");
      },
    }),
  }),
});

export default exercisesApiSlice;
export const {
  useGetExercisesQuery,
  useGetBodyPartsQuery,
  useGetExerciseQuery,
  useGetSimilarExerciseQuery,
} = exercisesApiSlice;
