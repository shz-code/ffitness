import { Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

export default function HeroBanner() {
  return (
    <Stack pt="5rem" direction={{ xs: "column", md: "row" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          rowGap: "2rem",
          width: { md: "60%" },
          textAlign: { xs: "center", md: "left" },
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
            JOIN
          </Paper>
          <span style={{ marginLeft: "0.5rem" }} className="secondary_text">
            {" "}
            Get more benefit by joining membership
          </span>
        </Typography>
        <Typography
          variant="h2"
          sx={{ textTransform: "uppercase", fontWeight: "bolder" }}
        >
          Helps for ideal <br />
          body fitness
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ width: { xs: "100%", md: "70%" } }}
        >
          <span className="secondary_text">
            Want your body to be healthy, join our program with directions
            accordiong to your body's goals.
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
            <Typography variant="h6">80</Typography>
            <span className="secondary_text">
              Exclusive <br /> Program
            </span>
          </Box>
          <Box>
            <Typography variant="h6">872+</Typography>
            <span className="secondary_text">Members</span>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          width: { md: "40%" },
          height: { md: "100%", xl: "600px" },
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
            top: { md: "150px", xl: "200px" },
            left: { md: "-240px", xl: "-310px" },
            transform: "rotate(-90deg)",
            zIndex: "-1",
            fontSize: { md: "7rem", xl: "9rem" },
          }}
        >
          <span className="secondary_text"> FITNESS </span>
        </Typography>
      </Box>
    </Stack>
  );
}
