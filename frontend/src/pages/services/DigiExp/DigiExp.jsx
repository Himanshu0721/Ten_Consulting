import React from "react";
import {
    heroData,
    contentData,
    // offerings,
    justSectionDetails,
    funFactDetails,
    transformationData,
    insightsData,
} from "../../../assets/digiExp";
import HeroSection from "../../../components/HeroSection";
import ContentSection from "../../../components/ContentSection";
// import OfferingsSection from "../../../components/OfferingsSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import TransformationSection from "../../../components/LeadingSection";
import InsightSection from "../../../components/InsightSection";
import AiMlContent from "../../../components/AiMlContent";
import AiMlSolutions from "../../../components/AiMlSolutions";

const DigiExp = () => {
    return (
    <div>
        <HeroSection heroData={heroData} />

        <ContentSection contentData={contentData} />

        {/* <OfferingsSection offerings={offerings} /> */}

        <AiMlContent />

        <AiMlSolutions />

        <JustSection justSectionDetails={justSectionDetails} />

        <FunFactSection funFactDetails={funFactDetails} />

        <TransformationSection transformationData={transformationData} />

        <InsightSection insightsData={insightsData} />
    </div>
    );
};

export default DigiExp;
