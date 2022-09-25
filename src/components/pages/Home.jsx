import { Box, Stack } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import BodyPartsContext from "../../lib/BodyPartsContext";
import fetchData from "../../lib/fetchData";
import ExcerciseCategories from "../ExcerciseCategories";
import Hero from "../Hero";

function Home() {
  const [excercises, Setexcercises] = useState([]);
  const [bodyParts, SetbodyParts] = useState([]);
  const [selectedBodyPart, SetselectedBodyPart] = useState("all");

  useEffect(() => {
    const getData = async () => {
      await fetchData("bodyPartList").then((data) => {
        SetbodyParts(["all", ...data]);
      });
      await fetchData().then((data) => {
        Setexcercises([...data]);
      });
    };
    getData();

    return getData;
  }, []);

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
          <Hero count={excercises.length} />
        </Box>
        <BodyPartsContext.Provider
          value={{ selectedBodyPart, SetselectedBodyPart }}
        >
          <ExcerciseCategories props={{ bodyParts, selectedBodyPart }} />
        </BodyPartsContext.Provider>
      </Stack>
    </Box>
  );
}

export default memo(Home);
