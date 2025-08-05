"use client";

import React from "react";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

const Home = () => {
    const path = "M50 50 Q175 90 350 60 Q525 40 650 55";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
        linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
      `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* LEFT */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white/50 to-transparent z-10" />

      {/* RIGHT */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/50 to-transparent z-10" />

      {/* TOP */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/30 to-transparent z-10" />

      {/* BOTTOM */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/50 to-transparent z-10" />

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        {/* Greeting */}
        <FadeInWhenVisible>
          <p className="text-lg text-gray-600 mb-4">Heyyo! I am Aura 👋🏽✨</p>
        </FadeInWhenVisible>

        {/* Title */}
        <FadeInWhenVisible>
          <div className="mb-4 max-w-screen-xl text-center mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
              Product Designer & <span className="text-blue-600">Frontend</span>
              <br />
              <span className="text-pink-500 relative">Developer enthusiast</span>
            </h1>

            {/* Animated underline */}
            <motion.svg viewBox="0 0 700 100" className="w-full max-w-2xl mx-auto mt-[-10px]" xmlns="http://www.w3.org/2000/svg" fill="none">
              <motion.path d={path} stroke="#ec4899" strokeWidth={8} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }} />
            </motion.svg>
          </div>
        </FadeInWhenVisible>

        {/* CTA Button */}
        <FadeInWhenVisible>
          <div className="mb-6">
            <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">See Project</button>
          </div>
        </FadeInWhenVisible>

        {/* Stats */}
        <FadeInWhenVisible>
          <div className="mt-0">
            <Stats />
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
};

export default Home;
