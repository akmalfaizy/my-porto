import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Terminal, GraduationCap } from "lucide-react";

const roles = ["Android Developer", "Creative Web Creator", "Tech Visionary"];

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setRoleText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setRoleText((prev) => currentFullRole.slice(0, prev.length + 1));
      }, 100);
    }

    // Handle complete typing or complete deletion transitions
    if (!isDeleting && roleText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && roleText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [roleText, roleIndex, isDeleting]);

  const handleExploreProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Aurora Radial Glow Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[120px] animate-blob" />
      </div>

      {/* SVG Grid Glow Mask */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
      <div className="absolute inset-0 bg-grid-glow z-0" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Info Column */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Micro digital badge */}
          <motion.div
            className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-mono tracking-widest mb-6 font-bold shadow-neon-cyan"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            System status: Online
          </motion.div>

          {/* Large Title */}
          <h1 className="font-heading text-5xl md:text-7xl font-black tracking-tight text-white leading-none">
            Hi There, I'm
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent-purple to-accent-pink bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(6,182,212,0.15)]">
              Akmal Faizy
            </span>
          </h1>

          {/* Typing Subtitle */}
          <div className="h-10 mt-4 flex items-center justify-center lg:justify-start font-mono text-slate-400 text-lg md:text-xl font-bold uppercase tracking-wide">
            <span className="text-white border-r-2 border-primary pr-1.5 animate-pulse">
              {roleText}
            </span>
          </div>

          <p className="mt-6 text-slate-400 text-sm md:text-base max-w-lg leading-relaxed text-justify lg:text-left">
            Computer Science graduate from{" "}
            <strong className="text-white">
              University of Technology Yogyakarta
            </strong>{" "}
            (GPA <strong className="text-primary font-bold">3.80</strong>). A
            passionate Mobile Application Engineer crafting clean responsive
            digital solutions. Specializes in building modern android interfaces
            and custom tech startup infrastructures.
          </p>

          <div className="mt-6 inline-flex flex-col sm:flex-row self-center lg:self-start items-center gap-4 rounded-2xl border border-primary/15 bg-white/[0.03] px-5 py-4 backdrop-blur-sm">
            <span className="font-heading text-white text-sm md:text-base font-extrabold">
              Need a mobile or web application?
            </span>
            <a
              href="https://wa.me/6281223917160"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-white text-dark hover:bg-slate-200 font-heading font-black text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03]"
            >
              Hit Me!
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="https://wa.me/6281223917160"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent-purple text-white font-heading font-bold text-sm tracking-wider uppercase flex items-center justify-center shadow-neon-cyan hover:scale-[1.03] active:scale-[0.98] transition-transform duration-300 group"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={handleExploreProjects}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03]"
            >
              Explore Projects
            </button>
          </div>

          {/* Micro Spec Tags */}
          <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 text-left max-w-md mx-auto lg:mx-0">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-white font-heading font-extrabold text-sm">
                  Android
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Expert native
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent-purple">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-white font-heading font-extrabold text-sm">
                  Laravel
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Full-stack web
                </span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent-pink">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-white font-heading font-extrabold text-sm">
                  GPA 3.80
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  UTY Academic
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Photo - Clean & Borderless */}
        <div className="lg:col-span-5 flex justify-center items-center relative select-none">
          {/* Aurora glow behind photo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-accent-purple/15 rounded-full blur-[90px] -z-10" />

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image - clean, no border frame */}
            <img
              src="/dist/img/akmal_faizy.png"
              alt="Akmal Faizy profile"
              className="w-[280px] md:w-[340px] rounded-[36px] object-cover object-top"
              style={{
                boxShadow:
                  "0 30px 60px -15px rgba(0,0,0,0.7), 0 0 30px rgba(6,182,212,0.12)",
              }}
            />

            {/* Floating name badge */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-2xl glass-card border border-white/10 text-center font-mono">
              <span className="block text-white font-bold text-xs uppercase font-heading tracking-wide">
                Akmal Faizy
              </span>
              <span className="text-[9px] text-primary">
                MOBILE &amp; WEB DEVELOPER
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
