import { Stack } from "@mui/material";
import React from "react";
// import { useGetVideosQuery } from "../features/api/apiSlice";
// import ExercisevideoCard from "./ExercisevideoCard";
import SectionHeader from "./SectionHeader";

export default function ExerciseVideos({ name }) {
  // const { data: videos, isLoading } = useGetVideosQuery(name);
  console.log("Exercise Videos");
  return (
    <Stack>
      <SectionHeader p1="exercise" p2="videos" />
      <Stack sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1,auto)",
              md: "repeat(2,auto)",
              xl: "repeat(3,auto)",
              gap: "1rem",
            },
            justifyContent: { xs: "center", md: "space-between" },
          }}
          py={4}
        >
          {/* {!isLoading &&
            videos?.contents
              .slice(0, 6)
              .map((item, index) => (
                <ExercisevideoCard item={item} key={index} />
              ))} */}
        </Stack>
      </Stack>
    </Stack>
  );
}
