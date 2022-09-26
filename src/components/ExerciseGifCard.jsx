import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

function ExerciseGifCard({ item }) {
  return (
    <Link to={`/exercise/${item.id}`}>
      <Stack
        width="350px"
        sx={{
          background: "#191919",
          borderRadius: "0.5rem",
          borderTop: "5px solid red",
          cursor: "pointer",
        }}
        className="exercise-gif-card"
      >
        <Stack position="relative" sx={{ display: "flex", columnGap: "2rem" }}>
          <img
            style={{ borderRadius: "0.5rem" }}
            src={item.gifUrl}
            alt="nunu"
          />
          <div className="gif-card-status">
            <span>{item.bodyPart.toUpperCase()}</span>
            <span>{item.target.toUpperCase()}</span>
          </div>
        </Stack>
        <Typography
          variant="h5"
          p={1}
          sx={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          {item.name.toUpperCase()}
        </Typography>
      </Stack>
    </Link>
  );
}

export default memo(ExerciseGifCard);
