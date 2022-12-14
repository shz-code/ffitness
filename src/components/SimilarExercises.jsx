import LeftArrowIcon from "@mui/icons-material/ArrowBack";
import RightArrowIcon from "@mui/icons-material/ArrowForward";
import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseGifCard from "./ExerciseGifCard";
import SectionHeader from "./SectionHeader";

export default function SimilarExercises({ props }) {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <LeftArrowIcon />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <RightArrowIcon />
      </Typography>
    );
  };

  return (
    <Stack id="exercises">
      <SectionHeader p1="similar" p2="exercises" />
      <Stack position="relative" py={4} mb={{ xs: "4rem", md: "0" }}>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {props.map((item) => (
            <Box key={item.id} ml="0" mr="2rem" draggble="false">
              <ExerciseGifCard item={item} />
            </Box>
          ))}
        </ScrollMenu>
      </Stack>
    </Stack>
  );
}
