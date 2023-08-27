import React from "react";
import { Link } from "react-router-dom";
import "./SimilarExercises.css";

export const SimilarExercises = ({ similarEx, name }) => {
  return (
    <div className="similar-exercise-container">
      <h1>
        Similar <span className="red">{name}</span> exercises
      </h1>
      <div className="similar-exercises">
        {similarEx?.map((ele) => {
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
                <img src={ele.gifUrl} width={"100%"} alt={"exercise"} />
                <button className="targetBtn">{ele.target}</button>
                <button className="bodypartBtn">{ele.bodyPart}</button>
                <h3>{ele.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
