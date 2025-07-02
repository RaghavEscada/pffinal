"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, CheckCircle, Target, TrendingUp, Users, Zap, BarChart3, DollarSign, Globe, Eye, Trophy } from "lucide-react";

const customerAvatars = [
    {
        title: "First-Time Buyers",
        subtitle: "Professionals Seeking Ownership",
        icon: "🎯",
        age: "22-35",
        profile: "Consultants, tech leads, finance pros — people with cash, skills, and ambition. Stuck in golden handcuffs, they want to break free and own something real.",
        painPoints: [
            "No idea how to find a legit business to buy",
            "Afraid of overpaying or picking a lemon",
            "Too busy to evaluate dozens of listings",
            "No idea how to operate once they acquire",
            "Paralyzed by risk, information, and analysis paralysis"
        ],
        solutions: [
            "We do the sourcing, filtering, and flagging",
            "Full-stack diligence and negotiation support",
            "Access to vetted operators and post-acq help",
            "Custom playbooks for first-time buyers"
        ],
        containerColor: "bg-emerald-900",
        colors: [[34, 197, 94], [22, 163, 74]]
    },
    {
        title: "Solo Founder",
        subtitle: "Founder-Led Holdcos",
        icon: "🚀",
        age: "27-45",
        profile: "Builders with capital from consulting, content, or agencies seeking portfolio growth",
        painPoints: [
            "Time-starved from other ventures",
            "Scaling challenges post-acquisition",
            "Hard to find quality small deals",
            "Need systematic approach"
        ],
        solutions: [
            "High-volume off-market sourcing",
            "Deep diligence & deal structuring",
            "Operator pipelines with rev-share",
            "Post-close scaling support"
        ],
        containerColor: "bg-pink-900",
        colors: [[236, 72, 153], [219, 39, 119]]
    },
    {
        title: "Private Equity",
        subtitle: "PE Firms, Family Offices, Search Funds with $1M-$20M AUM",
        icon: "🏛️",
        dealSize: "$250K–$2M typical deal size",
        profile: "Smart capital doing $250K–$2M size acquisitions — without the overhead of big deal teams.",
        painPoints: [
            "Traditional sourcing channels are too noisy or overpriced",
            "Internal deal teams cost too much below $5M AUM",
            "Operational handover slows down post-close momentum",
            "Struggling to build repeatable deal flow systems",
            "Lack of signal vs noise in the market"
        ],
        solutions: [
            "Premium off-market sourcing, fully managed by our deal team",
            "Operator-first approach with built-in handover & accountability",
            "Cost-effective support structure for full-funnel M&A",
            "Customizable playbooks built for speed, scale, and execution",
            "Aligned pricing — we only win when you do"
        ],
        containerColor: "bg-sky-600",
        colors: [[14, 165, 233], [59, 130, 246]]
    },
    {
        title: "Indie Hackers",
        subtitle: "Solo Acquirers",
        icon: "⚡",
        age: "18-28",
        profile: "Engineers and grads from Tier-1/2 cities eager for entrepreneurship opportunities",
        painPoints: [
            "Unsure how to evaluate deals",
            "Fear of buying a 'lemon'",
            "No operational talent post-acquisition",
            "Overwhelmed by low-quality listings"
        ],
        solutions: [
            "Curated off-market deal flow",
            "Red-flag screening & negotiation",
            "Operator placement & handholding",
            "First-time buyer playbooks"
        ],
        containerColor: "bg-emerald-900",
        colors: [[34, 197, 94], [22, 163, 74]]
    }
];

const Section = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
    <div className="py-20 px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                {title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
            </p>
        </motion.div>
        {children}
    </div>
);

const AvatarCard = ({ avatar }: { avatar: any }) => {
    const [hovered, setHovered] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-white/10 group/canvas-card flex items-center justify-center w-full mx-auto p-6 relative min-h-[45rem] rounded-3xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30"
            style={{
                background: "rgba(15, 23, 42, 0.8)",
            }}
        >
            <div className="relative z-20 w-full">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition-all duration-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-40 mx-auto flex flex-col items-center justify-center">
                    <div className="text-8xl mb-6 transition-transform duration-300 group-hover/canvas-card:scale-110">{avatar.icon}</div>
                    {avatar.dealSize ? (
                        <div className="mt-6 px-6 py-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                            <span className="text-blue-300 text-lg font-medium">{avatar.dealSize}</span>
                        </div>
                    ) : (
                        <div className="mt-6 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30">
                            <span className="text-purple-300 text-lg font-medium">Age: {avatar.age}</span>
                        </div>
                    )}
                </div>

                <div className="opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:-translate-y-2 transition-all duration-300 px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-white text-3xl font-bold mb-2">{avatar.title}</h2>
                        <h3 className="text-purple-300 text-xl font-semibold mb-2">{avatar.subtitle}</h3>
                        {avatar.title === "Private Equity" && (
                            <div className="text-blue-400 text-base font-semibold mb-2">The deal team you do not have to hire.</div>
                        )}
                        <p className="text-base leading-relaxed text-gray-300">
                            {avatar.profile}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 text-sm">
                        <div className="space-y-3">
                            <h4 className="text-red-400 font-bold text-lg mb-4">Pain Points</h4>
                            {avatar.painPoints.map((point: string, idx: number) => (
                                <div key={idx} className="flex items-start">
                                    <span className="text-red-400 mr-3 mt-1 text-lg">×</span>
                                    <span className="text-gray-300">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-green-400 font-bold text-lg mb-4">Our Solutions</h4>
                            {avatar.solutions.map((solution: string, idx: number) => (
                                <div key={idx} className="flex items-start">
                                    <span className="text-green-400 mr-3 mt-1 text-lg">✓</span>
                                    <span className="text-gray-300">{solution}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TrackRecord = () => {
    return (
        <Section title="Who We Serve" subtitle="Four distinct customer segments, each with unique needs and solutions">
            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {customerAvatars.map((avatar, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <AvatarCard avatar={avatar} />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default TrackRecord;