import {
  heroData,
//   contentData,
} from "../assets/testimonialsData";

import HeroSection from "../components/HeroSection";
// import ContentSection from "../components/ContentSection";

const ContactUs = () => {
  return (
    <div>
      <HeroSection heroData={heroData} />
      {/* <ContentSection contentData={contentData} /> */}
    </div>
  );
};

export default ContactUs;
