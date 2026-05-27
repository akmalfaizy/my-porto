import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const organizationData = [
  {
    role: 'Train Attendant',
    org: 'Professional Service Role',
    period: 'January 2026 - Present',
    desc: 'Providing passenger service, operational support, and safety-oriented assistance in train travel environments, with emphasis on communication, discipline, and service reliability.'
  },
  {
    role: 'Freelance Mobile & Web Developer',
    org: 'Independent Freelance Practice',
    period: 'February 2024 - Present',
    desc: 'Developing mobile applications and web-based systems for client needs, including Laravel full-stack development, Android application work, database integration, and troubleshooting support.'
  },
  {
    role: 'Staff Research and Development',
    org: 'KSPM University of Technology Yogyakarta',
    period: 'September 2023 - September 2024',
    desc: 'Managed organizational social media outlets, designed educational financial assets, and organized student capital market research programs.'
  },
  {
    role: 'PDD Division (Publicity, Design, & Documentation)',
    org: 'KSPM Open Recruitment Committee',
    period: 'December 2023',
    desc: 'Led a team in creating digital media campaigns, corporate branding templates, and managed event workshops.'
  },
  {
    role: 'Chairperson',
    org: 'Karang Taruna (Youth Association)',
    period: 'August 2022 - August 2023',
    desc: 'Organized community outreach projects and local events, coordinating with village councils, sponsors, and multi-disciplinary teams.'
  },
  {
    role: 'Equipment Division',
    org: 'KSPM Grand Council Committee',
    period: 'September 2023',
    desc: 'Coordinated infrastructure setup, live stream technical parameters, and venue safety operations.'
  },
  {
    role: 'Event Division',
    org: 'KSPM UTY Industrial Visit',
    period: 'July 2023',
    desc: 'Formulated program run-downs, managed external speaker interfaces, and orchestrated administrative flows during industrial tours.'
  },
  {
    role: 'Chairperson',
    org: 'Capital Market School Seminar Committee',
    period: 'May 2023',
    desc: 'Supervised the entire committee staff, aligning logistics, marketing, and speakers to successfully host financial seminars for 200+ delegates.'
  }
];

export default function Organization() {
  return (
    <section id="organization" className="py-24 relative overflow-hidden bg-slate-900/20">
      {/* Aurora glow */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-20 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Timeline</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-2">
            Leadership & Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-purple mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base max-w-lg mt-6">
            A chronological timeline detailing my administrative tenures, directorships, and leadership roles.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central glowing line (hidden on small devices, left-aligned on small devices) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent-purple to-slate-800 -translate-x-1/2" />

          {/* Cards */}
          <div className="space-y-12">
            {organizationData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node on the track */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20">
                    <motion.div 
                      className="w-4 h-4 rounded-full border-[3px] border-dark bg-[#030712] relative flex items-center justify-center group-hover:scale-110"
                      initial={{ scale: 0.8, borderColor: '#1e293b' }}
                      whileInView={{ 
                        scale: 1, 
                        borderColor: isEven ? '#06b6d4' : '#a855f7',
                        boxShadow: isEven ? '0 0 10px rgba(6, 182, 212, 0.8)' : '0 0 10px rgba(168, 85, 247, 0.8)'
                      }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  {/* Left Spacer for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container Column */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-12 md:pr-12">
                    <motion.div
                      className="group p-6 rounded-2xl glass-card border border-white/5 relative overflow-hidden transition-all duration-300"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      {/* Subtly glowing top indicator color stripe */}
                      <div className={`absolute top-0 left-0 w-full h-[2px] transition-colors duration-300 ${
                        isEven 
                          ? 'bg-primary group-hover:bg-primary' 
                          : 'bg-accent-purple group-hover:bg-accent-purple'
                      }`} />

                      {/* Header row */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-white/5 pb-3 mb-4">
                        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                          {item.period}
                        </span>
                        
                        <div className="flex items-center gap-1">
                          <CheckCircle className={`w-3.5 h-3.5 ${isEven ? 'text-primary' : 'text-accent-purple'}`} />
                          <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">VERIFIED</span>
                        </div>
                      </div>

                      <h3 className="font-heading text-lg font-black text-white group-hover:text-primary transition-colors duration-300 leading-snug">
                        {item.role}
                      </h3>
                      
                      <p className="text-primary font-semibold text-xs mt-1 font-heading">
                        {item.org}
                      </p>
                      
                      <p className="text-slate-400 text-xs md:text-sm mt-3.5 leading-relaxed text-justify">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
