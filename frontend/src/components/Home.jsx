import { React, useState } from "react";
import Carousel from "./Home_Components/Img_Scroller";
import Dropdown from "./Home_Components/Dropdown";
import HeroSection from "./Home_Components/CoE";
import SuccessFootprints from "./Home_Components/Footprints";
import TestimonialSlider from "./Home_Components/Testimonial";
function Home() {
  return (
    <>
      <Carousel />
      <Dropdown />
      <HeroSection/>
      <SuccessFootprints/>
      <TestimonialSlider/>
    </>
  );
}

export default Home;
