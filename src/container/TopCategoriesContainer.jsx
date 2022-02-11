import React from "react";
import styled from "styled-components";

// font-weight/line-height/font-size/color should be in body tag
const TopCategories = styled.div`
  margin-top: 6.4rem;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.6rem;
  color: #1c1d1f;
`
const TopCategoriesSection = styled.section`
  width: 100%;
  max-width: 134rem;
  margin-right: auto;
  margin-left: auto;
  padding: 0 2.4rem;
`
const TopCategoriesSectionTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2.4rem;
`
const TopCategoriesContain = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const TopCategoriesCard = styled.a`
  margin: 0 1.6rem 1.6rem 0;
  max-width: calc(100%/4 - 1.6rem);
  cursor: pointer;
`
const CategoryCardImgWrapper = styled.div`
  overflow: hidden;
`

// cubic-bezier (not sure about the speed)
// sclae is not sure
const CategoryCardImg = styled.img`
  background-color: #f7f9fa;
  display: block;
  object-fit: contain;
  transition: transform 100ms cubic-bezier(0.215, 0.610, 0.355, 1);
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
`

const TopCategoriesContainer = () => {
  return (
    <TopCategories>
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
    </TopCategories>
  );
};

export default TopCategoriesContainer;
