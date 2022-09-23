import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <Stack direction="row" alignItems="center" pt="1rem">
      <Logo className="logo" />
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Stack
          direction="row"
          alignItems="center"
          pl="5rem"
          sx={{ columnGap: "2rem" }}
        >
          <Link to="/">Home</Link>
          <a href="#exercises">Exercises</a>
        </Stack>
        <Typography>
          <a className="btn" href="#contact">
            Contact Us
          </a>
        </Typography>
      </Stack>
    </Stack>
  );
}
