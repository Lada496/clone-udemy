import { CardContainer } from "./TooltipCard.styles";

const TooltipCard = ({ children, marginTop = "3.3rem" }) => {
  return <CardContainer marginTop={marginTop}>{children}</CardContainer>;
};

export default TooltipCard;
