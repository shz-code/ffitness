import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function Details({ details }) {
  const { bodyPart, equipment, target, gifUrl, name } = details;
  return (
    <Stack sx={{ width: { xs: "95%", md: "80%" } }} m="auto" py={4}>
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <Box>
          <img
            style={{ width: "100%", objectFit: "contain" }}
            src={gifUrl}
            alt={name}
          />
        </Box>
        <Box sx={{ gap: { lg: "35px", xs: "20px" } }}>
          <Typography
            sx={{ fontSize: { lg: "64px", xs: "30px" } }}
            fontWeight={700}
            textTransform="capitalize"
          >
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "24px", xs: "18px" } }}
            color="#4F4C4C"
          >
            Exercises keep you strong.
            <span style={{ textTransform: "capitalize" }}>{name}</span> bup is
            one of the best <br /> exercises to target your {target}. It will
            help you improve your <br /> mood and gain energy.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
