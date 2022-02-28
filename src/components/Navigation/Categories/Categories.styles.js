import styled from "styled-components";
export const MenuContainer = styled.div`
  display: grid;
  padding: 0;
  margin: 0;
  width: fit-content;
  height: 700px;
  align-items: center;
  grid-template-columns: repeat(3, auto);
`;
export const MenuCard = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  height: inherit;
  border: #dbdcdd solid 1px;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
`;
export const SubTitleContext = styled.h3`
  color: #707476;
  font-size: 1.6rem;
  margin: 0.5rem 1.3rem 1rem;
`;
