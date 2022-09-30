import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { memo } from "react";

function Hero({ count }) {
  return (
    <Stack pt="5rem" direction={{ xs: "column", md: "row" }} id="home">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: "2rem",
          width: { md: "60%" },
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            display: "inline-block",
            background: "#1f1f1f",
            padding: "2px 10px",
            borderRadius: "0.5rem",
            width: { xs: "100%", md: "70%" },
          }}
        >
          <Paper
            sx={{
              display: "inline",
              padding: "2px 10px",
              borderRadius: "1rem",
            }}
          >
            Start Working Out
          </Paper>
          <span style={{ marginLeft: "0.5rem" }}> Over 1000 Exercises</span>
        </Typography>
        <Typography
          variant="h2"
          sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
        >
          Get the Beast <br />
          <span
            className="hero-text-branding"
            style={{ fontFamily: "Phenomena" }}
          >
            {" "}
            ffitness{" "}
          </span>
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ width: { xs: "100%", md: "70%" }, textTransform: "capitalize" }}
        >
          <span>
            Get the perfect body,{" "}
            <span style={{ color: "#FF6158", textTransform: "lowercase" }}>
              ffitness
            </span>{" "}
            has over 1000 exercises with Gifs and youtube videos to get started.
          </span>
        </Typography>
        <Typography variant="button">
          <a href="#exercises" className="btn">
            Start
          </a>
        </Typography>
        <Stack
          direction="row"
          sx={{
            textAlign: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
          gap={4}
        >
          <Box>
            <Typography variant="h6">{count}</Typography>
            <span>Total Excrcises</span>
          </Box>
          <Box>
            <Typography variant="h6">9</Typography>
            <span>BodyParts</span>
          </Box>
          <Box>
            <Typography variant="h6">18</Typography>
            <span>Target Muscles</span>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          width: { md: "40%" },
          height: { md: "100%", xl: "50%" },
          position: "relative",
          display: { xs: "none", md: "block" },
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://images.unsplash.com/photo-1626337920103-ae64b9c688e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80"
          alt=""
          className="banner_img"
        />
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: { md: "160px", xl: "250px" },
            left: { md: "-240px", xl: "-310px" },
            transform: "rotate(-90deg)",
            zIndex: "-1",
            fontSize: { md: "6rem", xl: "8rem" },
          }}
        >
          <span className="secondary_text"> FFITNESS </span>
        </Typography>
      </Box>
    </Stack>
  );
}

export default memo(Hero);
