import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "../components/CourseSelection/Carousel";
import { pythonData } from "../data/course-selection-data/data";
import { js } from "../data/course-selection-data/data";
import { excel } from "../data/course-selection-data/data";
import { aws } from "../data/course-selection-data/data";
import { dataScience } from "../data/course-selection-data/data";
const CourseSelectionContainer = () => {
  const [triggerElement, setTriggerElement] = useState("Python");

  return (
    <>
      <H1>A broad selection of courses</H1>
      <Subtitle>
        Choose from 183,000 online video courses with new additions published
        every month
      </Subtitle>
      <DefaultBtn onClick={() => setTriggerElement("Python")}>
        Python
      </DefaultBtn>
      <Button onClick={() => setTriggerElement("JS")}>JS</Button>
      <Button onClick={() => setTriggerElement("Aws")}>AWS</Button>
      <Button onClick={() => setTriggerElement("Excel")}>Excel</Button>
      <Button onClick={() => setTriggerElement("DataScience")}>
        Data Science
      </Button>
      <BorderStyle>
        <MainTitle>Expand your career opportunities with Python</MainTitle>
        <Subtitle>
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will...
        </Subtitle>
        <PythonBtn>Explore Python</PythonBtn>
        <SliderContainer>
          {triggerElement === "Python" && <Carousel data={pythonData} />}
          {triggerElement === "JS" && <Carousel data={js} />}
          {triggerElement === "Aws" && <Carousel data={aws} />}
          {triggerElement === "DataScience" && <Carousel data={dataScience} />}
          {triggerElement === "Excel" && <Carousel data={excel} />}
        </SliderContainer>
      </BorderStyle>
    </>
  );
};

const BorderStyle = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: #c4c4c4;
  padding: 2rem;
  margin: 2rem;
`;

const H1 = styled.h1`
  font-family: Georgia;
  font-size: 4rem;
  padding: 1rem;
`;

const Subtitle = styled.p`
  font-size: 20px;
  padding: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #787878;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const DefaultBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
`;

const MainTitle = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const PythonBtn = styled.button`
  background-color: transparent;
  border: 1px solid #000;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const SliderContainer = styled.div`
  margin-top: 20px;
`;
export default CourseSelectionContainer;
