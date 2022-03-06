import HeaderContainer from "./container/HeaderContainer";
import CourseSelectionContainer from "./container/CourseSelectionContainer";
import StudentsViewingContainer from "./container/StudentsViewingContainer";
import TopCategoriesContainer from "./container/TopCategoriesContainer";
import FeaturedTopicsContainer from "./container/FeaturedTopicsContainer";
import AdvertisementContainer from "./container/AdvertisementContainer";
import FooterContainer from "./container/FooterContainer";


function App() {
  return (
    <>
      {/* Yuko */}
      <HeaderContainer />
      {/* Lily */}
      <CourseSelectionContainer />
      {/* Phoebe */}
      <StudentsViewingContainer />
      {/* Ayako */}
      <TopCategoriesContainer />
      <FeaturedTopicsContainer />
      <AdvertisementContainer />
      <FooterContainer />
    </>
  );
}

export default App;
