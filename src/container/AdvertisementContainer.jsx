import React from "react";
import styled from "styled-components";

// width container?

// font-weight/line-height/font-size/color should be in body tag
const Advertisement = styled.div`
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const AdvertisementSection = styled.div`
  padding: 4rem 0;
  width: 100%;
  max-width: 134rem;
  margin-right: auto;
  margin-left: auto;
`
const AdvertisementContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32rem;
`
const AdvertisementWrapper = styled.div`
  display: flex;
  padding: 0;
`
// initial setting: image width 100%
const AdvertisementImg = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
  max-width: 100%;
  margin: 0 9.6rem 0 0;
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 40rem;
`
// font-family, margin
const DescriptionHeading = styled.h3`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  margin-bottom: 0.8rem;
`
// font-family, margin
const DescriptionPara = styled.p`
  font-size: 1.9rem;
  margin-bottom: 1.6rem;
  font-weight: 400;
  line-height: 1.4;
`
const DescriptionBtnLink = styled.a`
  background-color: #1c1d1f;
  color: #fff;
  height: 4.8rem;
  width: auto;
  text-decoration: none;
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0 1.2rem;
  cursor: pointer;
  font-weight: 700;
  line-height: 1.2;
  font-size: 1.6rem;
`
const AdvertisementWrapper2 = styled.div`
  display: flex;
  padding: 0;
`
const AdvertisementImg2 = styled.img`
  display: block;
  width: 400px;
  height: 400px;
  object-fit: contain;
  max-width: 100%;
`
const Description2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  max-width: 40rem;
  margin: 0 9.6rem 0 0;
`
const DescriptionHeadingImg = styled.img`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  margin-bottom: 0.8rem;
`
const Advertisement3 = styled.div`
  /* display: block; */
  margin: 6.4rem 0 9.6rem 0;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const CompanyLogo = styled.div`
  margin-top: 6.4rem;
`
const CompanyLogoSection = styled.section`
  background-color: #f7f9fa;
  padding: 3.2rem 0 1.6rem 0;
`
const CompanyLogoContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// font-family
const CompanyLogoHeading = styled.h3`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.35;
  margin: 0 0 0 0.8rem;
`
const CompanyLogoWrapper = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`
const CompanyLogoEach = styled.div`
  margin: 1.6rem;
  display: inline-flex;
  align-items: center;
`
const CompanyLogoImg = styled.img`
  width: 100%;
  height: auto;
`


const AdvertisementContainer = () => {
  return (
    <>
    <Advertisement>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper>
            <AdvertisementImg src="/images/advertisement/instructor-2x-v3.jpeg" />
            <Description>
              <DescriptionHeading>Become an instructor</DescriptionHeading>
              <DescriptionPara>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</DescriptionPara>
              <div>
                <DescriptionBtnLink href="#">Start teaching today</DescriptionBtnLink>
              </div>
            </Description>
          </AdvertisementWrapper>
        </AdvertisementContain>
      </AdvertisementSection>
    </Advertisement>

    <CompanyLogo>
      <CompanyLogoSection>
        <CompanyLogoContain>
          <CompanyLogoHeading>Trusted by companies of all sizes</CompanyLogoHeading>
          <CompanyLogoWrapper>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/nasdaq-dark.svg" />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/volkswagen-dark.svg" />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/box-dark.svg" />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/netapp-dark.svg" />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/eventbrite-dark.svg" />
            </CompanyLogoEach>
          </CompanyLogoWrapper>
        </CompanyLogoContain>
      </CompanyLogoSection>
    </CompanyLogo>

    <Advertisement>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper2>
            <Description2>
              <DescriptionHeadingImg src="/images/advertisement/logo-ub.svg" />
              <DescriptionPara>Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</DescriptionPara>
              <div>
                <DescriptionBtnLink href="#">Get Udemy business</DescriptionBtnLink>
              </div>
            </Description2>
            <AdvertisementImg2 src="/images/advertisement/ub-2x-v3.jpeg" />
          </AdvertisementWrapper2>
        </AdvertisementContain>
      </AdvertisementSection>
    </Advertisement>

    <Advertisement3>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper>
          <AdvertisementImg src="/images/advertisement/transform-2x-v3.jpeg" />
            <Description>
            <DescriptionHeading>Transform your life through education</DescriptionHeading>
              <DescriptionPara>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</DescriptionPara>
              <div>
                <DescriptionBtnLink href="#">Find out how</DescriptionBtnLink>
              </div>
            </Description>
          </AdvertisementWrapper>
        </AdvertisementContain>
      </AdvertisementSection>
    </Advertisement3>

    </>
  );
};

export default AdvertisementContainer;
