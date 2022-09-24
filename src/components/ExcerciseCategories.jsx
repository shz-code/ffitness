import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ExcerciseCards from "./ExcerciseCards";

export default function ExcerciseCategories() {
  return (
    <Stack>
      <Typography
        variant="h3"
        sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
        position="relative"
      >
        Explore Our <br /> Program
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "-10px",
            left: "-120px",
            zIndex: "-1",
            fontSize: { md: "7rem", xl: "9rem" },
            opacity: "0.3",
            display: { xs: "none", md: "block" },
          }}
        >
          <span className="secondary_text"> PROGRAM </span>
        </Typography>
      </Typography>
      <ExcerciseCards />
    </Stack>
  );
}
