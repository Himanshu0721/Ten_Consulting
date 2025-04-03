import React from "react";
import {
    heroData,
    contentData,
    offerings,
    justSectionDetails,
    funFactDetails,
    insightsData,
} from "../../../assets/blockChain";
import HeroSection from "../../../components/HeroSection";
import ContentSection from "../../../components/ContentSection";
import OfferingsSection from "../../../components/OfferingsSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import InsightSection from "../../../components/InsightSection";

const GenerativeAi = () => {
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

export default GenerativeAi;
