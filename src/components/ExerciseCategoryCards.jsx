import { Stack } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useDrag from "../lib/useDrag";
import ExerciseCategoryCard from "./ExerciseCategoryCard";

function ExerciseCategoryCards({ bodyParts }) {
  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove } = useDrag();
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  return (
    <Stack onMouseLeave={dragStop}>
      <ScrollMenu
        onMouseDown={() => dragStart}
        onMouseUp={() => dragStop}
        onMouseMove={handleDrag}
      >
        {bodyParts.map((item, index) =>
          item !== "all" ? (
            <ExerciseCategoryCard item={item} key={index} />
          ) : null
        )}
      </ScrollMenu>
    </Stack>
  );
}
export default ExerciseCategoryCards;
