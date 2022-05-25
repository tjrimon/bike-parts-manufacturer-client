import React from "react";
import About from "./About/About";
import BusinessSumarry from "./BusinessSummary/BusinessSumarry";
import Faq from "./Faq/Faq";
import Items from "./Items/Items";
import Review from "./Review/Review";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Items></Items>
      <BusinessSumarry></BusinessSumarry>
      <Review></Review>
      <Faq></Faq>
    </div>
  );
};

export default Home;
