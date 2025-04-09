export default function ReadAlsoSection() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Read also</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Leadership Card */}
        <a
          href="#"
          className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div
            className="h-56 bg-cover bg-center p-6 flex flex-col justify-between"
            style={{
              backgroundImage:
                "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/our-history.webp')",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backgroundBlendMode: "darken",
            }}
          >
            <div>
              <p className="text-white text-sm">
                The great minds behind leadership
              </p>
              <h3 className="text-white text-3xl font-bold mt-2">Leadership</h3>
            </div>
            <div className="self-end">
              <span className="text-white text-sm flex items-center">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </a>

        {/* Testimonials Card */}
        <a
          href="/testimonials"
          className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
          <div
            className="h-56 bg-cover bg-center p-6 flex flex-col justify-between"
            style={{
              backgroundImage:
                "url('https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/testimonial.webp')",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              backgroundBlendMode: "darken",
            }}
          >
            <div>
              <p className="text-white text-sm">What our clients say</p>
              <h3 className="text-white text-3xl font-bold mt-2">
                Testimonials
              </h3>
            </div>
            <div className="self-end">
              <span className="text-white text-sm flex items-center">
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
