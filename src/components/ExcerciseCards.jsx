import { Stack } from "@mui/material";
import React, { memo } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useDrag from "../lib/useDrag";
import ExcerciseCard from "./ExcerciseCard";

function ExcerciseCards({ props }) {
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
        {props.bodyParts.map((item, index) =>
          item !== "all" ? <ExcerciseCard item={item} key={index} /> : null
        )}
      </ScrollMenu>
    </Stack>
  );
}
export default memo(ExcerciseCards);
