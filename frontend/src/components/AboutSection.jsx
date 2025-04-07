export default function AboutSection() {
  return (
    <div className="relative w-full py-16 bg-emerald-50 min-h-screen grid place-items-center">
      {/* Background pattern as a full background */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat bg-right-bottom bg-cover" 
        style={{backgroundImage: "url(https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/bg-image.png)"}}
      ></div>
     
      <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            We're TEN:<br />
            united by innovation,<br />
            collaboration and<br />
            Infinite Possibilities.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-800 max-w-lg">
            Watch our journey unfold as we celebrate 
            the people and milestones that make us 
            unstoppable.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://media.licdn.com/dms/image/v2/C4D1BAQG_xzHlUzdS3w/company-background_10000/company-background_10000/0/1591434353248/the_entrepreneurship_network_cover?e=2147483647&v=beta&t=YvWyOiieYkU0-w75oqlVHNoHnoy4_VUQFycL1HtjUqI" 
              alt="TEN banner"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}