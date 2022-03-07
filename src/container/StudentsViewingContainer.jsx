import React from "react";

import { courses, sugestedCourses } from "../data/student-viewing-data/data";

import Course from "../components/course/Course";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from 'react';
import ItemsCarousel from "react-items-carousel";


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

const CopyStudentsViewingContainer = () => {
  const [activeItemIndex1, setActiveItemIndex1] = useState(0);
  const [activeItemIndex2, setActiveItemIndex2] = useState(0);
  const chevronWidth = 50;

  return (
    <Container>
      <CoursesList>
        <StudentsViewingTitle>StudentsViewing</StudentsViewingTitle>

        <CourseWrapper>       
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex1}
              activeItemIndex={activeItemIndex1}
              numberOfCards={5}
              gutter={15}
              leftChevron={<Arrow direction="left">{ 
                              <FontAwesomeIcon
                                style={{ color: "white", fontSize: "2rem" }}
                                icon={faAngleLeft}
                              />}
                          </Arrow>}
              rightChevron={<Arrow direction="right">{ 
                              <FontAwesomeIcon
                                style={{ color: "white", fontSize: "2rem" }}
                                icon={faAngleRight}
                              />}
                            </Arrow>}
              outsideChevron={false}
              chevronWidth={chevronWidth}
            >
      
                {courses.map((item) => (
                    <Course item={item} key={item.id} />
                ))}

            </ItemsCarousel>
        </CourseWrapper>

      </CoursesList>

      <CoursesList>
        <StudentsViewingTitle>
          Because you searched for{" "}
          <span style={{ color: "purple" }}>"zero to master"</span>{" "}
        </StudentsViewingTitle>
       
        <CourseWrapper>       
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex2}
              activeItemIndex={activeItemIndex2}
              numberOfCards={5}
              gutter={15}
              leftChevron={<Arrow direction="left">{ 
                              <FontAwesomeIcon
                                style={{ color: "white", fontSize: "2rem" }}
                                icon={faAngleLeft}
                              />}
                          </Arrow>}
              rightChevron={<Arrow direction="right">{ 
                              <FontAwesomeIcon
                                style={{ color: "white", fontSize: "2rem" }}
                                icon={faAngleRight}
                              />}
                            </Arrow>}
              outsideChevron={false}
              chevronWidth={chevronWidth}
            >
      
                {sugestedCourses.map((item) => (
                    <Course item={item} key={item.id} />
                ))}

            </ItemsCarousel>
        </CourseWrapper>
  
      </CoursesList>
    </Container>
  );
};

export default CopyStudentsViewingContainer;
