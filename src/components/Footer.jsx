import { Github, Linkedin, Instagram, Mail, ArrowUpCircle } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030712] py-12 overflow-hidden z-10 select-none">
      
      {/* Background soft lighting */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Monogram Monolithic Brand Icon */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent-purple text-white font-heading font-black text-xs relative">
            AF
          </div>
          <span className="font-heading font-extrabold text-xs tracking-wider text-slate-400">
            AKMAL FAIZY
          </span>
        </div>

        {/* Dynamic System Status indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent-emerald/20 bg-accent-emerald/5 text-accent-emerald text-[9px] font-mono uppercase tracking-widest font-bold shadow-neon-emerald">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-emerald animate-ping" />
          SYSTEM_STATUS: SECURE_AND_RUNNING
        </div>

        {/* Social connections */}
        <div className="flex items-center gap-4">
          
          <a
            href="https://github.com/akmalfaizy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/akmalfaizy/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="https://www.instagram.com/akmalfaizy_/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="mailto:akmalfaizy123258@gmail.com"
            className="w-8 h-8 rounded-full border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Scroll to Top Arrow */}
          <button
            onClick={handleScrollTop}
            className="w-8 h-8 rounded-full border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 ml-4"
            title="Scroll to top"
          >
            <ArrowUpCircle className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Understated Credits Bar */}
      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[9px] text-slate-500">
        <span>© 2026 Akmal Faizy. All intellectual assets encrypted.</span>
        <span className="hover:text-primary transition-colors cursor-default">Designed for absolute digital impact.</span>
      </div>

    </footer>
  );
}
