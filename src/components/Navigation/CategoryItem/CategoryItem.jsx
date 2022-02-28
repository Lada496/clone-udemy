import { useEffect, useState } from "react";
import MenuButtom from "../../../share/UIElements/MenuButton/MenuButtom";
import { MenuItemContainer, TextContainer } from "./CategoryItem.styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useNavCategory from "../../../share/hooks/use-nav-category";

const CategoryItem = ({ category }) => {
  const { state, dispatch } = useNavCategory();
  const currentCategory = state.currentCategory;
  const currentSubCategory = state.currentSubCategory;

  // if the category id is equal to the currentCategoty id or the category if is equal to the sub current Id
  const [isActive, setIsActive] = useState(
    currentCategory?.id === category.id ||
      currentSubCategory?.id === category.id
  );
  const onHoverHandler = () => {
    if (category.id.includes("s")) {
      dispatch({ type: "CHOOSE_SUB_CATEGORY", subCategoryId: category.id });
    } else {
      dispatch({ type: "CHOOSE_CATEGORY", categoryId: category.id });
    }
  };
  useEffect(() => {
    if (
      currentCategory?.id === category.id ||
      currentSubCategory?.id === category.id
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentCategory, currentSubCategory, category.id]);

  return (
    <MenuButtom
      key={category.id}
      onMouseEnter={onHoverHandler}
      isActive={isActive}
    >
      <MenuItemContainer>
        <TextContainer>{category.name}</TextContainer>
        <span>
          <ArrowForwardIosIcon
            sx={{ fontSize: 11, display: "block", width: "fit-content" }}
          />
        </span>
      </MenuItemContainer>
    </MenuButtom>
  );
};

export default CategoryItem;
