import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <Stack
      direction={{ sm: "row" }}
      alignItems="center"
      pt="1rem"
      sx={{ width: { xs: "95%", md: "80%" } }}
      m="auto"
    >
      <Link to="/">
        {" "}
        <Logo className="logo" />
      </Link>
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          width={{ xs: "100%", sm: "auto" }}
          pl={{ sm: "6rem" }}
          sx={{ columnGap: "2rem" }}
          mt={{ xs: "1rem", sm: "0" }}
        >
          <a href="#home">Home</a>
          <a href="#exercises">Exercises</a>
        </Stack>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          <a className="btn" href="#contact">
            Contact Us
          </a>
        </Typography>
      </Stack>
    </Stack>
  );
}
