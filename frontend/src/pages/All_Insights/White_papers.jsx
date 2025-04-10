import React,{useState} from 'react'
import Short2_BlogComponent from '../../components/Short2_BlogComponent'
import { IoFilterOutline } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx';

function White_papers() {
    const [showFilter, setShowFilter] = useState(false);
    const [showMoreBlogs, setShowMoreBlog] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const [showAll,setShowAll] = useState(true);

    const blogData = [
        {
          title: "Fueling the Future: How TEN Nurtures Scalable, Sustainable Startups",
          img: "https://thecsrjournal.in/wp-content/uploads/2023/10/Circular-Economy-1.jpeg",
          tags: ["Inclusive Innovation",'Startup Models & Strategy'],
        },
        {
          title: "Youth, Innovation, and Inclusion: TEN’s Blueprint for Startup Success",
          img: "https://media.30seconds.com/tip/md/10-Qualities-of-Successful-Startup-Founders-and-Entreprene-17419-b1ff293414-1541613965.jpg",
          tags: ["Entrepreneurial Education",'Inclusive Innovation'],
        },
        {
          title: "EduTech and Entrepreneurship: The Double Disruption",
          img: "https://expertshare.live/wp-content/uploads/2022/05/What-is-an-elearning-platform.jpg",
          tags: ["Entrepreneurial Education"],
        },
        {
          title: "Scaling Dreams Responsibly: TEN’s Pay-After-Placement Innovation",
          img: "https://s3.us-west-1.amazonaws.com/idtech-2018-media-prd/header_carousel1_opl_hack_javascript_006507c308.jpg",
          tags: ["Startup Models & Strategy", "Student Empowerment"],
        },
        {
          title: "Empowering Entrepreneurs Through EdTech Innovation",
          img: "https://mytutorpartners.com/wp-content/uploads/2024/04/featured-image-04-02.jpg",
          tags: ["Entrepreneurial Education"],
        },
  
        {
          title: "Reimagining Entrepreneurial Learning in India’s Digital Age",
          img: "https://media.istockphoto.com/id/1300822108/photo/group-of-unrecognisable-international-students-having-online-meeting.jpg?s=612x612&w=0&k=20&c=-X6IUTSdDMfJrFdQFhrDuwhnMrM1BLjfrLzydpibCTA=",
          tags: ["Entrepreneurial Education"],
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
  
      const allTags = ['Student Empowerment', 'Inclusive Innovation','Startup Models & Strategy','Entrepreneurial Education'];

      const showAllData = () => {
        setSelectedFilters([]); 
        setShowAll(true);        
      };


  return (
    <>
    <div className=""> 
           
        <div className=" ">
       
            <div className="w-full h-fit flex justify-center items-center pt-16 md:pt-0 flex-col mb-10 md:mb-0 px-8 md:px-0">
    
                <div className="py-10 w-full h-fit md:px-12  gap-16 flex justify-center scale-110 md:flex-row flex-col lg:px-28 ">
    
                    <Short2_BlogComponent imgLink="https://media.istockphoto.com/id/1271364435/vector/unicorn-startup-concept-illustration.jpg?s=612x612&w=0&k=20&c=Afpj5aY5ieLke2hEO4ETyFRomZrpvOceBLvacFE0JmM=" heading="From College Campuses to Unicorn Dreams: The TEN Model"  />
        
                    <Short2_BlogComponent imgLink="https://media.licdn.com/dms/image/v2/C4D12AQH1efcp4wI2Hw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1536330758610?e=2147483647&v=beta&t=W7DYT9viDsJRzDE34qWQNKnBxb8-RDx-kmNPzFjIzfI" heading="Bridging the Skills Gap: A Roadmap to Practical Startup Education"/>
    
                </div>
       
            </div>

            <div className="h-fit md:mt-20 pt-10 border-t-2 border-gray-300 md:px-8">
                <div className="mb-10 px-4 md:px-0 ">
                    <div className="mb-4">
                        <p className="text-2xl">Our latest prespective</p>
                        <div className="flex justify-between items-center mt-1 pr-4 ">
                            <button className={` px-5 py-2 ${showAll ? "bg-black text-white border-black" : "border-black hover:bg-slate-50 text-black border-2" } rounded-full mt-4 md:mb-0 mb-3`} onClick={showAllData}>All Services</button>
                            <button onClick={()=>setShowFilter(true)}
                                className="flex px-3 py-2 justify-center items-center rounded-md border-2 border-black gap-2 text-sm hover:bg-slate-100 "><IoFilterOutline size={16}/>Filter</button>
                        </div>
                    </div>
                </div>
        
                <div className="px-4 md:px-0">
                    
                
                <div className=" w-full h-fit flex flex-col justify-center   gap-16 md:grid md:grid-cols-2   mb-8  ">

                        {filteredBlogs.slice(0, showMoreBlogs ? filteredBlogs.length : 2).map((blog, index) => (
                            <Short2_BlogComponent
                            key={index}
                            heading={blog.title}
                            imgLink={blog.img}
                            
                            />
                        ))}
                </div>

                
        
                
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
                <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 ">
                    <div className="w-11/12 md:w-1/2 h-fit bg-white rounded-lg shadow-lg my-5  md:my-0 ">
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

        </div>

        {/* <div className="h-[1px] w-full bg-gray-300 md:my-20 mb-8"></div> */}

        
    </div>
              
    </>
  )
}

export default White_papers
