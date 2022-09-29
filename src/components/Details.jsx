import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import bodyPartImg from "../assets/img/bodyPart.svg";
import equipmentImg from "../assets/img/equipment.svg";
import targetImg from "../assets/img/target.svg";

export default function Details({ details }) {
  const { bodyPart, equipment, target, gifUrl, name } = details;
  return (
    <Stack sx={{ width: { xs: "95%", md: "80%" } }} m="auto" py={4} id="home">
      <Stack
        gap="60px"
        sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
      >
        <Box width="40%">
          <img
            style={{
              width: "100%",
              objectFit: "contain",
              borderTop: "5px solid #FF6158",
              borderRadius: "0.5rem",
            }}
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
          <Stack pt={4} sx={{ display: "grid", rowGap: "1rem" }}>
            <Stack direction="row" alignItems="center" gap={3}>
              <img src={bodyPartImg} alt="" className="details-box-img" />
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "uppercase" }}
              >
                {" "}
                {bodyPart || <p>BodyPart</p>}{" "}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={3}>
              <img src={equipmentImg} alt="" className="details-box-img" />
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "uppercase" }}
              >
                {" "}
                {equipment || <p>Equipment</p>}{" "}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={3}>
              <img src={targetImg} alt="" className="details-box-img" />
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "uppercase" }}
              >
                {" "}
                {target || <p>Target Muscle</p>}{" "}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
