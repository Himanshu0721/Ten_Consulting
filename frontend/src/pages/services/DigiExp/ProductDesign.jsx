import React from "react";
import {
    heroData,
    contentData,
    offerings,
    justSectionDetails,
    funFactDetails,
    transformationData,
    insightsData,
} from "../../../assets/productDesignData";
import HeroSection from "../../../components/HeroSection";
import ContentSection from "../../../components/ContentSection";
import OfferingsSection from "../../../components/OfferingsSection";
import JustSection from "../../../components/JustFewSection";
import FunFactSection from "../../../components/FunFactSection";
import TransformationSection from "../../../components/LeadingSection";
import InsightSection from "../../../components/InsightSection";

const ProductDesign = () => {
    return (
    <div>
        <HeroSection heroData={heroData} />

        <ContentSection contentData={contentData} />

        <OfferingsSection offerings={offerings} />

        <JustSection justSectionDetails={justSectionDetails} />

        <FunFactSection funFactDetails={funFactDetails} />

        <TransformationSection transformationData={transformationData} />

        <InsightSection insightsData={insightsData} />
    </div>
    );
};

export default ProductDesign;
