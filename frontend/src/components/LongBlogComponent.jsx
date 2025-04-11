import React from 'react'

function LongBlogComponent({heading,imgLink, data}) {
  return (
    <div className=" flex mb-10 md:flex-row flex-col md:items-center  md:justify-center  border-gray-200 shadow-2xl p-6 rounded-lg">
        <div className=" md:mr-2 ">
            <img src={imgLink} alt=""  className="w-full md:w-[360px] rounded-lg"/>
        </div>
            
        <div className="md:px-8 px-0 flex flex-col justify-center md:w-3/4 w-full pt-4">
        <p>Blog</p>
        <p className="lg:text-3xl md:text-2xl text-2xl my-2 md:my-1 font-semibold">{heading}</p>
        <p>{data}</p>
        <p className="mt-2 md:mt-1">March 28 , 2025</p>
        </div>
    </div>
  )
}

export default LongBlogComponent
