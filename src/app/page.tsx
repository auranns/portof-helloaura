"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Home";
import About from "@/components/About";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="font-sans text-black bg-white">
      {/* Your existing layout */}
      <div className="px-4 sm:px-8 lg:px-8">
        <Navbar />

        <section className="pt-6 md:pt-10 lg:pt-16">
          <Hero />
          <About />
        </section>
      </div>
    </main>
  );
}
