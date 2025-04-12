import { heroData, contentData, funFactDetails } from "../assets/contactData";

import HeroSection from "../components/HeroSection";
import ContentSection from "../components/ContentSection";
import FunFactSection from "../components/FunFactSection";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <HeroSection heroData={heroData} />
      <ContentSection contentData={contentData} />

      <FunFactSection funFactDetails={funFactDetails} />

      <ContactForm />
      {/* <ContactInfo /> */}
    </div>
  );
};

export default ContactUs;
