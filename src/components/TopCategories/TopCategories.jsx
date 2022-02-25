import React from 'react'
import styled from "styled-components";


const TopCategoriesContainer = styled.div`
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const TopCategoriesSection = styled.section`
  max-width: 134rem;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2.4rem;
`
const TopCategoriesSectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  margin-top: 0;
  margin-bottom: 2.4rem;
`
const TopCategoriesContain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1.6rem -3.2rem 0;
`
const TopCategoriesCard = styled.a`
  margin: 0 1.6rem 1.6rem 0;
  max-width: calc(100%/4 - 1.6rem);
  cursor: pointer;
`
const CategoryCardImgWrapper = styled.div`
  overflow: hidden;
`
const CategoryCardImg = styled.img`
  background-color: #f7f9fa;
  display: block;
  object-fit: contain;
  transition: transform 100ms cubic-bezier(0.2, 0.0, 1.0, 0.9);
  max-width: 100%;
  height: auto;

  &:hover {
    transform: scale(1.08);
  }
`
const CategoryCardTitle = styled.div`
  color: #1c1d1f;
  padding: 0.8rem 0 1.6rem 0;
`
const CategoryCardTitleSapn = styled.span`
  font-weight: 700;
  line-height: 1.2;
  font-size: 1.6rem;
  letter-spacing: -0.02rem;
`

const TopCategories = () => {
  return (
    <TopCategoriesContainer>
        <TopCategoriesSection>
          <TopCategoriesSectionTitle>Top categories</TopCategoriesSectionTitle>
          <TopCategoriesContain>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-design-2x-v2.jpeg" />
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>Design</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-development-2x-v2.jpeg" />
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>Development</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-marketing-2x-v2.jpeg" />
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>Marketing</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-it-and-software-2x-v2.jpeg"/>
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>IT and Software</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-personal-development-2x-v2.jpeg" />
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>Personal Development</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-business-2x-v2.jpeg" />
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>Business</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-photography-2x-v2.jpeg" />
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>Photography</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
            <TopCategoriesCard>
              <CategoryCardImgWrapper>
                <CategoryCardImg src="/images/top-categories/lohp-category-music-2x-v2.jpeg" />
              </CategoryCardImgWrapper>
              <CategoryCardTitle>
                <CategoryCardTitleSapn>Music</CategoryCardTitleSapn>
              </CategoryCardTitle>
            </TopCategoriesCard>
          </TopCategoriesContain>
        </TopCategoriesSection>
    </TopCategoriesContainer>
  )
}

export default TopCategories
