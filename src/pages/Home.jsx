import Navbar from "@/components/layout/Navbar.jsx";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Profiles from "@/components/sections/Profiles";
import Contact from "@/components/sections/Contact";


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills/>
        <Profiles/>
        <Contact/>
      </main>
    </div>
  );
};

export default Home;
