import { Stack } from "@mui/system";
import React from "react";
import ExerciseCategoryCards from "./ExerciseCategoryCards";
import SectionHeader from "./SectionHeader";

export default function ExerciseCategories({ bodyParts }) {
  return (
    <Stack sx={{ rowGap: "3rem" }}>
      <SectionHeader p1="EXPLORE ALL" p2="Categories" />
      <ExerciseCategoryCards bodyParts={bodyParts} />
    </Stack>
  );
}
