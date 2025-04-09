export default function CTASection() {
  return (
    <div
      className="w-full py-20 bg-blue-700 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/facing-challenge-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Facing a challenge?
        </h2>
        <p className="text-xl text-white mb-10">
          We will make sure you stay ahead of the curve.
        </p>
        <div className="flex justify-center">
          <a
            href="/contact-us"
            className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-black hover:bg-opacity-10 transition-colors duration-300 rounded"
          >
            Let's Talk
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
