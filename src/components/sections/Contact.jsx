import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Demo Logic
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent! (This is a demo)");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950 overflow-hidden text-slate-100">
      <div className="absolute top-0 left-1/4 h-96 w-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-violet-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-10 bg-cyan-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-400">
              Connect / Hire
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Let's Start a <span className="text-slate-500 font-light italic">Conversation</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-[2rem] border border-slate-800 bg-slate-900/40 backdrop-blur-md group hover:border-cyan-500/30 transition-all">
              <Mail className="text-cyan-400 mb-4 opacity-80 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">My Email</h3>
              <p className="text-white font-medium break-all tracking-tight">shreyajain7078@gmail.com</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-[2rem] border border-slate-800 bg-slate-900/40 backdrop-blur-md group hover:border-violet-500/30 transition-all">
              <MapPin className="text-violet-400 mb-4 opacity-80 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Location</h3>
              <p className="text-white font-medium">Ghaziabad, Uttar Pradesh, India</p>
            </motion.div>

            <div className="p-8 rounded-[2rem] border border-slate-800 bg-slate-900/20 backdrop-blur-md flex justify-around items-center">
              <a href="https://github.com/Shreya7078" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110"><Github size={24} /></a>
              <div className="h-8 w-px bg-slate-800" />
              <a href="https://www.linkedin.com/in/shreya-jain-25564a334/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors hover:scale-110"><Linkedin size={24} /></a>
            </div>
          </div>

          {/* Right Column: Main Form Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 relative rounded-[2.5rem] border border-slate-800 bg-slate-900/30 p-8 md:p-12 overflow-hidden group hover:border-cyan-500/20 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-8 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-slate-800 py-3 text-white outline-none transition-all focus:border-cyan-500 focus:bg-cyan-500/[0.02] placeholder:text-[11px] placeholder:text-slate-600"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-slate-800 py-3 text-white outline-none transition-all focus:border-cyan-500 focus:bg-cyan-500/[0.02] placeholder:text-[11px] placeholder:text-slate-600"
                    placeholder="YOUR@GMAIL.COM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-500 ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full bg-transparent border-b border-slate-800 py-3 text-white outline-none transition-all focus:border-cyan-500 focus:bg-cyan-500/[0.02] resize-none placeholder:text-[11px] placeholder:text-slate-600"
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-white px-8 py-4 transition-all active:scale-95 hover:bg-cyan-400 disabled:opacity-50"
                >
                  <span className="text-[11px] font-black text-slate-950 uppercase tracking-widest">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>
                  {!isSubmitting && (
                    <div className="h-6 w-6 rounded-full border border-slate-200 flex items-center justify-center transition-transform group-hover:translate-x-1 group-hover:-rotate-45">
                      <ArrowRight size={12} className="text-slate-950" />
                    </div>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.5em]">
            © 2026 Shreya Jain
          </p>
          <div className="flex gap-6 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
             <span>Ghaziabad, India</span>
             <span className="italic">Open for Internships</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;