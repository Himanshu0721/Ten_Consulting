import React from 'react';
import { GoArrowRight } from "react-icons/go";

function Short2_BlogComponent({ imgLink, heading }) {
  return (
    <div className="h-fit  w-fit  md:w-fit scale-105 min-h-[400px]">
      <img 
        src={imgLink} 
        alt="Blog thumbnail" 
        className="rounded-lg mb-1 h-60 md:h-72 lg:h-96 w-full object-cover"
      />
      <h1 className="md:text-2xl text-xl">{heading}</h1>
      <div className="flex items-center gap-1 mt-1">
        <p>Read more</p>
        <GoArrowRight size={20} className="mt-1" />
      </div>
    </div>
  );
}

export default Short2_BlogComponent;

