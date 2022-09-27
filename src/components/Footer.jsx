import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Logo from "./Logo";
import LogoTxt from "./LogoTxt";

export default function Footer() {
  return (
    <Stack sx={{ background: "grey" }} py={4} mt={4}>
      <Stack sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        <Stack
          sx={{ display: "grid", gridTemplateColumns: "repeat(2,auto)" }}
          justifyContent="space-between"
        >
          <Stack>
            <Box>
              <Logo /> <LogoTxt />
            </Box>
            <Typography variant="caption">
              Helps for ideal body <br /> ffitness
            </Typography>
          </Stack>
          <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
            Follow us: <FacebookIcon /> <GitHubIcon />
          </Typography>
        </Stack>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Developed by @shz-code
        </Typography>
      </Stack>
    </Stack>
  );
}
