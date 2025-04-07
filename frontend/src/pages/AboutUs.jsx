import {heroData, contentData} from "../assets/aboutUsData"

import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import AIFirstBanner from "../components/AiFirst"
import AboutSection from "../components/AboutSection"

export default function AboutUs(){
    return (
        <div>
            <HeroSection heroData={heroData} />
      <ContentSection contentData={contentData} />
      <AIFirstBanner />
      <AboutSection />
        </div>
    )
}