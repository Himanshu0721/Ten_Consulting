import React from "react";

const pillarsData = [
    {
        id: 1,
        title: "Customer Assist",
        icon: "https://img.icons8.com/ios-filled/50/handshake.png",
    },
    {
        id: 2,
        title: "Skill Assessment",
        icon: "https://img.icons8.com/ios-filled/50/clipboard.png",
    },
    {
        id: 3,
        title: "Sentiment Analysis",
        icon: "https://img.icons8.com/ios-filled/50/idea.png",
    },
    {
        id: 4,
        title: "Credit History Analysis",
        icon: "https://img.icons8.com/ios-filled/50/speedometer.png",
    },
];

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen pt-2 bg-gradient-to-r from-black via-purple-900 to-blue-900 text-white">


            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 md:px-10 mt-10">
                {/* Left Section */}
                <div className="w-full md:w-1/2 space-y-6 text-left">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        TEN's <span className="text-yellow-500">AI-first</span> COE
                    </h2>

                    {/* AI - FIRST Section */}
                    <div className="flex items-center space-x-3 mt-4">
                        <img
                            src="https://img.icons8.com/fluency/48/000000/artificial-intelligence.png"
                            alt="AI Icon"
                            className="w-8 h-8"
                        />
                        <h3 className="text-lg font-semibold">AI - FIRST</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Our Center of Excellence (CoE) serves as a centralized hub for
                        developing and deploying AI solutions specifically designed to drive
                        AI-led digital transformation across our customer bases. The CoE
                        actively collaborates with all the business units within the
                        organization to embed AI meaningfully into our service offerings,
                        ensuring seamless integration and delivering tangible results across
                        the board.
                    </p>

                    {/* CTA Button */}
                    <button className="mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg">
                        Talk to an expert →
                    </button>
                </div>

                {/* Right Section - Stats */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 grid grid-cols-2 gap-8 text-center">
                    {/* AI Technologies */}
                    <div>
                        <h3 className="text-3xl font-bold">6+</h3>
                        <p className="text-sm text-gray-300">AI Technologies</p>
                    </div>

                    {/* Frameworks */}
                    <div>
                        <h3 className="text-3xl font-bold">5+</h3>
                        <p className="text-sm text-gray-300">Frameworks</p>
                    </div>

                    {/* FTE Experts Team */}
                    <div>
                        <h3 className="text-3xl font-bold">70+</h3>
                        <p className="text-sm text-gray-300">FTE Experts Team</p>
                    </div>

                    {/* Projects Delivered */}
                    <div>
                        <h3 className="text-3xl font-bold">20+</h3>
                        <p className="text-sm text-gray-300">Projects Delivered</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-black via-purple-900 to-blue-900 text-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        Our AI Pillars
                    </h2>

                    {/* AI Pillars Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {pillarsData.map((pillar) => (
                            <div
                                key={pillar.id}
                                className="bg-blue-950 bg-opacity-40 rounded-lg p-6 hover:shadow-lg transition duration-300"
                            >
                                <img
                                    src={pillar.icon}
                                    alt={pillar.title}
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
