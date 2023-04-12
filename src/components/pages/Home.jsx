import { Box, Stack } from "@mui/material";
import React, { memo } from "react";
import ScrollToTop from "react-scroll-to-top";
import { useGetBodyPartsQuery } from "../../features/api/exercisesApiSlice";
import ExerciseCategories from "../ExerciseCategories";
import Hero from "../Hero";
import Loader from "../Loader";
import SearchExercise from "../SearchExercise";
import ShowExercises from "../ShowExercises";

const sttStyle = {
  borderRadius: "100%",
  width: "50px",
  height: "50px",
};

function Home() {
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
          <Hero />
        </Box>

        <SearchExercise />
        {isLoading ? <Loader /> : <ExerciseCategories bodyParts={bodyParts} />}
        <ShowExercises />
      </Stack>
      <ScrollToTop smooth color="#FF6158" style={sttStyle} />
    </Box>
  );
}

export default memo(Home);
