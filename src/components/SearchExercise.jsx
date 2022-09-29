import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import React from "react";
import badypartImg from "../assets/img/bodyPart.svg";
import SectionHeader from "./SectionHeader";

export default function SearchExercise() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tes");
  };
  return (
    <Stack>
      <SectionHeader p1="Search any" p2="exercise" />
      <Stack sx={{ width: { xs: "95%", md: "80%" } }} m="auto">
        <Stack
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: { xs: "95%", md: "50%" },
            display: "grid",
            rowGap: "1rem",
          }}
          m="auto"
          py={4}
          className="search-form"
        >
          <Stack position="relative" direction="row" style={{ width: "100%" }}>
            <input required type="text" />{" "}
            <Stack position="absolute" sx={{ top: "0", right: "0px" }}>
              <img src={badypartImg} alt="Icon" className="logo" />
            </Stack>
          </Stack>
          <button type="submit" className="btn">
            <SearchIcon /> <span>Search</span>
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
}
