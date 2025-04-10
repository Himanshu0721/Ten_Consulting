import React from "react";
import {
    heroData,
    contentData,
    justSectionDetails,
    funFactDetails,
    transformationData,
    insightsData,
} from "../../../assets/nexGen";
import HeroSection from "../../../components/HeroSection";
import ContentSection from "../../../components/ContentSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import TransformationSection from "../../../components/LeadingSection";
import InsightSection from "../../../components/InsightSection";
import AiMlContent from "../../../components/AiMlContent";
import NextSolutions from "../../../components/NextSolutions";

const NextGen = () => {
    return (
    <div className="overflow-hidden">
        <HeroSection heroData={heroData} />

        <ContentSection contentData={contentData} />

        <AiMlContent />

        <NextSolutions />

        <JustSection justSectionDetails={justSectionDetails} />

        <FunFactSection funFactDetails={funFactDetails} />

        <TransformationSection transformationData={transformationData} />

        <InsightSection insightsData={insightsData} />
    </div>
    );
};

export default NextGen;
