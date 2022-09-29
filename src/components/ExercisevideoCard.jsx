import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function ExercisevideoCard({ item }) {
  const { video } = item;
  const {
    videoId,
    channelId,
    channelName,
    title,
    viewCountText,
    thumbnails,
    lengthText,
  } = video;
  return (
    <Card
      sx={{
        boxShadow: "none",
        width: { xs: "358px", md: "320px" },
        background: "#191919",
        borderRadius: "0.5rem",
        borderTop: "5px solid red",
        cursor: "pointer",
        textAlign: "left",
      }}
      className="exercise-video-card"
    >
      <a
        href={`https://youtu.be/${videoId}`}
        rel="noreferrer"
        target="_blank"
        draggable="false"
      >
        <CardMedia
          image={thumbnails[0]?.url}
          alt={title}
          sx={{
            width: { xs: "100%", sm: "358px" },
            height: 200,
            borderRadius: "0.5rem",
          }}
        />
        <span className="duration">{lengthText}</span>
      </a>
      <CardContent
        sx={{
          backgroundColor: "#191919",
          display: "grid",
          rowGap: "0.5rem",
        }}
      >
        <a
          href={`https://youtu.be/${videoId}`}
          rel="noreferrer"
          target="_blank"
          draggable="false"
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {title.length > 30 ? <span> {title.slice(0, 30)}... </span> : title}
          </Typography>
        </a>

        <Typography
          variant="subtitle2"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <a
            href={`https://www.youtube.com/channel/${channelId}`}
            rel="noreferrer"
            target="_blank"
          >
            <span style={{ color: "red" }}>{channelName}</span>
          </a>
          <span style={{ color: "gray" }}>{viewCountText}</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
