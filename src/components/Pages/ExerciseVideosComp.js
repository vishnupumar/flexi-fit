import React from "react";
import "./ExerciseVideosComp.css";

export const ExerciseVideosComp = ({ exerciseVideos, singleData }) => {
  console.log(exerciseVideos);
  return (
    <div className="exercise-videos-container">
      <h1>
        Watch <span className="red">{singleData.name}</span> exercise videos
      </h1>
      <div className="exercise-videos">
        {exerciseVideos?.map((ele, idx) => {
          return (
            <a target="_blank" href={ele.url} key={idx}>
              <img
                src={ele.thumbnail.url}
                alt="youtube video"
                width={"300px"}
              />
              <p className="video-time">{ele.duration_formatted}</p>
              <p>{ele.title.slice(0, 30)}</p>
              <h4>{ele.channel.name.slice(0, 30)}</h4>
            </a>
          );
        })}
      </div>
    </div>
  );
};
