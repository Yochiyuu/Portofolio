"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = [
    { title: "Home", href: "#home" },
    { title: "Works", href: "#works" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="border-b border-black px-6 py-6 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-[100]">
        <div className="flex items-center gap-2 relative z-[101]">
          <span
            className={`font-bold tracking-tight text-xl transition-colors duration-300 ${isOpen ? "text-white" : "text-black"}`}
          >
            ANDREW R.
          </span>
        </div>

        <span
          className={`font-mono text-xs hidden md:block tracking-widest transition-colors duration-300 ${isOpen ? "text-neutral-400" : "text-black"}`}
        >
          [JUNIOR FULLSTACK]
        </span>

        <button
          onClick={toggleMenu}
          className={`relative z-[101] px-5 py-1.5 border rounded-full transition-all duration-300 text-sm font-medium uppercase flex items-center gap-2
            ${
              isOpen
                ? "border-white text-white hover:bg-white hover:text-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
        >
          {isOpen ? (
            <>
              Close <X size={14} />
            </>
          ) : (
            "Menu"
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-[90] flex flex-col justify-center px-6 md:px-24"
          >
            <div className="flex flex-col gap-4">
              {menuLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group flex items-center gap-4 text-white w-fit"
                  onClick={toggleMenu}
                >
                  <span className="text-[10vw] md:text-[6vw] font-bold tracking-tighter leading-none group-hover:text-neutral-400 transition-colors">
                    {link.title}
                  </span>
                  <ArrowUpRight
                    size={40}
                    className="opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-white"
                  />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-12 left-6 md:left-24 text-neutral-500 font-mono text-sm flex gap-8"
            >
              <a href="#" className="hover:text-white transition-colors">
                LINKEDIN
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GITHUB
              </a>
              <a href="#" className="hover:text-white transition-colors">
                EMAIL
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
