import React from "react";
import HeroSection from "../../../components/HeroSection";
import { contentData, funFactDetails, heroData, insightsData, justSectionDetails, offerings, transformationData } from "../../../assets/mobileEngineering";
import ContentSection from "../../../components/ContentSection";
import OfferingsSection from "../../../components/OfferingsSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import LeadingSection from "../../../components/LeadingSection";
import InsightSection from "../../../components/InsightSection";

const MobileEngineering = () =>{
    return(
        <div>
            <HeroSection heroData={heroData} />
            <ContentSection contentData={contentData} />
            <OfferingsSection offerings={offerings} />
            <JustSection justSectionDetails={justSectionDetails} />
            <FunFactSection funFactDetails={funFactDetails} />
            <LeadingSection transformationData={transformationData} />
            <InsightSection insightsData={insightsData} />
        </div>
    )
}
export default MobileEngineering;