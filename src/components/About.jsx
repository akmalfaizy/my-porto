import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, FileText } from 'lucide-react';

const softSkills = [
  'Leadership',
  'Teamwork',
  'Adaptability',
  'Effective Communication',
  'Analytical Thinking',
  'Time Management',
  'Decision Making',
  'Problem Solving',
  'Detail-Oriented',
  'Responsible'
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Biography</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-purple mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading text-xl md:text-2xl font-extrabold text-white leading-tight">
              An ambitious developer bridging the gap between elegant mobile interfaces and system logic.
            </h3>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed text-justify">
              I am a Computer Science graduate from <strong className="text-white">University of Technology Yogyakarta</strong> with a final GPA of <strong className="text-primary font-bold">3.80 / 4.00</strong>. My academic and practical background has instilled a strong base in analytical thinking, detailed execution, and systematic problem-solving.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed text-justify">
              I specialize in Android development and modern front-end architectures. Beyond technical implementations, I have served in key leadership positions—organizing major community activities, presiding over committee boards, and spearheading research initiatives. I excel in dynamic, fast-paced environments where teamwork and direct, efficient communication are values of highest priority.
            </p>

            {/* Social connection cards */}
            <div className="pt-8 border-t border-white/5">
              <h4 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4 font-bold">Connect with me</h4>
              <div className="flex flex-wrap gap-4">
                
                {/* LinkedIn link */}
                <a
                  href="https://www.linkedin.com/in/akmalfaizy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full glass-card hover:bg-white/5 border border-white/10 hover:border-primary/40 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                {/* Instagram link */}
                <a
                  href="https://www.instagram.com/akmalfaizy_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full glass-card hover:bg-white/5 border border-white/10 hover:border-accent-pink/40 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  Instagram
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

                {/* Resume download / direct mock */}
                <a
                  href="https://wa.me/6281223917160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full glass-card hover:bg-white/5 border border-white/10 hover:border-accent-purple/40 text-slate-300 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Get Resume
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>

              </div>
            </div>
          </div>

          {/* Soft Skills Tag Deck Column */}
          <div className="lg:col-span-5 rounded-3xl glass-card border border-white/5 p-6 md:p-8 relative">
            {/* Top digital header grid */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">Soft Skills Stack</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-ping" />
                <span className="font-mono text-[9px] text-accent-purple font-bold">OPTIMIZED</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs mb-6">
              Key administrative and team-centric strengths cultivated through academic leadership and event coordination:
            </p>

            {/* Cloud tags */}
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-3.5 py-2 rounded-xl bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white font-heading text-xs font-bold transition-all duration-300 hover:border-primary/30 hover:bg-slate-900 cursor-default"
                  whileHover={{ scale: 1.03 }}
                  style={{
                    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
