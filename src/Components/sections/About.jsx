import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Sparkles, ArrowRight, GraduationCap, Users } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <div className="mb-12 mt-4">
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
          <div className="h-[1px] w-10 bg-cyan-500/50" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
            About Me
          </span>
        </motion.div>
        
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.h2 variants={itemVariants} className="max-w-xl text-2xl font-bold text-white md:text-4xl tracking-tight leading-tight">
            Designing Logic. <br />
            <span className="text-slate-500">Developing Experience.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-xs text-sm text-slate-400 leading-relaxed">
            I work with machine learning models and modern frontend technologies, focusing on turning data-driven logic into clear, usable interfaces.
          </motion.p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        
        {/* Main Bio - md:row-span-2 ensures height */}
        <motion.div 
          variants={itemVariants}
          className="group relative md:col-span-4 md:row-span-2 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:border-cyan-500/40"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Brain className="mb-4 text-cyan-400" size={28} />
          <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">My Approach</h3>
          <div className="space-y-4 text-slate-400 text-[0.95rem] leading-relaxed">
            <p>
              As a CSE (AI & ML) undergraduate, I focus on building and deploying machine learning models and integrating them with frontend applications.
            </p>
            <p>
              I enjoy working across the full workflow — from data preprocessing and model training to API integration and UI development. <br />
              My goal is to create projects that are technically sound, easy to use, and grounded in real-world problem solving.
            </p>
          </div>
        </motion.div>

        {/* Education Block - md:row-span-2 to match Bio height */}
        <motion.div 
          variants={itemVariants}
          className="group md:col-span-2 md:row-span-2 border border-slate-800 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-8 rounded-3xl transition-all duration-300 hover:border-blue-500/40 relative overflow-hidden flex flex-col justify-center"
        >
          {/* <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <GraduationCap size={100} />
          </div> */}
          <GraduationCap className="mb-4 text-blue-400" size={32} />
          <h3 className="text-sm font-bold text-white uppercase tracking-tighter mb-8 italic">Education</h3>
          <div className="space-y-10 relative z-10">
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="text-[1rem] font-bold text-white leading-tight">B.Tech CSE (AI & ML)</span>
                <span className="text-[10px] font-bold text-blue-400 whitespace-nowrap ml-2">2023-2027</span>
              </div>
              <p className="text-sm text-slate-400 font-normal leading-relaxed">KIET Group of Institutions, Ghaziabad</p>
            </div>
            
            <div className="pt-2 border-t border-blue-500/20">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[1rem] font-bold text-white leading-tight tracking-tight">Senior Secondary (Class XII)</span>
                <span className="text-[10px] font-bold text-blue-400 ml-2 whitespace-nowrap font-bold">2022-2023</span>
              </div>
              <p className="text-sm text-slate-400 font-normal">93% • Heritage Public School, Agra (CBSE)</p>
            </div>

            <div className="pt-2 border-t border-blue-500/20">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[1rem] font-bold text-white leading-tight tracking-tight">Secondary (Class X)</span>
                <span className="text-[10px] font-bold text-blue-400 ml-2 whitespace-nowrap font-bold">2020-2021</span>
              </div>
              <p className="text-sm text-slate-400 font-normal">96.83% • St. Paul's Church College, Agra (ICSE)</p>
            </div>
          </div>
        </motion.div>

        {/* Leadership Block - Sized for alignment */}
        <motion.div 
          variants={itemVariants}
          className="group md:col-span-2 border border-slate-800 bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-6 rounded-3xl transition-all duration-300 hover:border-emerald-500/40 relative overflow-hidden"
        >
          {/* <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users size={60} />
          </div> */}
          <Users className="mb-3 text-emerald-400" size={24} />
          <h3 className="text-sm font-bold text-white uppercase tracking-tighter mb-4 italic">Leadership</h3>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
               <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
               <span className="text-[1rem] font-bold text-white tracking-tight">President</span>
            </div>
            <div className="pl-4 space-y-1">
              <p className="text-sm font-semibold text-emerald-100/90 leading-tight">NextGen Supercomputing Club</p>
              <p className="text-[12px] text-slate-500 italic font-medium leading-relaxed tracking-wide">KIET Group of Institutions</p>
            </div>
          </div>
        </motion.div>

        {/* Focus Block */}
        <motion.div 
          variants={itemVariants}
          className="group md:col-span-2 border border-slate-800 bg-slate-900/40 p-6 rounded-3xl transition-all duration-300 hover:border-cyan-500/40"
        >
          <Code2 className="mb-3 text-cyan-400" size={24} />
          <h3 className="text-sm font-bold text-white uppercase tracking-tighter mb-4">Core Focus</h3>
          <ul className="space-y-3 text-[0.85rem] text-slate-400 font-medium">
            {["Data Preparation & ML Modeling", "Flask-Based Model Deployment", "Responsive Frontend Development"].map((item) => (
              <li key={item} className="flex items-center gap-2 group-hover:text-slate-300 transition-colors leading-tight">
                 <div className="h-1 w-1 rounded-full bg-cyan-400 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skills/Stack Block - Leadership and Focus align with this */}
        <motion.div 
          variants={itemVariants}
          className="group md:col-span-2 border border-slate-800 bg-slate-900/40 p-6 rounded-3xl transition-all duration-300 hover:border-cyan-500/40"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-tighter">Stack</h3>
            <Sparkles className="text-cyan-400" size={18} />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "Tailwind CSS", "Python", "JavaScript"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[12px] font-medium border border-slate-700 rounded-lg bg-slate-950 text-slate-300 group-hover:border-cyan-500/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["Flask", "scikit-learn", "Git", "Vercel"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[12px] font-medium border border-slate-700 rounded-lg bg-slate-950 text-slate-300 group-hover:border-cyan-500/30 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Contact/CTA Footer */}
        <motion.div 
          variants={itemVariants}
          className="md:col-span-6 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/20 p-8 hover:bg-slate-900/40 transition-all shadow-inner"
        >
          <div className="flex items-center gap-5">
            <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Rocket size={24} />
            </div>
            <div>
              <p className="text-md text-white font-medium">Looking for Internship Opportunities</p>
              <p className="text-sm text-slate-500 font-medium italic mt-1 leading-relaxed opacity-80">Open to Machine Learning or Frontend-focused roles.</p>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-[11px] font-black rounded-2xl hover:bg-cyan-400 transition-all duration-300 shadow-xl active:scale-95 uppercase tracking-[0.2em]"
          >
            LET'S TALK
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;