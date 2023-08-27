import React from "react";
import { HeroSection } from "./HeroSection";
import { HorizontalScroll } from "./HorizontalScroll";
import { ExerciseComp } from "./ExercisesComp";
import { Footer } from "../Footer/Footer";

export const Main = () => {
  return (
    <div>
      <HeroSection />
      <HorizontalScroll />
      <ExerciseComp />
      <Footer />
    </div>
  );
};
