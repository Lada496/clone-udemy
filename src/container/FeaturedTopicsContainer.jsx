import React from "react";
import styled from 'styled-components';

const FeaturedTopics = styled.div`
  margin-top: 4.8rem;
  background-color: #f7f9fa;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
// const LoggedOutFormTrendingTopics = styled.div``
const FeaturedTopicsSection = styled.div`
  padding: 6.4rem 2.4rem;
`
const FeaturedTopicsSectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2.4rem;
`
const FeaturedTopicsContain = styled.div`
  width: 100%;
  max-width: 134rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const FeaturedTopicsCategory = styled.div`
  padding-right: 0.8rem;
  /* display: inline-block; */
  margin-bottom: 2.4rem;
`
const FeaturedTopicsTitle = styled.h2`
  margin-bottom: 2.4rem;
  font-size: 1.9rem;
`
const FeaturedTopicsTopic = styled.div`
  margin-top: 2.4rem;
`
const FeaturedTopicsLink = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: underline;
  color: #5624d0;
  cursor: pointer;
`
const FeaturedTopicsStudents = styled.div`
  font-size: 1.4rem;
  margin-top: 0.8rem;
  color: #6a6f73;
`
const FeaturedTopicsBtn = styled.a`
  width: auto;
  color: #1c1d1f;
  background-color: transparent;
  border: 1px solid #1c1d1f;
  text-decoration: none;
  /* height: 4rem; */
  /* position: relative; */
  /* align-items: center;  ?? */
  /* justify-content: center; */
  padding: 1.2rem;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.2;
  font-size: 1.4rem;
`

const FeaturedTopicsContainer = () => {
  return (
    <FeaturedTopics>
      <div className="logged-out-form-trending-topics">
        <FeaturedTopicsSection>
          <FeaturedTopicsSectionTitle>Featured topics by category</FeaturedTopicsSectionTitle>
          <FeaturedTopicsContain>

            <FeaturedTopicsCategory>
              <FeaturedTopicsTitle>Development</FeaturedTopicsTitle>
              <div>
                <div>
                  <div><FeaturedTopicsLink href="#">Python</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>33,679,324 students</FeaturedTopicsStudents>
                </div>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">Web Development</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>10,617,872 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">Machine Learning</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>6,635,995 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
              </div>
            </FeaturedTopicsCategory>

            <FeaturedTopicsCategory>
              <FeaturedTopicsTitle>Business</FeaturedTopicsTitle>
              <div>
                <div>
                  <div><FeaturedTopicsLink href="#">Financial Analysis</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>1,142,265 students</FeaturedTopicsStudents>
                </div>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">SQL</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>5,299,930 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">PMP</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>1,580,869 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
              </div>
            </FeaturedTopicsCategory>

            <FeaturedTopicsCategory>
              <FeaturedTopicsTitle>IT and Software</FeaturedTopicsTitle>
              <div>
                <div>
                  <div><FeaturedTopicsLink href="#">AWS Certification</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>5,262,105 students</FeaturedTopicsStudents>
                </div>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">Ethical Hacking</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>10,288,537 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">Cyber Security</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>3,714,347 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
              </div>
            </FeaturedTopicsCategory>

            <FeaturedTopicsCategory>
              <FeaturedTopicsTitle>Design</FeaturedTopicsTitle>
              <div>
                <div>
                  <div><FeaturedTopicsLink href="#">Photoshop</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>10,467,011 students</FeaturedTopicsStudents>
                </div>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">Graphic Design</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>3,171,160 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
                <FeaturedTopicsTopic>
                  <div><FeaturedTopicsLink href="#">Drawing</FeaturedTopicsLink></div>
                  <FeaturedTopicsStudents>2,341,110 students</FeaturedTopicsStudents>
                </FeaturedTopicsTopic>
              </div>
            </FeaturedTopicsCategory>
          
            <FeaturedTopicsBtn href="#"><span>Explore more topics</span></FeaturedTopicsBtn>
          </FeaturedTopicsContain>
        </FeaturedTopicsSection>
      </div>
    </FeaturedTopics>
  );
};

export default FeaturedTopicsContainer;
