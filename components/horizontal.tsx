import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Smartphone, Code, Globe, PenTool, Target, TrendingUp, Users, DollarSign,
    Settings,
    BarChart3
} from "lucide-react";

const businessTypes = [
    {
        id: 1,
        number: "01",
        title: "SaaS",
        description: "Software as a Service businesses",
        icon: Code,
        highlights: [
            "B2B SaaS",
            "Productivity tools",
            "Niche software",
            "API-based services"
        ],
        priceRange: "Under $10M",
        targetMRR: "$5k - $300k"
    },
    {
        id: 2,
        number: "02",
        title: "Mobile Apps",
        description: "iOS and Android applications",
        icon: Smartphone,
        highlights: [
            "Utility applications",
            "Consumer-focused apps",
            "AI apps"
        ],
        priceRange: "$50k - $3M",
        targetMRR: "$1k - $150k"
    },
    {
        id: 3,
        number: "03",
        title: "Content Sites",
        description: "Blogs, newsletters, media sites",
        icon: PenTool,
        highlights: [
            "Niche blog networks",
            "Newsletter businesses",
            "Affiliate-driven sites"
        ],
        priceRange: "$50k - $1M",
        targetMRR: "$1k - $150k"
    },
   
   
    {
        id: 7,
        number: "04",
        title: "Community Platforms",
        description: "Forums and social networks",
        icon: Users,
        highlights: [
            "Niche communities",
            "Membership sites",
            "Discord servers",
            "Professional networks"
        ],
        priceRange: "Under $500k",
        targetMRR: "$2k - $30k"
    },
    {
        id: 8,
        number: "05",
        title: "Fintech and business tools",

        description: "Fintech and business utilities",
        icon: DollarSign,
        highlights: [
            "Budgeting applications",
            "Investment trackers",
            "Business calculators",
            "Payment processors"
        ],
        priceRange: "Under $1M",
        targetMRR: "$5k - $50k"
    }
];

// BusinessCard component with mobile responsive styling
const BusinessCard = ({ business }: { business: any }) => {
    const Icon = business.icon;

    return (
        <div className="w-full flex-shrink-0 h-full px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-center relative">
            {/* Content card */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto relative z-20 overflow-hidden h-5/6 sm:h-4/5">
                {/* Icon header */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center rounded-bl-2xl sm:rounded-bl-3xl bg-gradient-to-br from-blue-500 to-purple-500">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
                </div>

                {/* Number tab */}
                <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 top-0 rounded-b-lg sm:rounded-b-xl px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-sm sm:text-base font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    {business.number}
                </div>

                {/* Card Content */}
                <div className="pt-12 sm:pt-16 md:pt-18 lg:pt-20 px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10 h-full flex flex-col">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{business.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg font-light italic text-gray-300 mt-1 sm:mt-2 mb-4 sm:mb-6">{business.description}</p>

                    <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 rounded-full mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-400"></div>

                    {/* Price and MRR info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-600/30">
                            <div className="text-green-400 font-bold text-xs sm:text-sm">Price Range</div>
                            <div className="text-white text-sm sm:text-base md:text-lg font-semibold">{business.priceRange}</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-600/30">
                            <div className="text-blue-400 font-bold text-xs sm:text-sm">Target MRR</div>
                            <div className="text-white text-sm sm:text-base md:text-lg font-semibold">{business.targetMRR}</div>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 flex-1">
                        {business.highlights.map((highlight: string, idx: number) => (
                            <div key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400 mr-2 sm:mr-3 flex-shrink-0"></div>
                                <p className="text-gray-300 text-sm sm:text-base">{highlight}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4 sm:mt-6 w-full">
                        <a href="/#contact" className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-semibold block text-center text-sm sm:text-base">
                            Review Listing
                        </a>
                    </div>
                </div>
            </div>

            {/* Step indicator */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {businessTypes.map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${i === business.id - 1 ? 'bg-blue-400' : 'bg-white/30'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function BusinessTypesHorizontal() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    // Adjust the scroll range for smoother horizontal movement
    const x = useTransform(scrollYProgress, [0, 0.85], ["0%", `-${(businessTypes.length - 1) * 100}%`]);
    const progressWidth = useTransform(scrollYProgress, [0, 0.85], ["0%", "100%"]);

    return (
        <div ref={targetRef} className="relative w-full" style={{ height: `${(businessTypes.length + 1) * 100}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden z-10">
                <section className="h-full w-full bg-slate-900 relative">
                    {/* Enhanced Background Effects */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute top-1/3 -right-16 sm:-right-32 w-40 sm:w-80 h-40 sm:h-80 bg-white/5 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
                        <div className="absolute bottom-1/4 left-1/4 w-36 sm:w-72 h-36 sm:h-72 bg-blue-400/10 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]"></div>
                        <div className="absolute top-3/4 right-1/3 w-32 sm:w-64 h-32 sm:h-64 bg-purple-500/8 rounded-full blur-2xl animate-[pulse_8s_ease-in-out_infinite]"></div>
                    </div>

                    {/* Sophisticated Grid Pattern */}
                    <div className="absolute inset-0 opacity-20 sm:opacity-30">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:60px_60px]"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:10px_10px] sm:bg-[size:20px_20px]"></div>
                    </div>

                    {/* Progress bar */}
                    <div className="absolute top-4 sm:top-6 left-0 w-full z-50 px-4 sm:px-8 md:px-12">
                        <div className="h-0.5 sm:h-1 bg-gray-800 rounded-full">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                style={{ width: progressWidth }}
                            />
                        </div>
                    </div>

                    <div className="absolute inset-0 overflow-hidden flex items-center justify-start">
                        {/* Background heading text */}
                        <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 px-4 sm:px-8 md:px-12 top-1/2 transform -translate-y-1/2 text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg z-0 pointer-events-none">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold tracking-tighter mb-4 sm:mb-6 md:mb-8">
                                Types of
                                <br />
                                <span className="flex text-blue-400">
                                    Businesses
                                </span>
                                <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-400 mt-1 sm:mt-2 block">
                                    We Acquire
                                </span>
                            </h1>
                        </div>

                        {/* Horizontal carousel */}
                        <motion.div
                            style={{ x }}
                            className="flex flex-nowrap h-full pt-12 sm:pt-16 md:pt-20 pb-0 w-full relative z-10"
                        >
                            {businessTypes.map((business) => (
                                <BusinessCard
                                    key={business.id}
                                    business={business}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                /* Custom backdrop blur for better performance */
                .backdrop-blur-sm {
                    backdrop-filter: blur(4px);
                }

                /* Enhanced gradient effects */
                .bg-gradient-to-r {
                    background-image: linear-gradient(to right, var(--tw-gradient-stops));
                }

                .bg-gradient-to-br {
                    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
                }

                /* Smooth transitions for all interactive elements */
                * {
                    transition-property: transform, opacity, border-color, background-color, box-shadow;
                    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                }

                /* Enhanced shadow effects */
                .shadow-2xl {
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                }

                /* Prevent horizontal overflow on mobile */
                @media (max-width: 640px) {
                    .overflow-hidden {
                        overflow-x: hidden;
                    }
                }
            `}</style>
        </div>
    );
}