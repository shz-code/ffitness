import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ExcerciseCards from "./ExcerciseCards";

export default function ExcerciseCategories({ props }) {
  return (
    <Stack sx={{ rowGap: "2rem" }}>
      <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        <Typography
          variant="h3"
          sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
          position="relative"
        >
          Explore Our <br /> Program
          <Typography
            sx={{
              position: "absolute",
              top: "-40px",
              left: { md: "-145px", xl: "-200px" },
              zIndex: "-1",
              fontSize: { md: "7rem", xl: "9rem" },
              opacity: "0.3",
              display: { xs: "none", md: "block" },
            }}
          >
            <span className="secondary_text"> PROGRAM </span>
          </Typography>
        </Typography>
      </Box>
      <ExcerciseCards props={props} />
    </Stack>
  );
}
