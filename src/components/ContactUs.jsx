import SendIcon from "@mui/icons-material/Send";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import SearchImage from "../assets/img/bodyPart.svg";

export default function ContactUs() {
  const [contact, setContact] = useState("");
  return (
    <div id="contact">
      <Typography
        variant="h2"
        p={1}
        sx={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Get In Touch
      </Typography>
      <Stack sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        <Stack
          component="form"
          //   onSubmit={handleSubmit}
          sx={{
            width: { xs: "95%", md: "80%" },
            display: "grid",
            rowGap: "1rem",
          }}
          m="auto"
          py={4}
          className="search-form"
        >
          <Stack position="relative" direction="row" style={{ width: "100%" }}>
            <input
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              type="email"
              placeholder="boss@ffitness.com"
            />{" "}
            <Stack position="absolute" sx={{ top: "0", right: "0px" }}>
              <img src={SearchImage} alt="Icon" className="logo" />
            </Stack>
          </Stack>
          <button type="submit" className="btn btn-secondary">
            <SendIcon /> <span>Submit</span>
          </button>
        </Stack>
      </Stack>
    </div>
  );
}
