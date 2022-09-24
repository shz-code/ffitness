import { Box, Stack } from "@mui/material";
import React from "react";
import ExcerciseCategories from "../ExcerciseCategories";
import Hero from "../Hero";

export default function Home() {
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
        <Hero />
        <ExcerciseCategories />
      </Stack>
    </Box>
  );
}
