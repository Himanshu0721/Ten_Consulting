import React from "react";
import Chatbot from "./chatbot";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900

 text-white px-4 py-8"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 flex items-center">
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
                  stroke="#fff"
                  fill="#fff"
                  d="M139.358 159.816s5.42-26.187 27.014-38.576a13.973 13.973 0 0 0 4.065-3.52l23.864-30.639a11.721 11.721 0 0 1 12.02-4.417c4 1 7.321 4.083 4.681 12.319-5.28 16.6-22.368 36.711-22.368 36.711s.51 6.036 4.769 1.513 18.549-27.665 18.549-27.665l7.515-14.255a11.879 11.879 0 0 0 1.32-4.417l2.534-26.574 2.816-17.282a9.292 9.292 0 0 1 2.851-5.4c3.52-3.238 10.066-7.039 13.445 5.086 3.8 13.6-2.921 53.87-5.808 69.691a29.2 29.2 0 0 1-5.086 11.862c-8.06 11.087-27.208 36.8-42.659 52.444v21.858a2.992 2.992 0 0 1-2.992 2.992h-42.8a1.531 1.531 0 0 1-1.549-1.426z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#fff"
                  fill="#fff"
                  d="M214.522 76.345s2.517-29.671 4.277-34.951-10.804 5.28-9.556 32.188z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#fff"
                  fill="#fff"
                  d="M202.713 73.071s3.114-18.936 4.523-21.611-7.8-2.27-10.049 21.611z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#fff"
                  fill="#fff"
                  d="M104.568 159.816s-5.438-26.187-27.032-38.576a13.9 13.9 0 0 1-4.048-3.52L49.625 86.991a11.738 11.738 0 0 0-12.038-4.417c-3.977 1-7.321 4.083-4.681 12.319 5.28 16.6 22.386 36.711 22.386 36.711s-.51 6.089-4.787 1.549-18.532-27.647-18.532-27.647l-7.519-14.255a11.879 11.879 0 0 1-1.32-4.417L20.587 60.26l-2.8-17.282a9.38 9.38 0 0 0-2.851-5.4c-3.52-3.238-10.066-7.039-13.445 5.086-3.784 13.6 2.9 53.87 5.808 69.691a28.967 28.967 0 0 0 5.086 11.862c8.06 11.087 27.208 36.8 42.642 52.444v21.858a3.009 3.009 0 0 0 3.009 2.992h42.783a1.531 1.531 0 0 0 1.566-1.426z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#fff"
                  fill="#fff"
                  d="M29.387 76.345s-2.52-29.671-4.277-34.951 10.823 5.28 9.556 32.188z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#fff"
                  fill="#fff"
                  d="M41.213 73.071S38.186 54.135 36.69 51.46s7.78-2.27 10.049 21.611z"
                ></path>
                <path
                  strokeWidth=".5"
                  strokeMiterlimit="10"
                  stroke="#fff"
                  fill="#fff"
                  d="M131.695 13.481l10.313 10.93c8.623-9.169 22-9.609 29.407-2.745a18.567 18.567 0 0 1 3.52 22.368c-4.8 8.166-16.367 11.4-26.011 6.16a196.508 196.508 0 0 1-28.915-27.278 110.45 110.45 0 0 0-18.478-17.477c-2.165-1.619-3.96-2.165-8.923-3.766-8.5-2.728-19.587-.9-28.281 5.28a34.757 34.757 0 0 0-13.586 36.711 34.687 34.687 0 0 0 26.521 24.638c11.07 2.217 23.723-1.021 30.939-9.063a28.172 28.172 0 0 0 1.883-2.393L99.257 45.529c-.422.581-6.776 8.9-16.842 8.166a18.954 18.954 0 0 1-17.331-17.722 18.831 18.831 0 0 1 13.2-18.6 19.851 19.851 0 0 1 20.1 5.913c5.192 5.385 8.553 7.884 23.142 23 5.86 6.089 5.614 5.79 6.916 7.039 5.438 5.28 10.348 9.943 16.719 12.565 12.618 5.28 25.272-.141 26.644-.757a34.969 34.969 0 0 0 17.352-16.6c.6-1.267 7.48-16.3-.757-31.044A34.7 34.7 0 0 0 151.811.916a35.391 35.391 0 0 0-20.116 12.565z"
                ></path>
              </g>
            </g>
          </svg>
          <h2 className="text-xl font-semibold mb-2">TEN Consulting</h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-15 lg:gap-50 mt-10 ml-5 md:ml-15 xl:ml-20 sm:grid-cols-3 md:grid-cols-4">
          {/* Design */}
          <div>
            <ul className="space-y-5 text-gray-300">
              <li>
                <Link
                  to="/our-services"
                  className="hover:underline cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:underline cursor-pointer">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:underline cursor-pointer">
                  Insights
                </Link>
              </li>
              <li>
                <Link className="hover:underline cursor-pointer" to="/about-us">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5 text-gray-300">
              <li>
                <Link to="/insights" className="hover:underline cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="hover:underline cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline cursor-pointer" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-600"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5c0-1.11-.89-2-2-2s-2 .89-2 2v5h-3v-10h3v1.25c.86-.83 2-1.25 3.2-1.25 2.35 0 4.3 1.95 4.3 4.35v5.65z" />
                </svg>
                <h1 className="cursor-pointer">Linkedin</h1>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-5 text-gray-300">
              <li>
                <Link className="hover:underline cursor-pointer" to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:underline cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:underline cursor-pointer">
                  Careers
                </Link>
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path d="M23.5 6.3c-.3-1.1-1.2-2-2.3-2.3-2-.5-10.2-.5-10.2-.5s-8.2 0-10.2.5c-1.1.3-2 1.2-2.3 2.3-.5 2-.5 6.2-.5 6.2s0 4.2.5 6.2c.3 1.1 1.2 2 2.3 2.3 2 .5 10.2.5 10.2.5s8.2 0 10.2-.5c1.1-.3 2-1.2 2.3-2.3.5-2 .5-6.2.5-6.2s0-4.2-.5-6.2zm-14.5 9.2v-6.9l6.5 3.4-6.5 3.5z" />
                </svg>
                <h1 className="cursor-pointer">Youtube</h1>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <hr className="border-white my-10" />

      {/* Contact Info */}
      <div className="text-center text-sm">
        <span>Email: </span>
        <a
          href="mailto:tech@entrepreneurshipnetwork.net"
          className="text-blue-400 hover:underline"
        >
          tech@entrepreneurshipnetwork.net
        </a>
        <Chatbot />
      </div>
    </footer>
  );
};

export default Footer;
