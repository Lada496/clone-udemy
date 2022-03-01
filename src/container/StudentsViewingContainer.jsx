import React from "react";

import { courses, sugestedCourses } from "../data/student-viewing-data/data";

import Course from "../components/course/Course";
import SuggestedCourse from "../components/course/SuggestedCourse";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronRight } from "@mui/icons-material";

const Container = styled.div`
  margin-top: 6.4rem;
  padding-right: 2.4rem;
  padding-left: 2.4rem;
`;
const CoursesList = styled.div`
  margin-top: 4.8rem;
  :hover {
    cursor: pointer;
  }
`;

const StudentsViewingTitle = styled.h2`
  margin-bottom: 1.6rem;

  max-width: 80rem;
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: -0.02rem;
  line-height: 1.2;
`;
const CourseWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.6rem;
  grid-auto-columns: calc((100% - (5 - 1) * 1.6rem) / 5);
  width: 100%;

  position: relative;
`;
const Arrow = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  background-color: black;
  border: 1px solid #6a6f73;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 15%;
  right: ${(props) => props.direction === "right" && "-1.6rem"};
  left: ${(props) => props.direction === "left" && "-1.6rem"};

  margin: auto;
  cursor: pointer;

  z-index: 2;

  :hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  }
`;

const StudentsViewingContainer = () => {
  return (
    <Container>
      <CoursesList>
        <StudentsViewingTitle>StudentsViewing </StudentsViewingTitle>

        <CourseWrapper>
          {courses.map((item) => (
            <Course item={item} key={item.id} />
          ))}

          <Arrow direction="right">
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "2rem" }}
              icon={faAngleRight}
            />
          </Arrow>
        </CourseWrapper>
      </CoursesList>

      <CoursesList>
        <StudentsViewingTitle>
          Because you searched for{" "}
          <span style={{ color: "purple" }}>"zero to master"</span>{" "}
        </StudentsViewingTitle>

        <CourseWrapper>
          {sugestedCourses.map((item) => (
            <SuggestedCourse item={item} key={item.id} />
          ))}

          <Arrow direction="right">
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "2rem" }}
              icon={faAngleRight}
            />
          </Arrow>

          <Arrow direction="left">
            <FontAwesomeIcon
              style={{ color: "white", fontSize: "2rem" }}
              icon={faAngleLeft}
            />
          </Arrow>
        </CourseWrapper>
      </CoursesList>
    </Container>
  );
};

export default StudentsViewingContainer;
