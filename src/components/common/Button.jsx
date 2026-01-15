// src/components/common/Button.jsx
const baseClasses =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const variants = {
  primary:
    "bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]",
  secondary:
    "border border-slate-700 text-slate-100 hover:border-cyan-200 hover:text-cyan-300 bg-slate-900/60",
};

const Button = ({ variant = "primary", children, className = "", ...props }) => {
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
