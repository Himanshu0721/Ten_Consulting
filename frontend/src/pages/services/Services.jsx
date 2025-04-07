import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroData, contentData } from "../../assets/services";
import { serviceSections } from "../../assets/servicesSection";
import HeroSection from "../../components/HeroSection";
import ContentSection from "../../components/ContentSection";

const Services = () => {
  return (
    <div className="mx-auto space-y-20">
      <HeroSection heroData={heroData} />
      <ContentSection contentData={contentData} />

      {serviceSections.map((section, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-6 py-10 max-w-7xl mx-auto ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {index % 2 === 0 ? (
            <>
              <div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-xl w-full h-auto shadow-xl object-cover"
                />
              </div>
              <ServiceContent section={section} />
            </>
          ) : (
            <>
              <ServiceContent section={section} />
              <div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-xl w-full h-auto shadow-xl object-cover"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

const ServiceContent = ({ section }) => (
  <div className="space-y-6">
    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[50px] font-semibold text-gray-800">
      {section.title}
    </h2>
    <p className="text-gray-600 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[22px] xl:text-[25px] pb-8">
      {section.description}
    </p>

    <div className="space-y-3">
      {section.links.map((item, i) => (
        <Link
          to={item.path}
          key={i}
          className="flex items-center justify-between border-b pb-2 text-gray-800 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[22px] xl:text-[25px] cursor-pointer"
        >
          <span>{item.name}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      ))}
    </div>

    <Link
      to={section.links[0]?.path || "/"}
      className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-medium text-gray-800 transition"
    >
      Learn More
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
);

export default Services;
