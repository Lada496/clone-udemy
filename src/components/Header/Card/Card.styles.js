import styled from "styled-components";
export const CardContainer = styled.div`
  position: absolute;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100vw;
  /* @media (min-width: 75.06em) { */
  left: 7.2rem;
  top: 6.4rem;
  max-width: 44rem;
  /* } */
`;
export const TitleContainer = styled.h1`
  min-width: initial;
  font-family: var(--suisse-works-alternative);
  font-weight: 800;
  font-size: 3.6rem;
  margin: 0 0 0.8rem;
`;
export const TextContainer = styled.p`
  min-width: initial;
  font-size: 2.1rem;
  margin: 0;
  line-height: 3rem;
  color: var(--color-black);
  letter-spacing: 0.5px;
`;
