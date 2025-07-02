"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Track Record", href: "#track-record" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },

  ];

  return (
    <footer className="bg-slate-900 text-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-white p-2">
                <Image
                  src="/pflogo.webp"
                  alt="Pocket Fund Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">PocketFund</h3>
                <p className="text-sm text-gray-400">We love deals.</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              Empowering entrepreneurs and funds to build wealth through strategic micro-acquisitions.
              From deal sourcing to operator placement, we handle the complexity so you can focus on growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Get in Touch
              </a>
              <a
                href="/#contact"
                className="border border-blue-500 hover:bg-blue-500/10 px-6 py-2 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📍</span>
                  <span className="text-sm">Mumbai, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">📧</span>
                  <a href="mailto:hello@pocket-fund.com" className="text-sm hover:text-blue-400 transition-colors">
                    hello@pocket-fund.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🌐</span>
                  <span className="text-sm">24/7 Deal Flow</span>
                </div>
              </div>
            </div>

           
</div>
</div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Pocket Fund. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/company/pocketfund"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://x.com/devlikesbizness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.youtube.com/@devlikesbizness/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
};

// Simple Social Media Icons
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default Footer;