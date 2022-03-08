import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 100%;
  margin-bottom: 2.4rem;
`;
export const ImageBoxContainer = styled.div`
  padding-top: 1.5rem;
  background-color: #f2f3f5;
  position: relative;
  z-index: -1;
  @media (min-width: 1400px) {
    width: 1340px;
    margin: auto;
  }
`;
export const ImageContainer = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;
