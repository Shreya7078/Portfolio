import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Github, ExternalLink, ArrowRight, Play } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Hyphen Label */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-10 bg-cyan-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
              Work / Projects
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Selected <span className="text-slate-500 font-light italic">Creations</span>
          </motion.h2>
        </div>

        {/* Horizontal Snap Scroll */}
        <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory no-scrollbar">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="min-w-[320px] md:min-w-[480px] snap-center group"
            >
              {/* Main Project Card */}
              <div className="relative h-[550px] flex flex-col rounded-[2.5rem] border border-slate-800 bg-slate-900/30 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/40 shadow-2xl">
                
                {/* Visual Area (Top Part) */}
                <div className="relative h-[55%] w-full overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/20 z-10" />
                  <img 
                    src={project.image || "https://via.placeholder.com/600x400"} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Tech Tags */}
                  <div className="absolute bottom-6 left-6 z-20 flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 text-[9px] text-cyan-400 rounded-lg font-black uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Area (Bottom Part) */}
                <div className="flex-1 p-8 flex flex-col justify-between bg-gradient-to-b from-slate-900/50 to-slate-950">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[0.9rem] text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions Area */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-800/50">
                    <div className="flex gap-4">
                      {project.github ? (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-cyan-500/30 transition-all"
                        >
                          <Github size={20} strokeWidth={1.5} />
                        </a>
                      ) : (
                        <div className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/20 text-slate-700">
                          <Github size={20} strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                    
                    {/* Live Preview Button */}
                    <a 
                      href={project.demo || "#"} 
                      target={project.demo ? "_blank" : "_self"}
                      rel="noreferrer"
                      className={`group/btn relative flex items-center gap-3 overflow-hidden rounded-2xl px-6 py-3 transition-all active:scale-95 ${
                        project.demo 
                        ? "bg-white hover:bg-cyan-400 cursor-pointer" 
                        : "bg-slate-800/50 cursor-not-allowed opacity-70"
                      }`}
                    >
                      {/* Pulse Indicator (only if live) */}
                      {project.demo && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
                        </span>
                      )}

                      <span className={`text-[11px] font-black uppercase tracking-wider ${project.demo ? "text-slate-950" : "text-slate-500"}`}>
                        {project.demo ? "Live Preview" : "Coming Soon"}
                      </span>
                      
                      <ArrowRight 
                        size={14} 
                        className={`${project.demo ? "text-slate-950" : "text-slate-500"} transition-transform group-hover/btn:translate-x-1`} 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="min-w-[100px] h-1" />
        </div>
        
        {/* Scroll Instruction */}
        <div className="mt-8 flex justify-center">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest animate-pulse font-bold">
               ← Drag to explore →
            </p>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Projects;