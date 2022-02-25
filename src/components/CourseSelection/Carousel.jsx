import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import styled from "styled-components";
import Course1 from "../../assets/1.png";
import Course2 from "../../assets/2.png";
import Course3 from "../../assets/3.png";
import Course4 from "../../assets/4.png";
import Course5 from "../../assets/5.png";
import Course6 from "../../assets/6.png";
import Course7 from "../../assets/7.png";
import Course8 from "../../assets/8.png";
import Course9 from "../../assets/9.png";
import Course10 from "../../assets/10.png";
import Course11 from "../../assets/11.png";
import Course12 from "../../assets/12.png";

const Carousel = ({ data }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  const images = [
    Course1,
    Course2,
    Course3,
    Course4,
    Course5,
    Course6,
    Course7,
    Course8,
    Course9,
    Course10,
    Course11,
    Course12,
  ];

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        gutter={10}
        leftChevron={<ArrowBtn>{"<"}</ArrowBtn>}
        rightChevron={<ArrowBtn>{">"}</ArrowBtn>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {data.map((item) => (
          <>
            <ImgFrame src={images[item.id - 1]} alt={item.title} />
            <Title>{item.title}</Title>
            <AuthorAndRev>{item.author}</AuthorAndRev>
            <RateAndRev>
              <Rate>{item.rate}</Rate>&nbsp;
              <Rating src="/images/course-selection/rate.svg" alt="rate" />
              &nbsp;&nbsp;
              <AuthorAndRev>({item.review})</AuthorAndRev>
            </RateAndRev>
            {item.onSale ? (
              <Flex>
                <OnSalePrice>CA$23.99</OnSalePrice>&nbsp;&nbsp;&nbsp;
                <RegularPrice>CA${item.price}</RegularPrice>
              </Flex>
            ) : (
              <OriginalPrice>CA${item.price}</OriginalPrice>
            )}
            {item.bestseller && (
              <BestSeller
                src="/images/course-selection/bestseller.svg"
                alt="bestseller"
              />
            )}
          </>
        ))}
      </ItemsCarousel>
    </div>
  );
};

const ArrowBtn = styled.button`
  border-radius: 50%;
  background-color: black;
  color: #fff;
  height: 5rem;
  width: 5rem;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.7;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const AuthorAndRev = styled.p`
  font-size: 12px;
  color: #787878;
`;

const Rate = styled.p`
  font-weight: bold;
  color: #e59819;
  font-size: 14px;
`;

const OriginalPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const BestSeller = styled.img`
  width: 5rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const RegularPrice = styled.p`
  text-decoration: line-through;
  color: #787878;
`;

const OnSalePrice = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

const ImgFrame = styled.img`
  width: 30rem;
  height: auto;
  border: 1px solid #c4c4c4;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Rating = styled.img`
  width: 6.5rem;
`;

const RateAndRev = styled.div`
  display: flex;
  align-items: center;
`;

export default Carousel;
