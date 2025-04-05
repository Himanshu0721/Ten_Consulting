import {
  heroData,
  contentData,
} from "../assets/testimonialsData";

import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import TestimonialsSection from "../components/TestimonialsSection";

const ContactUs = () => {
  return (
    <div>
      <HeroSection heroData={heroData} />
      <ContentSection contentData={contentData} />

      <TestimonialsSection />
    </div>
  );
};

export default ContactUs;
