import { Stack } from "@mui/material";
import React from "react";
import ExcerciseCard from "./ExcerciseCard";

export default function ExcerciseCards() {
  return (
    <Stack direction="row" sx={{ columnGap: "1rem", overflowX: "scroll" }}>
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
      <ExcerciseCard />
    </Stack>
  );
}
