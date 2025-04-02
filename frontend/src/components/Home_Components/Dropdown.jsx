import React, { useState } from "react";



const dropdownData = [
    {
      id: 1,
      title: "AI and ML",
      image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/acc-3.webp",
      links: [
        { name: "Generative AI", url: "#" },
        { name: "Data Science", url: "#" },
      ],
    },
    {
      id: 2,
      title: "Data Analytics",
      image: "http://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Data%20Science%20%26%20Engineering.webp",
      links: [
        { name: "Data Consulting", url: "#" },
        { name: "Analytics and Integration", url: "#" },
        { name: "Agentic", url: "#" },
      ],
    },
    {
      id: 3,
      title: "Next Gen",
      image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/NextGen%20services%20(1).webp",
      links: [
        { name: "Blockchain", url: "#" }
      ],
    },
    {
      id: 4,
      title: "Insights",
      image: "https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Cloud.webp",
      links: [
        { name: "Blogs", url: "#" },
        { name: "News", url: "#" },
        { name: "White Paper", url: "#" },
      ],
    },
    {
      id: 5,
      title: "Industries",
      image: "http://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/SAP%20(2)_0.webp",
      links: [
        { name: "TEN Education", url: "#" },
        { name: "TEN Human Resource", url: "#" },
        { name: "TEN Media", url: "#" },
        { name: "TEN Art", url: "#" },
        { name: "TEN Space Research", url: "#" },
        { name: "TEN Health", url: "#" },
        { name: "TEN AI", url: "#" },
        { name: "TEN Internal Tools", url: "#" },
        { name: "TEN Incubation and VC", url: "#" },
      ],
    },
  ];
  
  const Dropdown = () => {
    const [selectedDropdown, setSelectedDropdown] = useState(null);
  
    // Handle Dropdown Click
    const handleDropdownClick = (id) => {
      setSelectedDropdown(selectedDropdown === id ? null : id);
    };
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8 md:px-10">
        {/* Page Header */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
        Using an <span className="text-violet-800">AI-first</span> approach, we build intelligent and future-proof digital solutions to transform companies.
        </h1>
  
        {/* Main Container */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side - Dropdowns */}
          <div className="w-full md:w-1/3 p-6 space-y-4 bg-gray-50">
            {dropdownData.map((item) => (
              <div key={item.id} className="border rounded-lg">
                {/* Dropdown Button */}
                <button
                  onClick={() => handleDropdownClick(item.id)}
                  className={`w-full text-left px-4 py-3 focus:outline-none font-semibold text-gray-700 ${
                    selectedDropdown === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {item.title}
                </button>
  
                {/* Dropdown Content */}
                {selectedDropdown === item.id && (
                  <div className="p-4 bg-gray-100 border-t text-sm text-gray-600 space-y-3">
                  
  
                    {/* Additional Links */}
                    <div className="mt-2 space-y-2">
                      {/* <h3 className="font-semibold text-gray-700">Related Links:</h3> */}
                      <ul className="list-disc list-inside space-y-1">
                        {item.links.map((link, index) => (
                          <li key={index}>
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {link.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
  
          {/* Right Side - Image Section */}
          <div className="hidden md:block w-2/3">
            {selectedDropdown !== null ? (
              <img
                src={
                  dropdownData.find((item) => item.id === selectedDropdown).image
                }
                alt="Selected Service"
                className="w-auto h-auto object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500 text-xl">
                Select a service to see the image
              </div>
            )}
          </div>
        </div>
  
        {/* Mobile Image (below dropdowns) */}
        {selectedDropdown !== null && (
          <div className="md:hidden w-full mt-4">
            <img
              src={
                dropdownData.find((item) => item.id === selectedDropdown).image
              }
              alt="Selected Service"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    );
  };
  
  export default Dropdown;
  