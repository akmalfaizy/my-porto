import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, Compass } from 'lucide-react';

const educationData = [
  {
    institution: 'University of Technology Yogyakarta',
    degree: "Bachelor's Degree in Computer Science",
    period: 'September 2021 - July 2025',
    metricType: 'GPA',
    metricValue: '3.80 / 4.00',
    details: 'Focus on software architectures, database design, mobile programming, and algorithm analysis. Graduated with honors (Cum Laude). Developed tourist ticketing and routing system as thesis.'
  },
  {
    institution: 'Vocational High School 2 Ciamis',
    degree: 'SMK / Major in Computer and Network Engineering',
    period: 'July 2018 - May 2021',
    metricType: 'Final Score',
    metricValue: '86.18 / 100',
    details: 'Focus on network architecture, hardware deployment, Linux server administrations, and basic programming frameworks.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Visual glowing blobs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Academics</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-2">
            Education Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-purple mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base max-w-lg mt-6">
            A history of my scholastic qualifications and core areas of specialization.
          </p>
        </div>

        {/* Card Deck Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group p-6 md:p-8 rounded-3xl glass-card border border-white/5 relative overflow-hidden flex flex-col justify-between"
              whileHover={{ y: -4 }}
              style={{
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.03)'
              }}
            >
              {/* Internal neon line pulse indicator */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-purple opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  
                  {/* Glowing Score Metric badge */}
                  <div className="text-right">
                    <span className="block font-mono text-[9px] uppercase text-slate-500 tracking-wider font-bold">
                      {edu.metricType}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-extrabold mt-1 shadow-neon-cyan">
                      <Award className="w-3.5 h-3.5" />
                      {edu.metricValue}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-black text-white mt-6 group-hover:text-primary transition-colors duration-300">
                  {edu.institution}
                </h3>
                
                <p className="text-slate-200 text-sm font-semibold mt-2">
                  {edu.degree}
                </p>

                {/* Calendar */}
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono mt-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-slate-400 text-xs md:text-sm mt-5 leading-relaxed text-justify">
                  {edu.details}
                </p>
              </div>

              {/* Digital Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Compass className="w-3 h-3 text-slate-600" />
                  ACADEMIC RECORD VERIFIED
                </span>
                <span>SEC_0{index + 1}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
