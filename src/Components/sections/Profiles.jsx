import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; // npm install lucide-react

const profiles = [
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg",
    url: "https://github.com/Shreya7078",
    color: "group-hover:text-white",
    glow: "group-hover:shadow-white/10",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg",
    url: "https://www.linkedin.com/in/shreya-jain-25564a334/",
    color: "group-hover:text-blue-400",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    name: "LeetCode",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/leetcode.svg",
    url: "https://leetcode.com/u/Shreya_1221/",
    color: "group-hover:text-orange-400",
    glow: "group-hover:shadow-orange-500/20",
  },
  {
    name: "CodeChef",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codechef.svg",
    url: "https://www.codechef.com/users/shreya_1209",
    color: "group-hover:text-amber-600",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    name: "HackerRank",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hackerrank.svg",
    url: "https://www.hackerrank.com/profile/shreya1221",
    color: "group-hover:text-green-400",
    glow: "group-hover:shadow-green-500/20",
  },
];

const Profiles = () => {
  return (
    <section id="profiles" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Consistent Hyphen Header */}
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-[1px] w-10 bg-cyan-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
            Network / Platforms
          </span>
        </motion.div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Digital <span className="text-slate-500 font-light italic">Footprint</span>
          </motion.h2>
          <p className="max-w-xs text-sm text-slate-400 leading-relaxed border-l border-slate-800 pl-4 ">
            Showcasing my work, problem-solving practice, and professional journey across platforms.
          </p>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {profiles.map((profile, index) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group relative"
          >
            {/* The Card */}
            <div className={`relative flex flex-col items-center justify-center h-32 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-slate-900/80 shadow-2xl ${profile.glow}`}>
              
              {/* External Link Icon (Small at corner) */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-40 transition-opacity">
                <ExternalLink size={12} className="text-white" />
              </div>

              {/* Platform Icon */}
              <div className="relative mb-3 flex h-12 w-12 items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img
                  src={profile.icon}
                  alt={profile.name}
                  className={`h-8 w-8 transition-all duration-300 invert-[0.8] group-hover:invert-0 filter ${profile.color.replace('text-', 'fill-')}`}
                />
              </div>

              {/* Platform Name */}
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 ${profile.color}`}>
                {profile.name}
              </span>

              {/* Subtle Inner Glow on Hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Profiles;