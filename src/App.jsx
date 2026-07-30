import {Navbar} from "@/layout/Navbar";
import {Hero} from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Achievements } from "@/sections/Achievements";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { VantaBackground } from "@/components/VantaBackground";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative bg-background">
      <VantaBackground opacity={0.35} className="fixed inset-0 w-full h-full pointer-events-none z-[2]" />
      <Navbar/>
      <main className="relative">
        <Hero/>
        <About/>
        <Projects />
        <Experience />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
