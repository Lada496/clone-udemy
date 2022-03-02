import styled from "styled-components";

export const LinkButtonContainer = styled.a`
  background-color: ${(props) =>
    props.color === "black" ? "#1c1d1f" : "transparent"};
  color: ${(props) => (props.color === "black" ? "#fff" : "#1c1d1f")};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  text-decoration: none;
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0rem 1.2rem;
  border: 1px solid var(--color-black);
  cursor: pointer;
  font-weight: 700;
  line-height: 1.2;
  font-size: ${(props) => props.fontSize};
  &:hover {
    background-color: ${(props) =>
      props.color === "black" ? "#000" : "#eceff1"};
  }
`;
