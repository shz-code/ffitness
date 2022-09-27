import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../lib/fetchData";
import Details from "../Details";
import SimilarExercises from "../SimilarExercises";

export default function ExerciseDetails({ exercises }) {
  const [exerciseDetails, SetexerciseDetails] = useState({});
  const [similarExercises, SetsimilarExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData(`exercise/${id}`).then((data) => {
      SetexerciseDetails({ ...data });
    });
  }, [id]);
  const bodyPart = exerciseDetails.bodyPart;
  useEffect(() => {
    fetchData(`bodyPart/${bodyPart}`).then((data) => {
      SetsimilarExercises([...data]);
    });
  }, [bodyPart]);

  return (
    <Stack sx={{ textAlign: { xs: "center", md: "left" } }}>
      <Details details={exerciseDetails} />
      <SimilarExercises props={similarExercises} />
    </Stack>
  );
}
