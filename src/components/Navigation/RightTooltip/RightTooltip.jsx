import TooltipCard from "../TooltipCard/TooltipCard";
import LinkButton from "../../../share/UIElements/LinkButton/LinkButton";
import { TextContainer, CardContainer } from "./RightTooltip.styles";

const RightTooltip = ({ text, buttonMessage }) => {
  return (
    <TooltipCard>
      <CardContainer>
        <TextContainer>{text}</TextContainer>
        <LinkButton fontSize="1.6rem" height="4.8rem" width="100%">
          {buttonMessage}
        </LinkButton>
      </CardContainer>
    </TooltipCard>
  );
};

export default RightTooltip;
