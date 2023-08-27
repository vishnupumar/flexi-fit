import React, { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../../contextApi/context";
import { Link } from "react-router-dom";
import "./ExercisesComp.css";
import { exerciseOptions, fetchData } from "../Apis/fetchData";

export const ExerciseComp = () => {
  const {
    searchedData,
    setSearchedData,
    setExerciseData,
    setBodyParts,
    pageNum,
    setPageNum,
  } = useContext(myContext);
  const perPage = 9;
  const lastIndex = pageNum * perPage;
  const firstIndex = lastIndex - perPage;
  const singlePageData = searchedData.slice(firstIndex, lastIndex);

  useEffect(() => {
    const fetching = async () => {
      const exerciseRes = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const bodyRes = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setExerciseData(exerciseRes);
      setSearchedData(exerciseRes);
      setBodyParts(["all", ...bodyRes]);
    };

    fetching();
  }, []);

  return (
    <div className="exercises-container">
      <div className="exercise-heading">
        <h1>Showing Results</h1>
      </div>
      <div className="exercises-list">
        {singlePageData.length > 0 &&
          singlePageData.map((ele) => {
            return (
              <Link to={`/exercise/${ele.id}`}>
                <div
                  className="exercise-card"
                  style={{
                    width: "20rem",
                    margin: "10px",
                    borderTop: "2px solid rgb(236, 50, 50)",
                  }}
                >
                  <img src={ele.gifUrl} width={"100%"} alt="exercise"/>
                  <button className="targetBtn">{ele.target}</button>
                  <button className="bodypartBtn">{ele.bodyPart}</button>
                  <h3>{ele.name}</h3>
                </div>
              </Link>
            );
          })}
      </div>
      {searchedData.length > 9 && (
        <div className="page-numbers-div">
          <button
            onClick={() => {
              setPageNum(pageNum - 1);
              window.scrollTo({ top: 1000, behavior: "smooth" });
            }}
            disabled={pageNum === 1 && "true"}
          >
            -
          </button>
          <span>{pageNum}</span>
          <button
            onClick={() => {
              setPageNum(pageNum + 1);
              window.scrollTo({ top: 1000, behavior: "smooth" });
            }}
            disabled={pageNum === Math.ceil(searchedData.length / 9) && "true"}
          >
            +
          </button>
          <p>
            {pageNum} of {Math.ceil(searchedData.length / 9)}
          </p>
        </div>
      )}
    </div>
  );
};
