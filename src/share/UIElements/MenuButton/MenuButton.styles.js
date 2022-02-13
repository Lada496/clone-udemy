import styled from "styled-components";
export const MenuButtonContainer = styled.button`
  position: relative;
  align-items: center;
  border: none;
  cursor: pointer;
  display: inline-flex;
  min-width: 8rem;
  padding: 0 1.2rem;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: bottom;
  white-space: nowrap;
  font-size: 1.5rem;
  background-color: transparent;
  min-width: auto;
  font-family: var(--primary-font);
  &:hover {
    color: #5624d0;
  }
`;
