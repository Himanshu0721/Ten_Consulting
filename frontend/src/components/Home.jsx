import { React, useState } from "react";
import Carousel from "./Home_Components/Img_Scroller";
import Dropdown from "./Home_Components/Dropdown";
import HeroSection from "./Home_Components/CoE";
import SuccessFootprints from "./Home_Components/Footprints";
import TestimonialSlider from "./Home_Components/Testimonial";
import CaseStudies from "./Home_Components/Case_Studies";
import RecentHappenings from "./Home_Components/Recent_Happening";
import MissionSection from "./Home_Components/Our_Mission";
import InsightsCarousel from "./Home_Components/Insights";
function Home() {
  return (
    <>
      <Carousel />
      <Dropdown />
      <HeroSection />
      <SuccessFootprints />
      <CaseStudies />
      <TestimonialSlider />
      <RecentHappenings />
      <MissionSection />
      {/* <InsightsCarousel/> */}
    </>
  );
}

export default Home;
