import { Box, Stack } from "@mui/material";
import React from "react";
// import { useGetExercisesQuery } from "../features/api/exercisesApiSlice";
// import ExerciseGifCards from "./ExerciseGifCards";
import { useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";

export default function ShowExercises() {
  const { selectedBodyPart } = useSelector((state) => state.filter);

  // const { data: exercises, isLoading } = useGetExercisesQuery();

  // console.log(exercises);

  return (
    <Stack id="exercises">
      <SectionHeader
        p1="Showing Results of"
        p2={`${selectedBodyPart}`}
        p3="exercises"
      />
      <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        {/* {!isLoading && <ExerciseGifCards exercises={exercises} />} */}
        {/* {selectedBodyPart === "all" ? (
          <ExerciseGifCards exercises={exercises} />
        ) : (
          <ExerciseGifCards exercises={searchExercises} />
        )} */}
      </Box>
    </Stack>
  );
}
