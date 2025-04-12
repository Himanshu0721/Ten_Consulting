import React from "react";
import {
    heroData,
    contentData,
    justSectionDetails,
    funFactDetails,
    transformationData,
    insightsData,
} from "../../../assets/aiMl";
import HeroSection from "../../../components/HeroSection";
import ContentSection from "../../../components/ContentSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import TransformationSection from "../../../components/LeadingSection";
import InsightSection from "../../../components/InsightSection";
import AiMlContent from "../../../components/AiMlContent";
import AiMlSolutions from "../../../components/AiMlSolutions";

const AiMl = () => {
    return (
    <div>
        <HeroSection heroData={heroData} />
        <ContentSection contentData={contentData} />
        <AiMlContent />
        <AiMlSolutions />
        <JustSection justSectionDetails={justSectionDetails} />
        <FunFactSection funFactDetails={funFactDetails} />
        <TransformationSection transformationData={transformationData} />
        <InsightSection insightsData={insightsData} />
    </div>
    );
};

export default AiMl;
