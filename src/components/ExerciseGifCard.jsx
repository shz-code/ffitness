import { Stack, Typography } from "@mui/material";
import React, { memo } from "react";
import { Link } from "react-router-dom";

function ExerciseGifCard({ item, ...rest }) {
  return (
    <Link to={`/exercise/${item.id}`} style={{ ...rest }} draggable="false">
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
            alt={item.name}
            draggable="false"
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
