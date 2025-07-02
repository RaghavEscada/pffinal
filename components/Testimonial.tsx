import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Jhonny Wise",
        email: "Engineering Analyst",
        image: "/j.png",
        description: `A month ago, I wouldn't have even known where to look to buy a business. Now, I'm closing my first acquisition! Dev supported me through the entire process, saving me time and money—he even negotiated the price from $13k to $5k. The community and guidance made the process much less intimidating. Highly recommend!`
    },
    {
        name: "Kenny Ostyn Harsono",
        email: "Engineer",
        image: "/k.png",
        description: `My first months with Pocket fund have been phenomenal. I learned the mindset and methods to find and talk to sellers. It's one of the only complete resources out there—highly recommend!`
    },
    {
        name: "Naman",
        email: "Buyer Testimonial",
        image: "/naman.png", // Changed to local image
        description: `I acquired NYC Bytes for under $5,000 with Pocket Fund's help. They guided me through every step, from finding the right business to due diligence and negotiation. The process was formal, transparent, and supportive. I now feel confident growing my new business!`
    },
    {
        name: "Marcus",
        email: "Seller Testimonial",
        image: "/marcus.png", // Changed to local image
        description: `I sold NYC Bites with Pocket Fund. The process was smooth, transparent, and trustworthy—using escrow and clear communication. Their responsiveness and professionalism made me feel comfortable every step of the way.`
    }
];

const Star = ({ filled }: { filled: boolean }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={filled ? "#FFD700" : "none"}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={filled ? "#FFD700" : "#E5E7EB"}
        className="h-6 w-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.25L6.516 20.06a.75.75 0 01-1.09-.79l.82-4.773-3.467-3.393a.75.75 0 01.417-1.28l4.794-.697L11.24 4.3a.75.75 0 011.352 0l2.144 4.918 4.794.697a.75.75 0 01.417 1.28l-3.467 3.393.82 4.773a.75.75 0 01-1.09.79L12 17.25z"
        />
    </svg>
);

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        if (!testimonials.length) return;

        const intervalId = setInterval(() => {
            setCurrentTestimonial(
                (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
            );
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    if (!testimonials.length) return null;

    const handlePrevious = () => {
        setCurrentTestimonial((prevTestimonial) =>
            prevTestimonial === 0 ? testimonials.length - 1 : prevTestimonial - 1,
        );
    };

    const handleNext = () => {
        setCurrentTestimonial(
            (prevTestimonial) => (prevTestimonial + 1) % testimonials.length,
        );
    };

    const { description, name, image, email } = testimonials[currentTestimonial] || {};

    return (
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        What Our <span className="text-blue-600">Clients Say</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Real feedback from real clients and partners who have transformed their businesses with us
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main testimonial card */}
                    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl"></div>

                        <div
                            key={currentTestimonial}
                            className="relative z-10 flex flex-col items-center text-center space-y-6 transition-all duration-500 ease-in-out"
                        >
                            {/* Quote icon */}
                            <div className="text-blue-500/20 text-6xl font-serif leading-none"></div>
                        
                            {/* Testimonial text */}
                            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed max-w-3xl">
                                {description}
                            </blockquote>

                            {/* Stars */}
                            <div className="flex space-x-1">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <Star key={index} filled={true} />
                                ))}
                            </div>

                            {/* Author info */}
                            <div className="flex flex-col items-center space-y-3 pt-4">
                                <div className="relative">
                                    <Image
                                        src={image}
                                        width={64}
                                        height={64}
                                        alt={`${name} avatar`}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 shadow-lg"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-lg font-semibold text-slate-800">
                                        {name}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium">
                                        {email}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-slate-200 rounded-full p-3 hover:bg-slate-50 hover:shadow-xl transition-all duration-200 hover:scale-105"
                        onClick={handlePrevious}
                        aria-label="Previous Testimonial"
                    >
                        <ArrowLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg border border-slate-200 rounded-full p-3 hover:bg-slate-50 hover:shadow-xl transition-all duration-200 hover:scale-105"
                        onClick={handleNext}
                        aria-label="Next Testimonial"
                    >
                        <ArrowRight className="w-5 h-5 text-slate-600" />
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                ? 'bg-blue-500 scale-125'
                                : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                            onClick={() => setCurrentTestimonial(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;