import React, {useState} from 'react'
import Short2_BlogComponent from '../../components/Short2_BlogComponent'
import LongBlogComponent from '../../components/LongBlogComponent'

function News_Announcements() {
    const [showMoreBlogs, setShowMoreBlog] = useState(false);  
  return (
    <>
    <div className="">
      <div className="">
        {/* <div className="w-full h-fit flex justify-center items-center pt-16 flex-col">
          <h1 className="md:text-5xl text-3xl font-semibold">News &</h1>
          <h1 className="md:text-5xl text-3xl font-semibold">Announcements</h1>
          <div className="py-10 w-full h-fit flex justify-start md:justify-center gap-6 overflow-x-auto whitespace-nowrap ">
            {["All Insights", "Blogs", "White Papers", "News & Announcements"].map((item, id) => (
              <button key={id} className="hover:text-blue-800 hover:border-b-2 border-blue-900 pb-5 inline-flex whitespace-nowrap">
                {item}
              </button>
            ))}
          </div>
    
        </div> */}

        <div className="px-4 md:px-0">
              
            <LongBlogComponent heading="TEN Crosses 10,000+ Student Entrepreneurs in Its Network" imgLink="https://images.prismic.io/equitise-v3/9f58adf8-46ab-47f2-bc7b-6aaac6fdd940_1-Banner_1160x652.5.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max" data ="TEN celebrates a major milestone—onboarding over 10,000 student entrepreneurs into its learning and startup ecosystem. This achievement reflects TEN's growing influence as India’s leading student-focused startup enabler."/>

            <LongBlogComponent heading="TEN Hosts India’s Largest Virtual Startup Bootcamp for College Students" imgLink="https://media.istockphoto.com/id/1448479624/photo/talking-and-working-on-video-calling.jpg?s=612x612&w=0&k=20&c=4_R3z7_4v5IHcky0GrOV_u1XLCYYMSQb0VOTDNuqJK8=" data ="Over 3,000 students participated in TEN’s nationwide virtual startup bootcamp this year, making it the largest event of its kind. The 5-day bootcamp included masterclasses from top founders, live product design sessions, and mini pitch competitions."/>
    
            <LongBlogComponent heading="TEN Launches Pay-After-Placement Program for Budding Entrepreneurs" imgLink="https://us.images.westend61.de/0001739205pw/excited-hr-manager-shaking-hands-with-a-successful-job-candidate-during-an-interview-happy-businesswoman-hiring-a-new-employee-in-her-office-cheerful-businesswoman-forming-a-new-partnership-JLPSF12911.jpg" data ="TEN’s revolutionary Pay-After-Placement model is now live. It allows students to enroll in startup courses and pay only once they land a job or build a revenue-generating venture—making startup education risk-free and inclusive."/>
    
            {
              showMoreBlogs && 
              <>
                <LongBlogComponent heading="TEN Introduces AI-Based Founder Readiness Assessment Tool " imgLink="https://media.licdn.com/dms/image/v2/D5612AQFZX36P3WVroQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1724526149175?e=2147483647&v=beta&t=OP3dO1mbxSMRR8X6KBmBWZap2yEdk6Vpwned_NaUiQY" data ="TEN has launched a new AI-powered tool that helps aspiring founders assess their entrepreneurial readiness. The tool offers personalized learning paths based on users' leadership traits, problem-solving skills, and idea clarity."/>
    
                <LongBlogComponent heading="TEN Expands to 200+ Partner Colleges Across India" imgLink="https://elements-resized.envatousercontent.com/elements-video-cover-images/files/224357295/India%20map%20Black%20590x332.jpg?w=500&cf_fit=cover&q=85&format=auto&s=ac805f25dcdbbbb468c45d9a68b7677b8041ee671837024b0be997ce11043309" data ="With new college partnerships in Maharashtra, Tamil Nadu, and the North East, TEN has extended its reach to over 200 academic institutions—bringing entrepreneurial education to students across every region of India."/>
              </> 
            }
    
            
                  
        </div>
        <div className="w-full flex justify-center">
          <button className="text-black border-2 border-black hover:bg-slate-200 rounded-md px-4 py-2 cursor-pointer mb-6" onClick={()=>setShowMoreBlog(!showMoreBlogs)}>{showMoreBlogs?"Show less blogs":"See more blogs"}</button>
        </div>

      </div>
    </div>
    </>
  )
}

export default News_Announcements
