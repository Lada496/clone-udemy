import { MenuContainer, MenuCard, SubTitleContext } from "./Categories.styles";
import CategoryItem from "../CategoryItem/CategoryItem";
import TooltipCard from "../TooltipCard/TooltipCard";
import { categories } from "../../../data/navigation/nav-categories";
import useNavCategory from "../../../share/hooks/use-nav-category";
import CategoriesPopularTopicItem from "../CategoriesPopularTopicItem/CategoriesPopularTopicItem";

const Categories = () => {
  const { state } = useNavCategory();
  const subCategoryList = state.subCategoryList;
  const subSubCategoryList = state.subSubCategoryList;
  return (
    <TooltipCard withoutPadding={true}>
      <MenuContainer>
        <MenuCard>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </MenuCard>
        {subCategoryList && (
          <MenuCard>
            {subCategoryList.map((subCategory) => (
              <CategoryItem key={subCategory.id} category={subCategory} />
            ))}
          </MenuCard>
        )}
        {subSubCategoryList && (
          <MenuCard>
            <SubTitleContext>Popular topics</SubTitleContext>
            {subSubCategoryList.map((subSubCategory) => (
              <CategoriesPopularTopicItem
                key={subSubCategory}
                category={subSubCategory}
              />
            ))}
          </MenuCard>
        )}
      </MenuContainer>
    </TooltipCard>
  );
};

export default Categories;
