import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import { Brain, Layout, Terminal, Cpu } from "lucide-react";

const Skills = () => {
  const skillGroups = [
    { 
      title: "Machine Learning", 
      data: skills.ml, 
      icon: <Brain className="text-cyan-400" size={24} />,
      color: "from-cyan-500/20 to-transparent" 
    },
    { 
      title: "Frontend Engineering", 
      data: skills.frontend, 
      icon: <Layout className="text-violet-400" size={24} />,
      color: "from-violet-500/20 to-transparent" 
    },
    { 
      title: "Tools & Ecosystem", 
      data: skills.tools, 
      icon: <Terminal className="text-emerald-400" size={24} />,
      color: "from-emerald-500/20 to-transparent" 
    },
  ];

  // For the infinite marquee
  const allSkills = [...skills.ml, ...skills.frontend, ...skills.tools];

  return (
    <section id="skills" className="relative py-24 bg-slate-950 overflow-hidden">
      
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header with Consistent Hyphen Styling */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-10 bg-cyan-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
              Expertise / Stack
            </span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Technical <span className="text-slate-500 font-light italic">Arsenal</span>
            </motion.h2>
            <p className="max-w-xs text-sm text-slate-400 leading-relaxed border-l border-slate-800 pl-4">
              Hands-on experience across machine learning, frontend development, and deployment.
            </p>
          </div>
        </div>

        {/* 1. The Infinite Marquee (Visual Interest) */}
        <div className="relative mb-20 flex overflow-hidden py-5 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:after:from-slate-950 after:to-transparent">
          <motion.div 
            className="flex whitespace-nowrap gap-10"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-slate-900 transition-colors hover:text-cyan-500/20 uppercase italic">
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* 2. Interactive Skill Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full rounded-3xl border border-slate-800 bg-slate-900/20 p-8 overflow-hidden transition-all hover:border-cyan-500/30"
            >
              {/* Corner Glow Effect */}
              <div className={`absolute -right-10 -top-10 h-32 w-32 bg-gradient-to-br ${group.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  {group.icon}
                  <Cpu className="text-slate-800 group-hover:text-cyan-500/20 transition-colors" size={40} />
                </div>

                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.data.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 text-xs font-medium bg-slate-950 border border-slate-800 text-slate-400 rounded-xl group-hover:border-cyan-500/20 group-hover:text-slate-200 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;