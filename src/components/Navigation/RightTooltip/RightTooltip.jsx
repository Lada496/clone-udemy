import TooltipCard from "../TooltipCard/TooltipCard";
import LinkButton from "../../../share/UIElements/LinkButton/LinkButton";
import { TextContainer } from "./RightTooltip.styles";

const RightTooltip = ({ text, buttonMessage }) => {
  return (
    <TooltipCard>
      <TextContainer>{text}</TextContainer>
      <LinkButton width="90%" fontSize="1.8rem" height="2.4rem">
        {buttonMessage}
      </LinkButton>
    </TooltipCard>
  );
};

export default RightTooltip;
