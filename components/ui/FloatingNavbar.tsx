"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
  logo,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  logo?: {
    src?: string;
    text?: string;
    link?: string;
  };
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "fixed z-[5000] top-6 inset-x-0 mx-auto max-w-fit",
            className
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center w-full max-w-7xl mx-auto px-8 gap-6">
            {/* Left Navigation Items */}
            <div className="flex items-center gap-3">
              {navItems.slice(0, Math.floor(navItems.length / 2)).map((navItem: any, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={navItem.link}
                    className="group relative text-slate-700 hover:text-white items-center flex justify-center px-6 py-3 rounded-2xl border border-blue-200/60 shadow-lg backdrop-blur-xl bg-white/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    <span className="text-sm font-semibold tracking-wide relative z-10">
                      {navItem.name}
                    </span>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Center Logo */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <Link
                href="/"
                className="group relative flex items-center justify-center w-16 h-16 rounded-2xl border border-white/40 shadow-2xl backdrop-blur-xl bg-gradient-to-br from-white via-blue-50/30 to-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex-shrink-0 overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-blue-600/10 group-hover:from-white/20 group-hover:to-white/10 transition-all duration-300" />

                {/* Logo container */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <Image
                    src="/pflogobg.webp"
                    alt="Pocket Fund Logo"
                    width={32}
                    height={32}
                    className="object-contain h-8 w-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>

                {/* Subtle border highlight */}
                <div className="absolute inset-0 rounded-2xl border border-blue-200/30 group-hover:border-white/50 transition-all duration-300" />

                {/* Hover shimmer effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out" />
              </Link>

              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
            </motion.div>

            {/* Right Navigation Items */}
            <div className="flex items-center gap-3">
              {navItems.slice(Math.floor(navItems.length / 2)).map((navItem: any, idx: number) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={navItem.link}
                    className="group relative text-slate-700 hover:text-white items-center flex justify-center px-6 py-3 rounded-2xl border border-blue-200/60 shadow-lg backdrop-blur-xl bg-white/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
                  >
                    <span className="text-sm font-semibold tracking-wide relative z-10">
                      {navItem.name}
                    </span>
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="md:hidden flex items-center justify-between w-screen px-6 py-4 mx-4 rounded-3xl border border-blue-200/60 shadow-2xl backdrop-blur-xl bg-white/90"
          >
            {/* Logo */}
            {logo && (
              <Link
                href={logo.link || "/"}
                className="flex items-center group"
              >
                {logo.src && (
                  <div className="relative">
                    <Image
                      src={logo.src}
                      alt="Logo"
                      width={36}
                      height={36}
                      className="h-9 w-9 group-hover:scale-110 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 rounded-full bg-blue-400/20 group-hover:bg-blue-500/30 transition-colors duration-200" />
                  </div>
                )}
                {logo.text && (
                  <span className="text-slate-800 font-bold text-xl ml-3 group-hover:text-blue-600 transition-colors duration-200">
                    {logo.text}
                  </span>
                )}
              </Link>
            )}

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 p-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 border border-blue-200/40"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4999] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
            <motion.div
              initial={{ y: -30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -30, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-blue-200/60 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-2">
                {navItems.map((navItem, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={navItem.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="group flex items-center space-x-4 text-slate-700 hover:text-blue-600 px-5 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                    >
                      {navItem.icon && (
                        <motion.span
                          className="text-xl text-blue-500 group-hover:text-blue-600"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          {navItem.icon}
                        </motion.span>
                      )}
                      <span className="text-base font-semibold tracking-wide">
                        {navItem.name}
                      </span>
                      {/* Subtle arrow indicator */}
                      <motion.div
                        className="ml-auto opacity-0 group-hover:opacity-100 text-blue-500"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              {/* Bottom gradient accent */}
              <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};