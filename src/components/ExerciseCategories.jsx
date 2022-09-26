import { Stack } from "@mui/system";
import React from "react";
import ExerciseCategoryCards from "./ExerciseCategoryCards";
import SectionHeader from "./SectionHeader";

export default function ExerciseCategories({ props }) {
  return (
    <Stack sx={{ rowGap: "3rem" }}>
      <SectionHeader p1="EXPLORE all" p2="Categories" />
      <ExerciseCategoryCards props={props} />
    </Stack>
  );
}
