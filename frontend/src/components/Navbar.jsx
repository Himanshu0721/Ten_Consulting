import { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolling, setScrolling] = useState(false);

  // Toggle dropdown function
  const handleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  // Handle scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-3 right-3 rounded-2xl  flex justify-between items-center text-white transition-all duration-200 p-4 z-50 ${
        scrolling ? "bg-slate-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <svg
          className="h-9 w-16"
          preserveAspectRatio="xMidYMid meet"
          data-bbox="0.36 0.279 243.208 201.268"
          viewBox="0 0 243.913 201.792"
          height="201.792"
          width="243.913"
          xmlns="http://www.w3.org/2000/svg"
          data-type="ugc"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <g opacity=".86">
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#fff"
                d="M139.358 159.816s5.42-26.187 27.014-38.576a13.973 13.973 0 0 0 4.065-3.52l23.864-30.639a11.721 11.721 0 0 1 12.02-4.417c4 1 7.321 4.083 4.681 12.319-5.28 16.6-22.368 36.711-22.368 36.711s.51 6.036 4.769 1.513 18.549-27.665 18.549-27.665l7.515-14.255a11.879 11.879 0 0 0 1.32-4.417l2.534-26.574 2.816-17.282a9.292 9.292 0 0 1 2.851-5.4c3.52-3.238 10.066-7.039 13.445 5.086 3.8 13.6-2.921 53.87-5.808 69.691a29.2 29.2 0 0 1-5.086 11.862c-8.06 11.087-27.208 36.8-42.659 52.444v21.858a2.992 2.992 0 0 1-2.992 2.992h-42.8a1.531 1.531 0 0 1-1.549-1.426z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#fff"
                d="M214.522 76.345s2.517-29.671 4.277-34.951-10.804 5.28-9.556 32.188z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#fff"
                d="M202.713 73.071s3.114-18.936 4.523-21.611-7.8-2.27-10.049 21.611z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#fff"
                d="M104.568 159.816s-5.438-26.187-27.032-38.576a13.9 13.9 0 0 1-4.048-3.52L49.625 86.991a11.738 11.738 0 0 0-12.038-4.417c-3.977 1-7.321 4.083-4.681 12.319 5.28 16.6 22.386 36.711 22.386 36.711s-.51 6.089-4.787 1.549-18.532-27.647-18.532-27.647l-7.519-14.255a11.879 11.879 0 0 1-1.32-4.417L20.587 60.26l-2.8-17.282a9.38 9.38 0 0 0-2.851-5.4c-3.52-3.238-10.066-7.039-13.445 5.086-3.784 13.6 2.9 53.87 5.808 69.691a28.967 28.967 0 0 0 5.086 11.862c8.06 11.087 27.208 36.8 42.642 52.444v21.858a3.009 3.009 0 0 0 3.009 2.992h42.783a1.531 1.531 0 0 0 1.566-1.426z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#fff"
                d="M29.387 76.345s-2.52-29.671-4.277-34.951 10.823 5.28 9.556 32.188z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#fff"
                d="M41.213 73.071S38.186 54.135 36.69 51.46s7.78-2.27 10.049 21.611z"
              ></path>
              <path
                strokeWidth=".5"
                strokeMiterlimit="10"
                stroke="#e9b00d"
                fill="#fff"
                d="M131.695 13.481l10.313 10.93c8.623-9.169 22-9.609 29.407-2.745a18.567 18.567 0 0 1 3.52 22.368c-4.8 8.166-16.367 11.4-26.011 6.16a196.508 196.508 0 0 1-28.915-27.278 110.45 110.45 0 0 0-18.478-17.477c-2.165-1.619-3.96-2.165-8.923-3.766-8.5-2.728-19.587-.9-28.281 5.28a34.757 34.757 0 0 0-13.586 36.711 34.687 34.687 0 0 0 26.521 24.638c11.07 2.217 23.723-1.021 30.939-9.063a28.172 28.172 0 0 0 1.883-2.393L99.257 45.529c-.422.581-6.776 8.9-16.842 8.166a18.954 18.954 0 0 1-17.331-17.722 18.831 18.831 0 0 1 13.2-18.6 19.851 19.851 0 0 1 20.1 5.913c5.192 5.385 8.553 7.884 23.142 23 5.86 6.089 5.614 5.79 6.916 7.039 5.438 5.28 10.348 9.943 16.719 12.565 12.618 5.28 25.272-.141 26.644-.757a34.969 34.969 0 0 0 17.352-16.6c.6-1.267 7.48-16.3-.757-31.044A34.7 34.7 0 0 0 151.811.916a35.391 35.391 0 0 0-20.116 12.565z"
              ></path>
            </g>
          </g>
        </svg>
        <h1 className="lg:text-3xl md:text-3xl sm:text-3xl font-bold">
          <a href="/">
            Ten Consulting
          </a>
        </h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
      </div>

      <ul
        className={`absolute lg:static top-16 left-0 w-full lg:w-auto mr-10 lg:flex  bg-slate-900 lg:bg-transparent lg:space-x-10 p-4 lg:p-0 transition-transform duration-300 ${menuOpen ? "block" : "hidden"
          }`}
      >
        <li className="py-2 lg:py-0 relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDropdown("service");
            }}
            className="focus:outline-none cursor-pointer hover:text-gray-300 hover:underline"
          >
            Services
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              activeDropdown === "service"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            } ${
              menuOpen ? "relative" : "absolute"
            } bg-gray-700 lg:bg-white w-full lg:w-[16vw] shadow-md mt-2 lg:mt-4 text-white lg:text-black`}
          >
            <ul className="p-4 space-y-2 max-h-[400px] overflow-y-auto lg:overflow-x-hidden scrollbar-hide">
              <li className="flex flex-col py-1 w-50 gap-1 mt-2 ml-2">
                <Link to="/ai-ml" className="font-semibold">
                  AI and ML
                </Link>
                <Link
                  to="/ai-ml/generative-ai"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-700 group"
                >
                  Generative AI{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/ai-ml/data-science"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-700 group"
                >
                  Data Science{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
              </li>

              <li className="flex flex-col py-1 w-50 gap-1 mt-2 ml-2">
                <Link to="/data-analytics" className="font-semibold">
                  Data Analytics
                </Link>
                <Link
                  to="/data-analytics/data-consulting"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Data Consulting{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/data-analytics/analyticService"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Analytics Services{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/data-analytics/integration-api"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Integration & API{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/data-analytics/agentic"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Agentic{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
              </li>

              <li className="flex flex-col py-1 w-50 gap-1 mt-2 ml-2">
                <Link to="/next-gen" className="font-semibold">
                  Next Generation
                </Link>
                <Link
                  to="/next-gen/blockchain"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Blockchain{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/next-gen/metaverse"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-700 group"
                >
                  Metaverse{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
              </li>

              <li className="flex flex-col py-1 w-50 gap-1 mt-2 ml-2">
                <Link to="/digital-experience" className="font-semibold">
                  Digital Experience
                </Link>
                <Link
                  to="/digital-experience/product-design"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Product Design{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/digital-experience/product-consulting"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Product Consulting{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
              </li>

              <li className="flex flex-col py-1 w-50 gap-1 mt-2 ml-2">
                <Link to="/cloud-engineering" className="font-semibold">
                  Cloud Engineering
                </Link>
                <Link
                  to="/cloud-engineering/cloud-consulting"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Cloud Consulting{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/cloud-engineering/cloud-migration"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Cloud Migration{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
              </li>

              <li className="flex flex-col py-1 w-50 gap-1 mt-2 ml-2">
                <Link to="/product-engineering" className="font-semibold">
                  Product Engineering
                </Link>
                <Link
                  to="/product-engineering/quality-engineer"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Quality Engineer{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
                <Link
                  to="/product-engineering/mobile-engineering"
                  className="ml-5 cursor-pointer text-sm hover:text-gray-200 lg:hover:text-gray-700 group"
                >
                  Mobile Engineering{" "}
                  <span className="hidden group-hover:inline-block">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="py-2 lg:py-0 relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDropdown("industry");
            }}
            className="focus:outline-none cursor-pointer hover:text-gray-300 hover:underline"
          >
            Industries
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeDropdown === "industry"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            } ${
              menuOpen ? "relative" : "absolute"
            } bg-gray-700 lg:bg-white w-full lg:w-[16vw] shadow-md mt-2 lg:mt-4 text-white lg:text-black`}
          >
            <ul className="p-4 space-y-2 max-h-[400px] overflow-y-auto lg:overflow-x-hidden scrollbar-hide">
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-700 items-center gap-1 group"
                href="https://education.entrepreneurshipnetwork.net/"
                target="_blank"
              >
                TEN Education
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://ten-human-resources.vercel.app/"
              >
                TEN Human Resource
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="=py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://ten-media-rosy.vercel.app/"
              >
                TEN Media
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://art-industry.vercel.app/"
              >
                TEN Art
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://space-industry-five.vercel.app/"
              >
                TEN Space Search
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://ten-healthcare-industry.vercel.app/"
              >
                TEN Health
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://ten-ai-industry.vercel.app/"
              >
                TEN AI
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://ten-internal-tools.vercel.app/"
              >
                TEN Internal Tools
                <span className="hidden group-hover:inline-block">→</span>
              </a>
              <a
                className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group"
                href="https://incubation-vc.vercel.app/"
              >
                TEN Incubation and VC
                <span className="hidden group-hover:inline-block">→</span>
              </a>
            </ul>
          </div>
        </li>
        <li className="py-2 lg:py-0 relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDropdown("insight");
            }}
            className="focus:outline-none cursor-pointer hover:text-gray-300 hover:underline"
          >
            Insights
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeDropdown === "insight"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            } ${
              menuOpen ? "relative" : "absolute"
            } bg-gray-700 lg:bg-white w-full lg:w-[10vw] shadow-md mt-2 lg:mt-4 text-white lg:text-black`}
          >
            <ul className="p-4 space-y-2">
              <li className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group">
                Blog
                <span className="hidden group-hover:inline-block">→</span>
              </li>
              <li className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group">
                News
                <span className="hidden group-hover:inline-block">→</span>
              </li>
              <li className="=py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group">
                White Paper
                <span className="hidden group-hover:inline-block">→</span>
              </li>
            </ul>
          </div>
        </li>
        <li className="py-2 lg:py-0 relative">
          <Link className="focus:outline-none cursor-pointer hover:text-gray-300 hover:underline" to="/careers">
            Careers
          </Link>
        </li>
        <li className="py-2 lg:py-0 relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDropdown("about");
            }}
            className="focus:outline-none cursor-pointer hover:text-gray-300 hover:underline"
          >
            About
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeDropdown === "about"
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            } ${
              menuOpen ? "relative" : "absolute"
            } bg-gray-700 lg:bg-white w-full lg:w-[10vw] shadow-md mt-2 lg:mt-4 text-white lg:text-black text-black lg:ml-[-45px]`}
          >
            <ul className="p-4 space-y-2">
              <li className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group">
                About Us
                <span className="hidden group-hover:inline-block">→</span>
              </li>
              <Link className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group" to="/testimonials">
                Testimonials
                <span className="hidden group-hover:inline-block">→</span>
              </Link>
              <li className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group">
                Privacy Policy
                <span className="hidden group-hover:inline-block">→</span>
              </li>
              <Link className="py-2 w-50 cursor-pointer flex hover:text-gray-200 lg:hover:text-gray-700 items-center gap-1 group" to="/contact-us">
                Contact Us
                <span className="hidden group-hover:inline-block">→</span>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
      {/* Nav Links */}
    </nav>
  );
};

export default Navbar;
