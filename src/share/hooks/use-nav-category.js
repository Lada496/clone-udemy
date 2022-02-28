import { useContext } from "react";
import { NavCategoryContext } from "../context/nav-category-context";
const useNavCategory = () => {
  const context = useContext(NavCategoryContext);
  if (context === undefined) {
    throw new Error("useNavCategory must be used within a NavCategoryProvider");
  }
  return context;
};
export default useNavCategory;
