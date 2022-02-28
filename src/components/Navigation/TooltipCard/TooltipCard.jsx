import { CardContainer } from "./TooltipCard.styles";

const TooltipCard = ({
  children,
  marginTop = "3.3rem",
  withoutPadding = false,
}) => {
  return (
    <CardContainer marginTop={marginTop} withoutPadding={withoutPadding}>
      {children}
    </CardContainer>
  );
};

export default TooltipCard;
