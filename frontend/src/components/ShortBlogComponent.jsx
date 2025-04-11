import React from 'react';

function ShortBlogComponent({ imgLink, heading }) {
  return (
    <div className="flex md:w-fit justify-center items-center ">
      <div className="pt-4 mr-4">
        <img 
          src={imgLink} 
          alt="" 
          className="rounded-lg border-2 border-gray-400 md:h-28 md:w-64  object-cover"
        />
      </div>
      
      <div className="w-full pl-1 pr-2 md:px-2  ">
        <h3 className="font-semibold text-sm ">Blog</h3>
        <h4 className="md:text-2xl text-lg font-semibold">{heading}</h4>
        <p className="text-sm ">March 29, 2005</p>
      </div>
    </div>
  );
}

export default ShortBlogComponent;

