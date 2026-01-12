import { Suspense, lazy } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const NightSkyBackground = lazy(() => import("@/components/backgrounds/NightSkyBackground"));

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Cinematic Night Sky Background */}
      <Suspense fallback={null}>
        <NightSkyBackground />
      </Suspense>
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
