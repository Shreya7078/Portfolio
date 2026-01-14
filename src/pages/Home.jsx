// src/pages/Home.jsx
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Skills from "../Components/sections/Skills";
import Profiles from "../Components/sections/Profiles";
import Contact from "../Components/sections/Contact";


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
        {/* next: Skills, Profiles, Contact */}
      </main>
    </div>
  );
};

export default Home;
