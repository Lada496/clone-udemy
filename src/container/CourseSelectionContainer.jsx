import React, { useState, useRef } from "react";
import Carousel from "../components/Carousel";
import { pythonData } from "../course-selection-data/data";
import { js } from "../course-selection-data/data";
const CourseSelectionContainer = () => {
  const [triggerElement, setTriggerElement] = useState("Python");

  return (
    <>
      <button onClick={() => setTriggerElement("Python")}>Python</button>
      <button onClick={() => setTriggerElement("JS")}>JS</button>
      {triggerElement === "Python" && <Carousel data={pythonData} />}
      {triggerElement === "JS" && <Carousel data={js} />}
      {/* <Carousel /> */}
    </>
  );
};

export default CourseSelectionContainer;
