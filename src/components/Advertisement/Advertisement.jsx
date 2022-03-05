import React from 'react';
import styled from "styled-components";
import LinkButton from '../../share/UIElements/LinkButton/LinkButton';


const AdvertisementContainer = styled.div`
  margin: 0;
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
const DescriptionHeading = styled.h3`
  font-family: var(--suisse-works-alternative);
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.25;
  letter-spacing: -.05rem;
  margin-bottom: 0.8rem;
`
const DescriptionPara = styled.p`
  font-size: 1.9rem;
  margin-top: 0;
  margin-bottom: 1.6rem;
  font-weight: 400;
  line-height: 1.4;
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
  margin: 0;
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
  margin-bottom: 0.8rem;
  width: 282px;
  height: 48px;
`
const Advertisement3 = styled.div`
  margin: 6.4rem 0 9.6rem 0;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const CompanyLogo = styled.div`
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const CompanyLogoSection = styled.section`
  background-color: #f7f9fa;
  border: 0;
  padding: 3.2rem 0;
  margin-top: 4.8rem;
`
const CompanyLogoContain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -1.6rem;
`
const CompanyLogoHeading = styled.h3`
  font-family: var(--suisse-works-alternative);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.35;
  letter-spacing: -0.02rem;
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

const Advertisement = () => {
  return (
    <>
    <AdvertisementContainer>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper>
            <AdvertisementImg src="/images/advertisement/instructor-2x-v3.jpeg" />
            <Description>
              <DescriptionHeading>Become an instructor</DescriptionHeading>
              <DescriptionPara>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</DescriptionPara>
              <div>
                <LinkButton height='4.8rem'>Start teaching today</LinkButton>
              </div>
            </Description>
          </AdvertisementWrapper>
        </AdvertisementContain>
      </AdvertisementSection>
    </AdvertisementContainer>

    <CompanyLogo>
      <CompanyLogoSection>
        <CompanyLogoContain>
          <CompanyLogoHeading>Trusted by companies of all sizes</CompanyLogoHeading>
          <CompanyLogoWrapper>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/nasdaq-dark.svg" style={{ width: 115, height: 44}} />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/volkswagen-dark.svg" style={{ width: 44, height: 44}} />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/box-dark.svg" style={{ width: 67, height: 44}} />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/netapp-dark.svg" style={{ width: 115, height: 44}} />
            </CompanyLogoEach>
            <CompanyLogoEach>
              <CompanyLogoImg src="/images/advertisement/eventbrite-dark.svg" style={{ width: 115, height: 44}} />
            </CompanyLogoEach>
          </CompanyLogoWrapper>
        </CompanyLogoContain>
      </CompanyLogoSection>
    </CompanyLogo>

    <AdvertisementContainer>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper2>
            <Description2>
              <DescriptionHeadingImg src="/images/advertisement/logo-ub.svg" />
              <DescriptionPara>Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.</DescriptionPara>
              <div>
                <LinkButton height='4.8rem'>Get Udemy business</LinkButton>
              </div>
            </Description2>
            <AdvertisementImg2 src="/images/advertisement/ub-2x-v3.jpeg" />
          </AdvertisementWrapper2>
        </AdvertisementContain>
      </AdvertisementSection>
    </AdvertisementContainer>

    <Advertisement3>
      <AdvertisementSection>
        <AdvertisementContain>
          <AdvertisementWrapper>
          <AdvertisementImg src="/images/advertisement/transform-2x-v3.jpeg" />
            <Description>
            <DescriptionHeading>Transform your life through education</DescriptionHeading>
              <DescriptionPara>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</DescriptionPara>
              <div>
                <LinkButton height='4.8rem'>Find out how</LinkButton>
              </div>
            </Description>
          </AdvertisementWrapper>
        </AdvertisementContain>
      </AdvertisementSection>
    </Advertisement3>
    </>
  )
}

export default Advertisement
