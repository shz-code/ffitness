import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ExcerciseCard() {
  return (
    <Box
      sx={{
        display: "grid",
        rowGap: "0.5rem",
        background: "red",
        width: "250px",
        borderRadius: "0.5rem",
      }}
      p={3}
    >
      <Typography>
        <AccessibilityNewIcon />
      </Typography>
      <Typography variant="caption">Fat Lose</Typography>
      <Typography sx={{ fontSize: "0.8rem", width: "220px" }}>
        <span className="secondary_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          labore quae incidunt debitis voluptate eos!{" "}
        </span>
      </Typography>
      <a href="#none" style={{ color: "white" }}>
        Join Now
      </a>
    </Box>
  );
}
