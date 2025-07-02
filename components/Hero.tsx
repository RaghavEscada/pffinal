import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Target, TrendingUp, Users, Award, Briefcase, Play, DollarSign, Search, FileText, Handshake, UserCheck, BarChart3, ChevronDown } from "lucide-react";

// Enhanced Mouse Position Hook
interface MousePosition {
  x: number;
  y: number;
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

// Compact Text Flip Component
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface ContainerTextFlipProps {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["Acquisitions", "Deal Flow", "Portfolio Companies", "Strategic Roll-Ups", "Successful Exits"],
  interval = 2500,
  className,
  textClassName,
  animationDuration = 500,
}: ContainerTextFlipProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration / 2);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval, animationDuration]);

  return (
    <div className="relative inline-block">
      <span
        className={cn(
          "inline-block text-xl md:text-2xl lg:text-3xl font-bold transition-all duration-500",
          "bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent",
          "drop-shadow-sm",
          isAnimating ? "opacity-0 transform translate-y-2 scale-95" : "opacity-100 transform translate-y-0 scale-100",
          className,
        )}
      >
        {words[currentWordIndex]}
      </span>
    </div>
  );
}

// FIXED: Responsive Lottie Player Component
const LottiePlayer = ({ src }: { src: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        // Make it responsive with proper aspect ratio
        const size = Math.min(containerWidth, 500);
        setDimensions({ width: size, height: size });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center rounded-2xl overflow-hidden relative"
    >
      <div className="relative" style={{ width: dimensions.width, height: dimensions.height }}>
        <iframe
          src="https://cdn.lottielab.com/l/5Gn1jXUt1kSREm.html"
          className="w-full h-full border-0 rounded-2xl"
          title="Lottie Animation"
          frameBorder="0"
          style={{
            minWidth: '280px',
            minHeight: '280px',
            maxWidth: '500px',
            maxHeight: '500px'
          }}
        />
        {/* Badge overlay - positioned more precisely */}
        <div className="absolute bottom-2 right-2 w-32 h-12 bg-white rounded-sm opacity-100 z-10"></div>
      </div>
    </div>
  );
};

// Animation component
const AnimatedDiv = ({
  children,
  className = "",
  delay = 0,
  duration = 800,
  from = "opacity-0 translate-y-8",
  to = "opacity-100 translate-y-0"
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: string;
  to?: string;
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setInView(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ${inView ? to : from} ${className}`}
    >
      {children}
    </div>
  );
};

// Enhanced Deal Flow Section
const DealFlowSection = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
        }}></div>
      </div>

     
    </div>
  );
};

// Main Hero Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full">
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .floating { animation: float 6s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .duration-800 { transition-duration: 800ms; }
        .duration-600 { transition-duration: 600ms; }
      `}</style>

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <AnimatedDiv className="inline-flex items-center bg-blue-100 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3" />
                <span className="text-xs sm:text-sm font-semibold text-blue-800">First-of-its-kind Micro Private Equity Firm</span>
              </AnimatedDiv>

              {/* Main Headline */}
              <AnimatedDiv delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Pocket Fund</span>
                </h1>
              </AnimatedDiv>

              {/* Dynamic Subheadline - Restructured */}
              <AnimatedDiv delay={200} className="space-y-3 sm:space-y-4">
                <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                  Transforms Ideas Into
                </div>
                <div className="flex justify-center lg:justify-start">
                  <ContainerTextFlip
                    words={["Acquisitions", "Deal Flow", "Portfolio Companies", "Strategic Roll-Ups", "Successful Exits"]}
                    interval={1800}
                    animationDuration={400}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                  />
                </div>
              </AnimatedDiv>

              {/* Value Proposition */}
              <AnimatedDiv delay={300}>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl lg:max-w-none">
                  Pocket Fund bridges the gap between ambitious buyers and quality deals
                </p>
              </AnimatedDiv>

              {/* CTA Buttons */}
              <AnimatedDiv delay={500} className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/#contact" className="group px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  Start Your Search
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a href="/#timeline" className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-200 text-gray-700 bg-white rounded-xl hover:border-blue-200 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Our Process
                </a>
              </AnimatedDiv>
            </div>

            {/* Right: Enhanced Visual */}
            <AnimatedDiv delay={600} className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                  <LottiePlayer src="https://cdn.lottielab.com/l/5Gn1jXUt1kSREm.json" />
                </div>
              </div>
            </AnimatedDiv>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center pb-8">
          <ChevronDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </div>

      {/* Deal Flow Section */}
      <DealFlowSection />

      {/* 5 Core Services Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedDiv className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              Core Services
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              End-to-end acquisition support from deal sourcing to exit preparation
            </p>
          </AnimatedDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Search,
                title: "Deal Sourcing",
                description: "Off-market focus with exclusive deal flow and proprietary networks",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: FileText,
                title: "Due Diligence",
                description: "Technical, financial, and operational analysis with comprehensive risk assessment",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Handshake,
                title: "Deal Structuring & Negotiation",
                description: "Optimal terms negotiation and transaction structure optimization",
                color: "from-red-500 to-red-600"
              },
              {
                icon: UserCheck,
                title: "Transition + Operator Placement",
                description: "Seamless handover with vetted operator matching and integration support",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: BarChart3,
                title: "Growth Playbooks + Exit Prep",
                description: "Strategic growth roadmaps and exit strategy preparation for maximum value",
                color: "from-pink-500 to-pink-600"
              }
            ].map((service, index) => (
              <AnimatedDiv
                key={index}
                className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 text-center hover:border-gray-600 transition-all duration-500 group hover:scale-105 hover:shadow-2xl ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                delay={index * 100}
                from="opacity-0 translate-y-12"
                to="opacity-100 translate-y-0"
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 hover:scale-110 hover:rotate-3 transition-transform duration-300 shadow-lg`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;