import TooltipCard from "../TooltipCard/TooltipCard";
import { TextContainer, LinkContainer } from "./CartTooltip.styles";

const CartTooltip = () => {
  return (
    <TooltipCard marginTop="3rem">
      <TextContainer>Your cart is empty.</TextContainer>
      <LinkContainer>Keep shopping</LinkContainer>
    </TooltipCard>
  );
};

export default CartTooltip;
