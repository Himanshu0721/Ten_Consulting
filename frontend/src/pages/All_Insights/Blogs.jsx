import React, { useState } from "react"
import ShortBlogComponent from "../../components/ShortBlogComponent";
import LongBlogComponent from "../../components/LongBlogComponent";
import { IoFilterOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import Short2_BlogComponent from "../../components/Short2_BlogComponent";
import White_papers from "./White_papers";
import News_Announcements from "./News_Announcements";
import photo1 from './assets/photo1.webp';
import photo2 from './assets/photo2.webp';
import photo3 from './assets/photo3.jpg';
import photo4 from './assets/photo4.jpg';

function Blogs() {
    const [showFilter, setShowFilter] = useState(false);
    const [showMoreBlogs, setShowMoreBlog] = useState(false);
    const [currentScreen, setCurrentScreen] = useState("Blogs")
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [showAll,setShowAll] = useState(true);

    const blogData = [
      {
        title: "The Entrepreneurial Mindset: Cultivating Resilience and Innovation",
        img: "https://thumbs.dreamstime.com/b/climbing-figure-symbolizing-ambition-overcoming-challenges-stock-photo-generative-ai-geometric-shape-upward-journey-369123158.jpg",
        data: "Explores the essential mindset traits for entrepreneurial success, such as resilience and innovation.",
        tags: ["Startup Basics",'Skills & Mindset'],
      },
      {
        title: "Why College Students Should Start Thinking Like Entrepreneurs",
        img: "https://images.stockcake.com/public/6/c/7/6c7e4c71-e0f1-4ee6-ab05-49a8bf965fd7_large/students-group-discussion-stockcake.jpg",
        data: "Entrepreneurship isn’t just about starting a business—it’s a mindset. And the earlier you adopt it, the better. At TEN, we encourage college students to think like founders: solve real problems. From building side projects to launching campus startups",
        tags: ["Startup Basics",'Cloud'],
      },
      {
        title: "Building a Business While Studying? Here’s How TEN Makes It Possible",
        img: "https://learningbox.online/wp-content/uploads/2021/04/b9716989407570c168c86e3a721ec622.png",
        data: "Balancing academics and entrepreneurship is tough—but doable. At TEN, we’ve created flexible programs that align with student schedules and provide step-by-step guidance to build startups without sacrificing grades.",
        tags: ["Startup Basics",'Student Life + Startups'],
      },
      {
        title: "Building a Strong Online Presence: Digital Marketing Tips for Your Business",
        img: "https://olorisupergal.com/wp-content/uploads/2024/12/images-1-1.jpg",
        data: "Provides practical digital marketing strategies for startups to build their brand and reach their audience online",
        tags: ["Marketing & Online Growth", "Digital Transformation", 'Cloud'],
      },
      {
        title: "Workshop Recap: Key Takeaways from Our Latest Entrepreneurial Training",
        img: "https://www.sessionlab.com/wp-content/uploads/feedback-workshop.jpg",
        data: "Summarizes the key learnings and actionable insights from a recent TEN workshop or training session.",
        tags: ["Inside the TEN Ecosystem", 'Cloud'],
      },

      {
        title: "Going Beyond Degrees: What the Startup World Actually Looks For",
        img: "https://images.indianexpress.com/2019/12/eng-degree-759.jpg?w=414",
        data: "Your college degree is important—but it’s not enough. TEN helps students graduate with not just certificates, but with real entrepreneurial experience and a portfolio of projects.",
        tags: [ "Student Life + Startups", 'Cloud'],
      },
      {
        title: "Why Soft Skills Matter More Than Ever—and How TEN Builds Them",
        img: "https://www.jobillico.com/blog/wp-content/uploads/2023/10/How-Focusing-on-Communication-Skills-Can-Improve-Your-Career-Prospects-700x395.jpg",
        data: "In a world of AI and automation, your ability to lead, collaborate, and communicate sets you apart. At TEN, we help you develop essential soft skills like leadership, negotiation, storytelling, and decision-making.",
        tags: [ "Skills & Mindset"],
      },
      
    ];

    const toggleFilter = (tag) => {
      let updatedFilters;
    
      if (selectedFilters.includes(tag)) {
        updatedFilters = selectedFilters.filter(item => item !== tag);
      } else {
        updatedFilters = [...selectedFilters, tag];
      }
    
      // If all tags selected, set showAll = true, else false
      if (updatedFilters.length === allTags.length) {
        setShowAll(true);
      } else {
        setShowAll(false);
      }
    
      setSelectedFilters(updatedFilters);
    };

    const filteredBlogs =
            showAll || selectedFilters.length === 0 ? blogData : blogData.filter(
                blog => blog.tags.some(tag => selectedFilters.includes(tag))
            );

    const allTags = ['Startup Basics', 'Student Life + Startups','Marketing & Online Growth','Skills & Mindset','Inside the TEN Ecosystem'];

    const showAllData = () => {
      setSelectedFilters([]); 
      setShowAll(true);        
    };

    return (
      <div className="bg-slate-100 relative"> 
        <div className=" h-full lg:px-20 md:px-10 px-4">
          <div className="w-full h-fit flex justify-center items-center pt-16 flex-col">
            <h1 className="text-3xl font-semibold md:text-5xl ">
              {currentScreen === "Blogs" ? "Blogs" : currentScreen === "White_papers" ? "White Papers" : "News & Announcements"}
            </h1>

            <div className="py-10 w-full h-fit flex justify-start md:justify-center gap-6 overflow-x-auto whitespace-nowrap">
              <button onClick={() => setCurrentScreen("Blogs")} className={`pb-5 inline-flex ${currentScreen === "Blogs" ? "text-blue-800 border-b-2 border-blue-800" : ""}`}>Blogs</button>
              <button onClick={() => setCurrentScreen("White_papers")} className={`pb-5 inline-flex ${currentScreen === "White_papers" ? "text-blue-800 border-b-2 border-blue-800" : ""}`}>White Papers</button>
              <button onClick={() => setCurrentScreen("News_Announcements")} className={`pb-5 inline-flex ${currentScreen === "News_Announcements" ? "text-blue-800 border-b-2 border-blue-800" : ""}`}>News & Announcements</button>
            </div>
          </div>

          {currentScreen === "Blogs" ? (
            <>
              <div className="py-10 w-full h-fit md:px-12 lg:px-28 gap-16 flex justify-center  scale-110 md:flex-row flex-col px-8 ">
                <Short2_BlogComponent imgLink="https://media.istockphoto.com/id/1332176245/photo/woman-making-a-business-presentation-at-a-creative-office.jpg?s=612x612&w=0&k=20&c=NFetBlipzGVZzp_EU0gvHromk8CH93BNpxel7QWyXio=" heading="Networking in Delhi: How TEN is Connecting the City's Entrepreneurs"/>
                <Short2_BlogComponent imgLink="https://thumbs.dreamstime.com/b/abstract-rocket-launch-graph-growing-up-blue-background-start-up-business-development-to-success-growing-growth-concept-354902762.jpg" heading="From Idea to Launch: TEN's Step-by-Step Guide to Starting Your Business" className="lg:pt-20"/>
              </div>

              <div className="flex md:px-5 lg:px-10 justify-between items-center md:mb-10 lg:flex-row flex-col mt-8 lg:gap-5">
                <div className="md:pl-2 md:mb-8 pl-3 mb-6 lg:mb-0">
                  <ShortBlogComponent heading="Mastering the Pitch: Essential Skills for Securing Funding" imgLink={photo1} />
                </div>
                <div className="md:pl-1 lg:pl-0 pl-3 mb-6 md:mb-0">
                  <ShortBlogComponent heading="Upcoming Events and Networking Opportunities at TEN" imgLink={photo2}/>
                </div>
              </div>

              <div className="flex md:px-5 lg:px-10 justify-between items-center md:mb-10 lg:flex-row flex-col mt-8">
                <div className="md:pl-2 md:mb-8 pl-3 mb-6 lg:mb-0">
                  <ShortBlogComponent heading="Importance of Mentorship: How TEN Connects You with Industry Experts" imgLink={photo3}/>
                </div>
                <div className="md:pl-1 lg:pl-0 pl-3 mb-6 md:mb-0">
                  <ShortBlogComponent heading="Navigating the Delhi Market: Trends and Opportunities for Startups" imgLink={photo4}/>
                </div>
              </div>

              <div className="h-fit md:mt-20 pt-10 border-t-2 border-gray-300 md:px-8">
                <div className="mb-10 px-4 md:px-0">
                  <div className="mb-4">
                    <p className="text-2xl">Our latest perspective</p>
                    <div className="flex justify-between items-center mt-1 pr-4">
                    <button className={` px-5 py-2 ${showAll ? "bg-black text-white border-black" : "border-black hover:bg-slate-50 text-black border-2" } rounded-full mt-4 md:mb-0 mb-3`} onClick={showAllData}>All Services</button>
                      <button onClick={() => setShowFilter(true)} className="flex px-3 py-2 justify-center items-center rounded-md border-2 border-black gap-2 text-sm hover:bg-slate-100"><IoFilterOutline size={16}/>Filter</button>
                    </div>
                  </div>
                </div>

                <div className="px-4 md:px-0">
                  {filteredBlogs.slice(0, showMoreBlogs ? filteredBlogs.length : 2).map((blog, index) => (
                    <LongBlogComponent
                      key={index}
                      heading={blog.title}
                      imgLink={blog.img}
                      data={blog.data}
                    />
                  ))}
                </div>

                <div className="w-full flex justify-center">
                  { filteredBlogs.length>2 ?<>
                    <button className="text-black border-2 border-black hover:bg-slate-200 rounded-md px-4 py-2 cursor-pointer mb-6" onClick={() => setShowMoreBlog(!showMoreBlogs)}>
                    {showMoreBlogs ? "Show less blogs" : "See more blogs"}
                  </button></>:""
                  }
                </div>
              </div>

              {showFilter && (
                <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
                  <div className="w-11/12 md:w-1/2 h-fit bg-white rounded-lg shadow-lg my-5 md:my-0">
                    <div className="flex justify-between items-center p-6 border-b border-gray-400">
                      <p className="text-2xl font-semibold">Filter</p>
                      <RxCross1 onClick={() => setShowFilter(false)} className="cursor-pointer" size={24} />
                    </div>

                    <div className="p-6 flex flex-wrap">
                      {allTags.map((item, id) => (
                        <div key={id} className="pr-4 pb-2 text-black">
                          <button
                            onClick={() => toggleFilter(item)}
                            className={`border-2 px-5 py-1 rounded-full whitespace-nowrap inline-flex ${
                              selectedFilters.includes(item)
                                ? "bg-black text-white border-black"
                                : "border-black hover:bg-slate-50"
                            }`}
                          >
                            {item}
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 flex justify-end border-t border-gray-400">
                      <button 
                          onClick={() => {
                              if (selectedFilters.length === allTags.length) {
                              setShowAll(true);
                              } else {
                              setShowAll(false);
                              }
                              setShowFilter(false);
                          }}
                          className="bg-blue-600 active:scale-105 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
                              
                          Apply Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : currentScreen === "White_papers" ? (
            <White_papers/>
          ) : (
            <News_Announcements/>
          )}
        </div>
      </div>
    );
}

export default Blogs;
