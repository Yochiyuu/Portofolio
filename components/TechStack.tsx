"use client";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
});

export default function TechStack() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "Node.js",
    "PostgreSQL",
  ];

  const marqueeItems = [...skills, ...skills, ...skills, ...skills];

  return (
    <section className="py-10 border-b border-black overflow-hidden bg-black text-white">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-16 items-center"
        >
          {marqueeItems.map((skill, index) => (
            <div key={index} className="flex items-center">
              <span
                className={`${poppins.className} text-5xl md:text-3xl font-extrabold tracking-tight text-white/80 hover:text-white transition-colors cursor-default`}
              >
                {skill}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
