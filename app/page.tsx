"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";

import Testimonial from "@/components/Testimonial";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Horizontal from "@/components/horizontal";
import TimelineDemo from "@/components/ui/timeline";
import Metrics from "@/components/Metrics";
import RecentProjects from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className="relative bg-black-100">
      {/* FloatingNav positioned absolutely to overlay on full-width content */}
      <FloatingNav navItems={navItems} />

      {/* Hero takes full width and height */}
      <Hero />
      <div className="relative">
        <Horizontal />
      </div>

      <div id="grid">
        <Grid />
      </div>

      <div id="timeline">
        <TimelineDemo />
      </div>

      {/* Grid Section - About/Team */}


      {/* Main Content Sections */}
      <section className="relative w-full">
        {/* Who We Serve */}
        <div className="py-24 bg-slate-900" id="whoweserve">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RecentProjects />
          </div>
        </div>

        {/* Team */}
        <div className="py-24 bg-slate-900" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Metrics />
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-24 bg-gradient-to-b from-slate-800 to-slate-900" id="testimonial">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Testimonial />
          </div>
        </div>



        {/* Calendly Embed Section */}
        <div id="contact" className="py-16 bg-slate-900 flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-4 max-w-2xl w-full">
            <iframe
              src="https://calendly.com/adarsh12ranjan/30min"
              width="100%"
              height="600"
              frameBorder="0"
              className="rounded-2xl w-full"
              style={{ minHeight: '500px' }}
              title="Book a 30min Call with Adarsh"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* <TrackRecord /> */}


       
        {/* Footer */}
        <div className="bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Footer />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;