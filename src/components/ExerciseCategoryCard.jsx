import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBodyPart } from "../features/filter/filterSlice";

export default function ExerciseCategoryCard({ item }) {
  const dispatch = useDispatch();

  const { selectedBodyPart } = useSelector((state) => state.filter);

  return (
    <Stack
      type="button"
      onClick={() => dispatch(setSelectedBodyPart(item))}
      sx={{
        display: "grid",
        rowGap: "0.5rem",
        background: selectedBodyPart === item ? "#FF6158" : "#191919",
        width: "250px",
        borderRadius: "0.5rem",
        height: "220px",
      }}
      className="card"
      py={3}
      px={{ xs: "0", md: 3 }}
    >
      <Typography color={selectedBodyPart === item ? "white" : "#FF6158"}>
        <FitnessCenterIcon />
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
        {item.toUpperCase()}
      </Typography>
      <Typography sx={{ fontSize: "0.8rem" }}>
        <span style={{ textTransform: "capitalize" }}>
          Check out {item} exercises that helps to&nbsp;
          {item === "back"
            ? "Build big muscles in your back form your physique's appearance and can minimize pain."
            : item === "cardio"
            ? "strengthens your immune system."
            : item === "chest"
            ? "enhance your quality of life."
            : item === "lower arms"
            ? "Increased arm strength will increase results in any workouts."
            : item === "lower legs"
            ? "turn you faster and stronger."
            : item === "neck"
            ? "release tension, tightness, and stiffness."
            : item === "shoulders"
            ? "promote healthy movement patterns and improve posture and muscle function."
            : item === "upper arms"
            ? "improve your posture."
            : item === "upper legs"
            ? "improve your big lifts."
            : item === "waist"
            ? "get an hourglass figure."
            : "Lead a healthy life."}
        </span>
      </Typography>
    </Stack>
  );
}
