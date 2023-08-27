import React from "react";
import "./SingleExercise.css";

export const SingleExercise = ({ singleData }) => {
  return (
    <div>
      <div className="singleData-container">
        <img src={singleData.gifUrl} alt="exercise" />
        <div>
          <h2>{singleData.name}</h2>
          <p className="singleData-para">
            Exercise keep you strong. {singleData.name} is one of the best
            exercise to target your {singleData.target}. It will help you
            improve your mood and gain energy.
          </p>
          <p className="singleData-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff2825"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <p>{singleData.bodyPart}</p>
          </p>
          <p className="singleData-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-stretching"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff2825"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M5 20l5 -.5l1 -2" />
              <path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
            </svg>
            <p>{singleData.target}</p>
          </p>
          <p className="singleData-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-weight"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff2825"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z" />
            </svg>
            <p>{singleData.equipment}</p>
          </p>
        </div>
      </div>
    </div>
  );
};
