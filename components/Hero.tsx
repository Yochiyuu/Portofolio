"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-6 py-32 md:py-48 flex flex-col md:flex-row gap-12 border-b border-black">
      <div className="md:w-3/4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="text-[11vw] leading-[0.8] font-medium tracking-tighter"
        >
          Junior <br />
          Fullstack{" "}
          <span className="text-neutral-300 font-light italic">/</span> <br />
          Developer.
        </motion.h1>
      </div>

      <div className="md:w-1/4 flex flex-col justify-end">
        <p className="font-mono text-sm leading-relaxed mb-8 text-neutral-600">
          Bridging backend logic with frontend aesthetics. Currently honing my
          skills in the JavaScript ecosystem (Next.js & React) to build modern
          web experiences.
        </p>

        <div className="h-[1px] w-full bg-black mb-4"></div>

        <div className="flex justify-between font-mono text-xs">
          <span>SCROLL TO EXPLORE</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            (↓)
          </motion.span>
        </div>
      </div>
    </section>
  );
}
