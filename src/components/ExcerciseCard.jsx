import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPartsContext from "../lib/BodyPartsContext";

export default function ExcerciseCard({ item }) {
  const bodyPart = useContext(BodyPartsContext);
  const { selectedBodyPart, SetselectedBodyPart } = bodyPart;

  return (
    <Stack
      type="button"
      onClick={() => SetselectedBodyPart(item)}
      sx={{
        display: "grid",
        rowGap: "0.5rem",
        background: selectedBodyPart === item ? "red" : "#ffffff70",
        width: "250px",
        borderRadius: "0.5rem",
      }}
      className="card"
      py={3}
      px={{ xs: "0", md: 3 }}
    >
      <Typography>
        <AccessibilityNewIcon />
      </Typography>
      <Typography variant="caption">{item.toUpperCase()}</Typography>
      <Typography sx={{ fontSize: "0.8rem" }}>
        <span conten className="secondary_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          labore quae incidunt debitis voluptate eos!{" "}
        </span>
      </Typography>
      <a href="#none" style={{ color: "white" }}>
        Join Now
      </a>
    </Stack>
  );
}
