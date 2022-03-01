import { createContext, useReducer } from "react";
import { categories } from "../../data/navigation/nav-categories";
import { subCategories } from "../../data/navigation/nav-sub-categories";
import { subSubCategories } from "../../data/navigation/nav-sub-sub-categories";
const initState = {
  currentCategory: null,
  currentSubCategory: null,
  //   currentSubSubCategory: null,
  subCategoryList: null,
  subSubCategoryList: null,
};
const categoryReducer = (state, action) => {
  switch (action.type) {
    // when a user hovers over a category
    case "CHOOSE_CATEGORY":
      // set the chosen category as the current category
      const newCurrentCategory = categories.find(
        (category) => category.id === action.categoryId
      );
      if (!newCurrentCategory)
        throw Error(`no such categoryId: ${action.categoryId})`);
      // decide which sub category to show
      const newSubCategoy = subCategories.find(
        (subcategory) => subcategory.id === action.categoryId
      );
      if (!newSubCategoy)
        throw Error(
          `no such categoryId in subcategory Array: ${action.categoryId})`
        );
      const newSubCategoryList = newSubCategoy.categories;
      return {
        currentCategory: newCurrentCategory,
        currentSubCategory: null,
        subCategoryList: newSubCategoryList,
        subSubCategoryList: null,
      };
    // when a user hovers over a sub category
    case "CHOOSE_SUB_CATEGORY":
      // set the chosen sub category as the current subcategory
      const newCurrentSubCategory = state.subCategoryList.find(
        (subcategory) => subcategory.id === action.subCategoryId
      );
      if (!newCurrentSubCategory)
        throw Error(
          `no such subcategoryId in sub category Array: ${action.subCategoryId}`
        );
      // decide which sub sub category to show
      const newSubSubCategory = subSubCategories.find(
        (subSubCategory) => subSubCategory.id === action.subCategoryId
      );
      if (!newSubSubCategory)
        throw Error(
          `no such subcategoryId is sub sub category Array: ${action.subCategoryId}`
        );
      const newSubSubCategoryList = newSubSubCategory.categories;
      return {
        ...state,
        currentSubCategory: newCurrentSubCategory,
        subSubCategoryList: newSubSubCategoryList,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type})`);
  }
};
export const NavCategoryContext = createContext();
const NavCategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initState);
  const value = { state, dispatch };
  return (
    <NavCategoryContext.Provider value={value}>
      {children}
    </NavCategoryContext.Provider>
  );
};
export default NavCategoryProvider;
