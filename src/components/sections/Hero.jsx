import { motion } from "framer-motion";
import profileImg from "../../assets/images/profile.jpg";
import Button from "../common/Button";
import { Mail, MapPin, Sparkles } from "lucide-react"; 

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center pt-20"
    >
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 flex flex-col gap-12 lg:flex-row lg:items-center">

        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-[0.75rem] font-bold tracking-widest text-cyan-400">
            <Sparkles size={14} />
            OPEN TO INTERNSHIPS 2025
          </div> */}

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Hi, I&apos;m <br />
              <span className="bg-cyan-400 bg-clip-text text-transparent">
                Shreya Jain
              </span>
            </h1>
            <p className="max-w-lg text-lg font-medium text-slate-400 sm:text-xl">
              Machine Learning Enthusiast | Frontend Developer
            </p>
          </div>

          <p className="max-w-md text-base leading-relaxed text-slate-400">
            Specializing in building <span className="text-slate-200">intelligent systems</span> with 
            beautiful, high-performance interfaces.<br></br>
            CSE (AI & ML) student at KIET Group Of Institutions, continuously learning and improving..                                                                                                                                                                                                                                                                                        
          </p>

          <div className="flex flex-col gap-3 text-sm text-slate-400">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-cyan-400" />
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">shreyajain7078@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-cyan-400" />
              <span>Delhi NCR, India</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="rounded-xl bg-cyan-500 px-8 py-4 text-sm font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-xl border border-slate-800 bg-slate-900/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-slate-800"
            >
              LET&apos;S CONNECT
            </button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Background Decoration for Image */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl" />
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 rounded-[2.5rem] border border-slate-800 bg-slate-900/80 p-4 shadow-2xl backdrop-blur-xl sm:w-80"
            >
              <div className="aspect-[3/5] overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Stats Overlay inside card */}
              {/* <div className="mt-6 flex justify-around border-t border-slate-800 pt-6 pb-2">
                <div className="text-center">
                  <p className="text-lg font-bold text-white">Deployed Projects</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">ML Models Deployed</p>
                </div>
                <div className="h-10 w-[1px] bg-slate-800" />
                <div className="text-center">
                  <p className="text-lg font-bold text-white">AI/ML</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Specialty</p>
                </div>
              </div> */}
            </motion.div>

            {/* Floating Tech Badge */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-10 hidden rounded-2xl border border-slate-800 bg-slate-950/90 p-3 shadow-xl backdrop-blur-md sm:block"
            >
               <div className="flex items-center gap-3">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-xs font-bold text-slate-200 uppercase tracking-tighter italic">React + Python</span>
               </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-6 rounded-full border-2 border-slate-800 flex justify-center p-1"
        >
          <div className="h-2 w-1 rounded-full bg-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;