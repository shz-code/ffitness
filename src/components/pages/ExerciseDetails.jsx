import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useGetExerciseQuery } from "../../features/api/exercisesApiSlice";
import Details from "../Details";
import ExerciseVideos from "../ExerciseVideos";
import Loader from "../Loader";
import SimilarExercises from "../SimilarExercises";

const sttStyle = {
  borderRadius: "100%",
  width: "50px",
  height: "50px",
};

export default function ExerciseDetails() {
  const { id } = useParams();

  const { data: exercise, isLoading } = useGetExerciseQuery(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <Stack sx={{ textAlign: { xs: "center", md: "left" } }}>
      {isLoading && <Loader />}
      {!isLoading && exercise?.id && <Details details={exercise} />}
      {!isLoading && exercise?.id && <ExerciseVideos name={exercise.name} />}
      {!isLoading && exercise?.id && (
        <SimilarExercises target={exercise.target} />
      )}
      <ScrollToTop smooth color="#FF6158" style={sttStyle} />
    </Stack>
  );
}
