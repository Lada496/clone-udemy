import styled from "styled-components";
// normal:#1c1d1f active:#5624d0
export const MenuButtonContainer = styled.button`
  position: relative;
  align-items: center;
  border: none;
  color: ${(props) => (props.isActive ? "#5624d0" : "#1c1d1f")};
  cursor: pointer;
  display: inline-flex;
  min-width: 8rem;
  padding: 0 1rem;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: bottom;
  white-space: nowrap;
  font-size: 1.4rem;
  background-color: transparent;
  min-width: auto;
  font-family: var(--primary-font);
  &:hover {
    color: #5624d0;
  }
`;
