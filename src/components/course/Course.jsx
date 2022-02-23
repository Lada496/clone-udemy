import React from 'react'

import { Star, StarHalf } from '@mui/icons-material';
import { ListItemSecondaryAction } from '@mui/material';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;

  max-width: 37.5rem;
  min-width: 17.3rem;

  color: #1c1d1f;
`;

const CourseImgWrapper = styled.div`
  width: 100%;
`;
const CourseImg = styled.img`
  display: block;
  /* width:240px;
  height:135px; */
  width:100%;
  height: 100%;
`;

const CourseTextWrapper = styled.div`
  font-size:1.6rem;
  font-weight: 400;
  line-height: 1.4;
  width: 100%;
`;
const CourseTitle = styled.h3`
  font-size: 1.6rem;
  height: 36px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: normal;
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
  letter-spacing: -.02rem;
  font-weight: 700;
  line-height: 1.2;
`;
const CourseDes = styled.div`
  height:18px;
  font-size: 1.2rem;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 0.4rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
`;

const CourseRateWrapper = styled.div`
  display: flex;
  margin-bottom: 0.4rem;
`;
const CourseRateScore = styled.span`
    margin-right: 0.4rem;
    color: #b4690e;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1.4rem;
`;
const CourseRateStars = styled.div``;
const CourseRateStar = styled.span``;
const CourseRateReviewerNum = styled.span`
  color:#6a6f73;
  margin-left: 0.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.2rem;
`;

const CoursePrice = styled.div`
    letter-spacing: -.02rem;
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
`;

const CourseMark = styled.div`
    display: inline-block;
    padding: 0.4rem 0.8rem;
    white-space: nowrap;
    background-color: #eceb98;
    color: #3d3c0a;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -.02rem;
    font-size: 1.2rem;
`;



const Course = ( {item} ) => {
  let increment =0;
  let max =5;

  return (

    <Container>
        <CourseImgWrapper>
            <CourseImg src={item.img}></CourseImg>
        </CourseImgWrapper>

        <CourseTextWrapper >
            <CourseTitle >{item.title}</CourseTitle>
            <CourseDes >{item.desc}</CourseDes>
        

            <CourseRateWrapper>
                <CourseRateScore>{item.rateScore}</CourseRateScore>
                <CourseRateStars>
                    <CourseRateStar>
                    
                    { [...Array(5)].map((star, index) => {

                       while(increment < item.rateScore) {

                          if( (item.rateScore-increment)<1){
                            return (<StarHalf style={{color:"#e59819"}}></StarHalf>)
                          }
                          increment++;
                          return (<Star style={{color:"#e59819"}}></Star>)
                      }
                      while(max > item.rateScore) {        
                          max--;
                       
                          return (<Star style={{color:"gray"}}></Star>)
                      }
     
                    })}    

                    </CourseRateStar>
                </CourseRateStars>
                <CourseRateReviewerNum>({item.reviewerNum})</CourseRateReviewerNum>
            </CourseRateWrapper>

            <CoursePrice>CA${item.price}</CoursePrice>

            {item.mark &&<CourseMark>{item.mark}</CourseMark> }
        </CourseTextWrapper>
    </Container>
  )
}

export default Course
