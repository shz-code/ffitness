import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useGetExercisesQuery } from "../features/api/exercisesApiSlice";
import ExerciseGifCards from "./ExerciseGifCards";
import SectionHeader from "./SectionHeader";

export default function ShowExercises() {
  const { data: exercises, isLoading, isError, error } = useGetExercisesQuery();
  const { selectedBodyPart, search } = useSelector((state) => state.filter);

  let content = null;
  if (isLoading && !isError) content = "Loading";
  else if (!isLoading && isError) content = `Error ${error?.status}`;
  else if (!isLoading && !isError && exercises.length === 0)
    content = "Nothing Found";
  else if (!isLoading && !isError && exercises.length > 0) {
    content = exercises
      .filter((exercise) => {
        if (selectedBodyPart === "all") return exercise;
        else return exercise.bodyPart === selectedBodyPart;
      })
      .filter((exercise) => {
        if (exercise.name.toLowerCase().includes(search.toLowerCase()))
          return exercise;
        else if (
          exercise.equipment.toLowerCase().includes(search.toLowerCase())
        )
          return exercise;
        else return null;
      });
  }

  return (
    <Stack id="exercises">
      <SectionHeader
        p1="Showing Results of"
        p2={`${selectedBodyPart}`}
        p3="exercises"
      />
      <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        {exercises?.length ? (
          <ExerciseGifCards exercises={content} />
        ) : (
          "Nothing Found"
        )}
      </Box>
    </Stack>
  );
}
