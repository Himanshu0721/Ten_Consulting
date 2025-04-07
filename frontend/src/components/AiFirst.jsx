
export default function AIFirstBanner() {
  return (
    <div 
      className="relative w-full min-h-96 flex items-center px-8 py-16"
      style={{
        background: "url(https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/about%20us.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-purple-900 bg-opacity-90 z-0"></div>
      
      <div className="container mx-auto relative z-10 text-white">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l2.5 2.5L10 12l2 2 3.5-3.5L18 13l-6 6-6-6 2.5-2.5L12 5z" />
            </svg>
          </div>
          <span className="text-2xl font-bold">AI-<span className="font-light">first</span></span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl mb-8">
          At TEN, being AI-first is more than a technological choice-it's a fundamental part of who we are and what we stand for.
        </h1>
        
        <p className="text-lg md:text-xl max-w-4xl opacity-90 leading-relaxed">
          As a company fueled by innovation, we believe AI is a powerful way to unlock human potential, drive meaningful growth, and create solutions that truly make a difference for our clients and communities.
        </p>
      </div>
    </div>
  );
}