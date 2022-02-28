import styled from "styled-components";
export const CardContainer = styled.div`
  width: fit-content;
  margin-top: ${(props) => props.marginTop};
  margin-right: -1.6rem;
  margin-left: -1.6rem;
  padding: ${(props) => (props.withoutPadding ? 0 : "1.5rem 1.9rem")};
  background-color: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  border: #dbdcdd solid 1px;
`;
