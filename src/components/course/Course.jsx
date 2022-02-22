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
            <CourseImg src='data:image/jpeg;base64,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'/>
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
                          console.log('increment',increment);
                          return (<Star style={{color:"#e59819"}}></Star>)
                        // return (<Star style={{color:"#e59819", clipPath: "inset(0px 40% 0px 0px)"}}></Star>)
                      }
                      while(max > item.rateScore) {        
                          max--;
                          console.log('max',max);
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
