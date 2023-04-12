import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../lib/fetchData";
import Details from "../Details";
import ExerciseVideos from "../ExerciseVideos";
import SimilarExercises from "../SimilarExercises";

export default function ExerciseDetails({ exercises }) {
  const [exerciseDetails, SetexerciseDetails] = useState({});
  const [similarExercises, SetsimilarExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(`exercise/${id}`);
      SetexerciseDetails(exerciseDetailData);

      // const targetMuscleExercisesData = await fetchData(
      //   `target/${exerciseDetailData.target}`
      // );
      // SetsimilarExercises([...targetMuscleExercisesData]);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Stack sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Details details={exerciseDetails} />
      {exerciseDetails?.name && <ExerciseVideos name={exerciseDetails.name} />}
      <SimilarExercises props={similarExercises} />
    </Stack>
  );
}
