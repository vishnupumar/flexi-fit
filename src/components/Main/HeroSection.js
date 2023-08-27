import React from "react";
import "./HeroSection.css";
import { useContext } from "react";
import { myContext } from "../../contextApi/context";
import { useState } from "react";
import HeroImage from "../../assets/pexels-elina-fairytale-3822355.jpg";

export const HeroSection = () => {
  const { setSearchedItem } = useContext(myContext);
  const [searchVal, setSearchVal] = useState("");

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h3>Fitness Club</h3>
          <h1>
            Sweat, Smile
            <br /> And Repeat
          </h1>
          <p>Check out most effective exercises personalized to you</p>
          <button
            onClick={() => {
              window.scrollTo({ top: 800, behavior: "smooth" });
            }}
          >
            Explore Exercises
          </button>
        </div>
        <div className="hero-middle">
          <h1>Exercises</h1>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="hero" width={400} />
        </div>
      </div>
      <div className="hero-search-heading">
        <h1>
          Awesome Exercises You
          <br />
          Should Know
        </h1>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setSearchedItem(searchVal.toLowerCase());
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
