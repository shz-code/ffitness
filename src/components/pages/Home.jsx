import { Box, Stack } from "@mui/material";
import React, { memo } from "react";
import { useGetBodyPartsQuery } from "../../features/api/exercisesApiSlice";
import ExcerciseCategories from "../ExerciseCategories";
import Hero from "../Hero";
import SearchExercise from "../SearchExercise";
import ShowExercises from "../ShowExercises";

function Home({ exercises }) {
  const { data: bodyParts, isLoading } = useGetBodyPartsQuery();

  return (
    <Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "5rem",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
          <Hero count={exercises.length} />
        </Box>

        <SearchExercise />
        {!isLoading && <ExcerciseCategories bodyParts={bodyParts} />}
        <ShowExercises />
      </Stack>
    </Box>
  );
}

export default memo(Home);
