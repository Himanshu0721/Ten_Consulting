import React from "react";
import {
  heroData,
  contentData,
  funFactDetails,
  //   offerings,
  //   justSectionDetails,
  //   insightsData,
  //   transformationData,
} from "../assets/contactData";

import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
// import OfferingsSection from "../../../components/OfferingsSection";
// import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../components/FunFactSection";
// import TransformationSection from "../../../components/LeadingSection";
// import InsightSection from "../../../components/InsightSection";

const ContactUs = () => {
  return (
    <div>
      <HeroSection heroData={heroData} />
      <ContentSection contentData={contentData} />

      <FunFactSection funFactDetails={funFactDetails} />
      {/* 

      <OfferingsSection offerings={offerings} />

      <JustSection justSectionDetails={justSectionDetails} />

      <FunFactSection funFactDetails={funFactDetails} />

      <TransformationSection transformationData={transformationData} />

      <InsightSection insightsData={insightsData} /> */}
    </div>
  );
};

export default ContactUs;
