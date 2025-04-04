import {React, useState } from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello, It is Ten Consulting
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        Welcome to our platform. We provide innovative solutions to grow your
        business.
      </p>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
}

export default Home;
