"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <TechStack />

      <section id="works">
        <ProjectList />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
