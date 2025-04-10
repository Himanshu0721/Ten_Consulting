import React from "react";
import HeroSection from "../components/HeroSection";
import { contentData, heroData } from "../assets/careerPage";
import ContentSection from "../components/ContentSection";
import Careers from "./Careers";

const CareerPage = () =>{
    return(
        <div>
            <HeroSection heroData={heroData} />
            <ContentSection contentData={contentData} />
            <Careers />
        </div>
    )
}
export default CareerPage;