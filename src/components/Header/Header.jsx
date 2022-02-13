import {
  HeaderContainer,
  ImageBoxContainer,
  ImageContainer,
} from "./Header.styles";
import Card from "./Card/Card";

const Header = () => {
  return (
    // <HeaderContainer>
    <ImageBoxContainer>
      <ImageContainer src="images/header/header.jpg" alt height={450} />
      <Card />
    </ImageBoxContainer>
    // </HeaderContainer>
  );
};

export default Header;
