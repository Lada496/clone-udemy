import MenuButtom from "../../../share/UIElements/MenuButton/MenuButtom";
import { TextContainer } from "./CategoriesPopularTopicItem.styles";

const CategoriesPopularTopicItem = ({ category }) => {
  return (
    <MenuButtom>
      <TextContainer>{category}</TextContainer>
    </MenuButtom>
  );
};

export default CategoriesPopularTopicItem;
