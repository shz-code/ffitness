import { Box, Stack } from "@mui/material";
import React, { useContext } from "react";
import BodyPartsContext from "../lib/BodyPartsContext";
import ExerciseGifCards from "./ExerciseGifCards";
import SectionHeader from "./SectionHeader";

export default function ShowExercises() {
  const bodyPart = useContext(BodyPartsContext);
  const { selectedBodyPart, exercises } = bodyPart;
  return (
    <Stack>
      <SectionHeader
        p1="Showing Results of"
        p2={`${selectedBodyPart} exercises`}
      />
      <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        <ExerciseGifCards exercises={exercises} />
      </Box>
    </Stack>
  );
}
