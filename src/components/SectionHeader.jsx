import { Box, Typography } from "@mui/material";
import React from "react";

export default function SectionHeader({ p1, p2 }) {
  return (
    <Box sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
      <Typography
        variant="h3"
        sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
        position="relative"
      >
        {p1} <br /> <span style={{ color: "red" }}> {p2} </span>
        <Typography
          sx={{
            position: "absolute",
            top: "-30px",
            left: { md: "-145px", xl: "-200px" },
            zIndex: "-1",
            fontSize: { md: "7rem", xl: "9rem" },
            display: { xs: "none", md: "block" },
          }}
        >
          <span className="secondary_text"> {p2} </span>
        </Typography>
      </Typography>
    </Box>
  );
}
