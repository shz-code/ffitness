import { Box, Stack } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import BodyPartsContext from "../../lib/BodyPartsContext";
import fetchData from "../../lib/fetchData";
import ExcerciseCategories from "../ExerciseCategories";
import Hero from "../Hero";
import Navbar from "../Navbar";
import ShowExercises from "../ShowExercises";

function Home() {
  const [exercises, Setexercises] = useState([]);
  const [bodyParts, SetbodyParts] = useState([]);
  const [selectedBodyPart, SetselectedBodyPart] = useState("all");

  useEffect(() => {
    const getData = async () => {
      await fetchData("bodyPartList").then((data) => {
        SetbodyParts(["all", ...data]);
      });
      await fetchData().then((data) => {
        Setexercises([...data]);
      });
    };
    getData();

    return getData;
  }, []);

  return (
    <Box>
      <Navbar />
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
          value={{ selectedBodyPart, SetselectedBodyPart, exercises }}
        >
          <ExcerciseCategories props={{ bodyParts, selectedBodyPart }} />
          <ShowExercises />
        </BodyPartsContext.Provider>
      </Stack>
    </Box>
  );
}

export default memo(Home);
