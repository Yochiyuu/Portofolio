"use client";
import { ArrowUpRight } from "lucide-react";

export default function ProjectList() {
  const projects = [
    {
      id: 1,
      name: "Transcend",
      position: "Frontend Developer",
      desc: "A Web3 payroll platform engineered to streamline crypto payments for organizations through a pristine, fintech-grade interface.",
      image: "/projects/Transcend.png",
    },
    {
      id: 2,
      name: "TamagoSUI",
      position: "Frontend Developer",
      desc: "An interactive GameFi experience built on the SUI network, leveraging real-time smart contract interactions for a seamless decentralized Web3 environment.",
      image: "/projects/tamagosui.png",
    },
    {
      id: 3,
      name: "Drew",
      position: "Fullstack Developer",
      desc: "A fullstack ecosystem bridging a robust Python-based Discord bot with a responsive web interface for seamless server management and automation.",
      image: "/projects/drewdiscord.png",
    },
    {
      id: 4,
      name: "Corclo",
      position: "Fullstack Developer",
      desc: "An experimental social media platform challenging standard layouts by exploring novel user interaction patterns and immersive visual design.",
      image: "/projects/corclo.png",
    },
  ];
  return (
    <section className="bg-white text-black">
      <div className="px-6 py-16 md:py-24 border-b border-black flex flex-col items-center justify-center text-center">
        <span className="font-mono text-xs mb-3 tracking-widest text-neutral-500">
          ( SELECTED WORKS )
        </span>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((item) => (
          <div
            key={item.id}
            className="border-b md:border-b-0 border-black md:border-r md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0 border-b-black p-6 md:p-12 group cursor-pointer hover:bg-neutral-50 transition-colors relative flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="font-mono text-xs border border-black px-2 rounded-full">
                0{item.id}
              </span>
              <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
            </div>

            <div className="aspect-video bg-neutral-200 mb-8 overflow-hidden border border-black/10">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
              />
            </div>

            <div className="mt-auto">
              <h3 className="text-3xl font-medium mb-2 tracking-tight group-hover:underline decoration-1 underline-offset-4">
                {item.name}
              </h3>
              <p className="text-neutral-500 font-mono text-xs uppercase tracking-wider mb-4">
                [{item.position}]
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        <div className="hidden md:block col-span-2 border-t border-black"></div>
      </div>
    </section>
  );
}
