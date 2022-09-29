import { Box, Stack } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import BodyPartsContext from "../../lib/BodyPartsContext";
import fetchData from "../../lib/fetchData";
import ExcerciseCategories from "../ExerciseCategories";
import Hero from "../Hero";
import SearchExercise from "../SearchExercise";
import ShowExercises from "../ShowExercises";

function Home({ exercises }) {
  const [bodyParts, SetbodyParts] = useState([]);
  const [selectedBodyPart, SetselectedBodyPart] = useState("all");
  const [searchExercises, SetsearchExercises] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetchData("bodyPartList").then((data) => {
        SetbodyParts(["all", ...data]);
      });
    };
    getData();
    return getData;
  }, []);

  const handleSearchExcercises = (item) => {
    const searchedExercises = exercises.filter(
      (exercise) =>
        exercise.bodyPart.includes(item) ||
        exercise.target.includes(item) ||
        exercise.equipment.includes(item) ||
        exercise.name.includes(item)
    );
    SetsearchExercises(searchedExercises);
    if (window.innerWidth > 1535) {
      window.scrollTo({ top: 1300, behavior: "smooth" });
    } else if (window.innerWidth <= 899) {
      window.scrollTo({ top: 1100, behavior: "smooth" });
    } else if (window.innerWidth <= 1535) {
      window.scrollTo({ top: 1150, behavior: "smooth" });
    }
  };

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
        <BodyPartsContext.Provider
          value={{
            selectedBodyPart,
            SetselectedBodyPart,
            exercises,
            handleSearchExcercises,
            searchExercises,
          }}
        >
          <SearchExercise handleSearchExcercises={handleSearchExcercises} />
          <ExcerciseCategories props={{ bodyParts }} />
          <ShowExercises />
        </BodyPartsContext.Provider>
      </Stack>
    </Box>
  );
}

export default memo(Home);
