import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const profiles = [
    { icon: "github", url: "https://github.com/Shreya7078", title: "GitHub" },
    { icon: "linkedin", url: "https://www.linkedin.com/in/shreya-jain-25564a334/", title: "LinkedIn" },
  ];

  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pt-6 transition-all duration-300">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`mx-auto flex w-[90%] max-w-5xl items-center justify-between rounded-full border px-2 py-2 transition-all duration-500 ${
          isScrolled
            ? "border-slate-700/50 bg-slate-950/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] backdrop-blur-md"
            : "border-transparent bg-transparent backdrop-blur-none"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 pl-3">
          <div className="group relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-slate-900 border border-slate-700">
            <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-[13px] font-bold text-white group-hover:text-slate-950">SJ</span>
          </div>
          <span className="text-md font-bold tracking-tight text-white/90">
            Shreya Jain
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="relative rounded-full px-4 py-1.5 text-md font-medium text-slate-400 transition-all hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Profiles + CTA */}
        <div className="flex items-center gap-2 pr-2">
          <div className="flex items-center gap-1">
            {profiles.map((profile) => (
              <a
                key={profile.icon}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-1.5 hover:bg-slate-800/60 rounded-lg transition-all"
                title={profile.title}
              >
                <img
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${profile.icon}.svg`}
                  alt={profile.title}
                  className="h-4.5 w-4.5 opacity-100 invert-[1] brightness-[2] transition-all group-hover:scale-110"
                />
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="group relative overflow-hidden rounded-full bg-white px-5 py-2 text-[0.75rem] font-bold text-black transition-all hover:pr-8 active:scale-95">
            <span className="relative z-10">RESUME</span>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:opacity-100">
              ↓
            </span>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;