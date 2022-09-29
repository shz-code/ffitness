import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import BodyPartsContext from "../lib/BodyPartsContext";
import ExerciseGifCards from "./ExerciseGifCards";
import SectionHeader from "./SectionHeader";

export default function ShowExercises() {
  const bodyPart = useContext(BodyPartsContext);
  const { selectedBodyPart, searchExercises, exercises } = bodyPart;
  return (
    <Stack id="exercises">
      <SectionHeader
        p1="Showing Results of"
        p2={`${selectedBodyPart}`}
        p3="exercises"
      />
      <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        {selectedBodyPart === "all" ? (
          <ExerciseGifCards exercises={exercises} />
        ) : (
          <ExerciseGifCards exercises={searchExercises} />
        )}
      </Box>
    </Stack>
  );
}
