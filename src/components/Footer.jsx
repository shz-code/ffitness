import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ContactUs from "./ContactUs";
import Logo from "./Logo";
import LogoTxt from "./LogoTxt";

export default function Footer() {
  return (
    <Stack sx={{ background: "#191919" }} py={4} mt={4}>
      <Stack sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        <ContactUs />
        <Stack sx={{ display: "grid", rowGap: "1rem", textAlign: "center" }}>
          <Stack>
            <Stack
              direction="row"
              sx={{ width: "200px", columnGap: "0.5rem" }}
              pb={3}
              m="auto"
            >
              <Logo className="logo-footer" /> <LogoTxt />
            </Stack>
            <Typography variant="subtitle1">
              Get a Beast Body <br /> ffitness
            </Typography>
          </Stack>
          <Typography variant="h6">
            Developed by{" "}
            <a href="https://github.com/shz-code" style={{ color: "#FF6158" }}>
              @shz-code
            </a>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bolder",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "0.5rem",
            }}
          >
            <a href="https://www.facebook.com/fb.shahidul.alam">
              <FacebookIcon />
            </a>
            <a href="https://github.com/shz-code">
              <GitHubIcon />
            </a>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
