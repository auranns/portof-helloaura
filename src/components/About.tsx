"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const wordTypingVariants = {
  hidden: { opacity: 0, fontWeight: 400 },
  visible: {
    opacity: 1,
    fontWeight: 700,
    transition: { duration: 0.3 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TypingReveal = ({ text }: { text: string }) => {
  return (
    <motion.p className="text-lg text-gray-600 leading-relaxed mb-4 flex flex-wrap gap-x-1" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={wordTypingVariants} className="transition-all">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Background decorative blobs */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-pink-100 rounded-full blur-[120px] opacity-60 z-0" />
      <div className="absolute top-32 right-0 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-60 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        {/* Text */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
            <span className="text-pink-500">About</span> Me
          </h2>

          <TypingReveal text="I’m Aura, a creative soul who loves to turn ideas into pixel-perfect digital experiences. ✨" />
          <TypingReveal text="As a UI/UX Designer, I’m obsessed with user-centric design, soft gradients, and intuitive layouts. With my frontend skills, I bring those dreamy designs to life." />
          <TypingReveal text="Let’s create something beautiful that not only works — but feels right." />
        </div>

        {/* Floating image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full max-w-sm mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image src="/profile.png" alt="Aura's Profile" width={400} height={400} className="object-cover w-full h-auto" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
