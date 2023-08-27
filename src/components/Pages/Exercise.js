import React, { useContext, useEffect, useState } from "react";
import { SingleExercise } from "./SingleExercise";
import { useParams } from "react-router-dom";
import {
  exerciseOptions,
  exerciseVideosOptions,
  fetchData,
} from "../Apis/fetchData";
import { ExerciseVideosComp } from "./ExerciseVideosComp";
import { Loader } from "../Loader";
import { SimilarExercises } from "./SimilarExercises";
import { myContext } from "../../contextApi/context";
import { Footer } from "../Footer/Footer";

export const Exercise = () => {
  const { exerciseData } = useContext(myContext);
  const [singleData, setSingleData] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarTarget, setSimilarTarget] = useState([]);
  const [similarEquip, setSimilarEquip] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetching = async () => {
      const exerciseRes = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setSingleData(exerciseRes);

      const exerciseVideosRes = await fetchData(
        `https://simple-youtube-search.p.rapidapi.com/search?query=${exerciseRes.name}`,
        exerciseVideosOptions
      );
      setExerciseVideos(exerciseVideosRes.results);

      const filterTarget = await exerciseData.filter((ele) => {
        return ele.target === exerciseRes.target;
      });
      const filterEquip = await exerciseData.filter((ele) => {
        return ele.equipment === exerciseRes.equipment;
      });
      setSimilarTarget(filterTarget);
      setSimilarEquip(filterEquip);

      setIsLoading(false);
    };

    fetching();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div>
      {isLoading ? <Loader /> : <SingleExercise singleData={singleData} />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ExerciseVideosComp
            exerciseVideos={exerciseVideos}
            singleData={singleData}
          />
          <SimilarExercises
            similarEx={similarTarget}
            name={singleData.target}
          />
          <SimilarExercises
            similarEx={similarEquip}
            name={singleData.equipment}
          />
        </>
      )}
      <Footer />
    </div>
  );
};
