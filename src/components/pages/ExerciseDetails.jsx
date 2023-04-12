import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetExerciseQuery } from "../../features/api/exercisesApiSlice";
import Details from "../Details";
import ExerciseVideos from "../ExerciseVideos";
import SimilarExercises from "../SimilarExercises";

export default function ExerciseDetails() {
  const { id } = useParams();

  const { data: exercise, isLoading } = useGetExerciseQuery(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <Stack sx={{ textAlign: { xs: "center", md: "left" } }}>
      {!isLoading && exercise?.id && <Details details={exercise} />}
      {!isLoading && exercise?.id && <ExerciseVideos name={exercise.name} />}
      {!isLoading && exercise?.id && (
        <SimilarExercises target={exercise.target} />
      )}
    </Stack>
  );
}
