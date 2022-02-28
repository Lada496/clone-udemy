import { MenuButtonContainer } from "./MenuButton.styles";

const MenuButtom = ({
  children,
  onMouseEnter,
  onMouseLeave,
  isActive = false,
}) => {
  const dammyHandler = () => {};

  return (
    <MenuButtonContainer
      isActive={isActive}
      onMouseEnter={onMouseEnter || dammyHandler}
      onMouseLeave={onMouseLeave || dammyHandler}
    >
      {children}
    </MenuButtonContainer>
  );
};

export default MenuButtom;
