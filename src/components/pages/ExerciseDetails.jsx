import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData, { fetchYoutubeVideos } from "../../lib/fetchData";
import Details from "../Details";
import ExerciseVideos from "../ExerciseVideos";
import SimilarExercises from "../SimilarExercises";

export default function ExerciseDetails({ exercises }) {
  const [exerciseDetails, SetexerciseDetails] = useState({});
  const [similarExercises, SetsimilarExercises] = useState([]);
  const [exerciseVideos, SetexerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(`exercise/${id}`);
      SetexerciseDetails(exerciseDetailData);

      const exerciseVideosData = await fetchYoutubeVideos(
        `search?query=${exerciseDetailData.name} exercise&type=v`
      );
      SetexerciseVideos([...exerciseVideosData.contents]);

      const targetMuscleExercisesData = await fetchData(
        `target/${exerciseDetailData.target}`
      );
      SetsimilarExercises([...targetMuscleExercisesData]);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Stack sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Details details={exerciseDetails} />
      <ExerciseVideos exerciseVideos={exerciseVideos} />
      <SimilarExercises props={similarExercises} />
    </Stack>
  );
}
