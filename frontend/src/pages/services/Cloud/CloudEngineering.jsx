import React from "react";
import HeroSection from "../../../components/HeroSection";
import {
  contentData,
  fewData,
  funFactDetails,
  heroData,
  insightsData,
  justSectionDetails,
  solutions,
  transformationData,
} from "../../../assets/cloudEngineering";
import ContentSection from "../../../components/ContentSection";
import SolutionSection from "../../../components/SolutionSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import LeadingSection from "../../../components/LeadingSection";
import InsightSection from "../../../components/InsightSection";
import FewContentData from "../../../components/FewContentData";

const CloudEngineering = () => {
  return (
    <div>
      <HeroSection heroData={heroData} />
      <ContentSection contentData={contentData} />
      <FewContentData fewData={fewData} />
      <SolutionSection solution={solutions} />
      <JustSection justSectionDetails={justSectionDetails} />
      <FunFactSection funFactDetails={funFactDetails} />
      <LeadingSection transformationData={transformationData} />
      <InsightSection insightsData={insightsData} />
    </div>
  );
};
export default CloudEngineering;
