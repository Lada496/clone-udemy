import { LinkButtonContainer } from "./LinkButton.styles";

const LinkButton = ({
  children,
  link = "#",
  color = "black",
  fontSize = "1.6rem",
  height = "auto",
  width = "auto",
}) => {
  return (
    <LinkButtonContainer
      href={link}
      color={color}
      fontSize={fontSize}
      height={height}
      width={width}
    >
      {children}
    </LinkButtonContainer>
  );
};

export default LinkButton;
