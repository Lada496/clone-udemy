import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";

const HeaderContainer = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navigation />
      <Header />
    </div>
  );
};

export default HeaderContainer;
