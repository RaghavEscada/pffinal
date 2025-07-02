import React from 'react';
import { Users, Award, Target, Zap, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Dev Shah",
        title: "Founder",
        description: "Dev is the force behind every smart acquisition at Pocket Fund. He pulls the levers on investment strategy, runs point on deal negotiations, and has a sixth sense for spotting undervalued digital assets. Equal parts operator and visionary, Dev turns bold ideas into bankable businesses.",
        initials: "DS",
        photo: "/dev.jpg",
        color: "blue",
        skills: ["Investment Strategy", "Deal Negotiation", "Market Analysis"]
    },
    {
        name: "Aniket Gupta",
        title: "COO & Chief Analyst",
        description: "Aniket is the nerve center of Pocket Fund — managing operations, leading analysis, and keeping the entire machine running smooth. He breaks down messy businesses, finds hidden upside, and ensures every acquisition runs on rails. If Dev dreams it, Aniket makes it real (and scalable).",
        initials: "AG",
        photo: "/aniket.jpeg",
        color: "purple",
        skills: ["Operations", "Business Analysis", "Process Optimization"]
    },
    {
        name: "Adarsh Ranjan",
        title: "Analyst & Sales Lead",
        description: "Adarsh brings structure to chaos. From diving into financials to mapping out buyer personas, he is the one turning raw data into sharp insights. With a sharp mind and a steady hand, Adarsh helps power the decisions that move deals forward.",
        initials: "AR",
        photo: "/adarsh.jpeg",
        color: "emerald",
        skills: ["Financial Analysis", "Sales Strategy", "Data Insights"]
    }
];
const colorVariants = {
    blue: {
        gradient: 'from-blue-500 to-blue-600',
        border: 'border-blue-400/30',
        glow: 'from-blue-500/20 via-purple-500/10 to-blue-600/20',
        hover: 'group-hover:text-blue-300 group-hover:border-blue-500/30 hover:shadow-blue-500/10',
        skill: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    },
    purple: {
        gradient: 'from-purple-500 to-purple-600',
        border: 'border-purple-400/30',
        glow: 'from-purple-500/20 via-blue-500/10 to-purple-600/20',
        hover: 'group-hover:text-purple-300 group-hover:border-purple-500/30 hover:shadow-purple-500/10',
        skill: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    },
    emerald: {
        gradient: 'from-emerald-500 to-emerald-600',
        border: 'border-emerald-400/30',
        glow: 'from-emerald-500/20 via-blue-500/10 to-emerald-600/20',
        hover: 'group-hover:text-emerald-300 group-hover:border-emerald-500/30 hover:shadow-emerald-500/10',
        skill: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    }
};

const Team = () => (
    <div className="py-32 px-6 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-900 relative overflow-hidden" id="meet-the-team">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-24">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20 rounded-full px-8 py-4 mb-8 shadow-lg">
                    <Users className="w-6 h-6 text-blue-400 mr-3" />
                    <span className="text-sm font-semibold text-blue-300 tracking-wide">People</span>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
                    Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">Team</span>
                </h2>
                <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
                    The curious minds transforming micro acquisitions.
                </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {teamMembers.map((member, index) => {
                    const colors = colorVariants[member.color as keyof typeof colorVariants];
                    return (
                        <div key={index} className="group relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110`}></div>

                            <div className={`relative bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl ${colors.hover} transition-all duration-500 group-hover:scale-105 overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col items-center">
                                    {/* Photo/Avatar */}
                                    <div className="relative mb-8">
                                        <div className="relative w-32 h-32 rounded-full overflow-hidden group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                            <Image
                                                width={100}
                                                height={100}
                                                src={member.photo}
                                                alt={member.name}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className={`absolute inset-0 rounded-full border-4 ${colors.border} shadow-2xl`}></div>
                                        </div>

                                        <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center border-4 border-slate-900 shadow-lg`}>
                                            <CheckCircle className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    {/* Name and Title */}
                                    <h3 className={`text-2xl lg:text-3xl font-black text-white mb-2 text-center transition-colors duration-300`}>
                                        {member.name}
                                    </h3>
                                    <div className={`text-${member.color}-400 font-bold text-lg mb-4 text-center`}>
                                        {member.title}
                                    </div>
                                    <div className={`h-1.5 w-20 bg-gradient-to-r ${colors.gradient} rounded-full mb-8 group-hover:w-32 transition-all duration-500`}></div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                        {member.skills.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold border ${colors.skill} backdrop-blur-sm`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-base text-center leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                        {member.description}
                                    </p>

                                    {/* Floating particles */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" style={{ animationDelay: '200ms' }}></div>
                                    <div className="absolute top-1/3 left-4 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Team Stats */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-4xl font-black text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
                    <div className="text-gray-300 font-semibold">Analysts</div>
                </div>
                <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-4xl font-black text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                    <div className="text-gray-300 font-semibold">Years Experience</div>
                </div>
                <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div className="text-4xl font-black text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="text-gray-300 font-semibold">Dedication</div>
                </div>
                <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-8 h-8 text-yellow-400" />
                    </div>
                    <div className="text-4xl font-black text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                    <div className="text-gray-300 font-semibold">Innovation</div>
                </div>
            </div>



        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/10 rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                />
            ))}
        </div>
    </div>
);

export default Team; 