import React from "react";
import HeroSection from "../../../components/HeroSection";
import {
  contentData,
  funFactDetails,
  heroData,
  insightsData,
  justSectionDetails,
  offerings,
} from "../../../assets/cloudConsulting";
import ContentSection from "../../../components/ContentSection";
import OfferingsSection from "../../../components/OfferingsSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import InsightSection from "../../../components/InsightSection";

const CloudConsulting = () => {
  return (
    <div>
      <HeroSection heroData={heroData} />
      <ContentSection contentData={contentData} />
      <OfferingsSection offerings={offerings} />
      <JustSection justSectionDetails={justSectionDetails} />
      <FunFactSection funFactDetails={funFactDetails} />
      <InsightSection insightsData={insightsData} />
    </div>
  );
};
export default CloudConsulting;
