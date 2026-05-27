import { motion } from 'framer-motion';
import { Smartphone, Code, Database, HardDrive, Network, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Android Native',
    icon: Smartphone,
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'group-hover:border-primary/40',
    iconColor: 'text-primary',
    skills: [
      { name: 'Kotlin', level: 'Expert' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'Android SDK', level: 'Expert' },
      { name: 'Jetpack Compose', level: 'Intermediate' },
      { name: 'Gradle & API Integration', level: 'Advanced' }
    ]
  },
  {
    title: 'Laravel Full-stack',
    icon: Code,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-accent-purple/40',
    iconColor: 'text-accent-purple',
    skills: [
      { name: 'Laravel', level: 'Expert' },
      { name: 'PHP', level: 'Expert' },
      { name: 'Blade Templates', level: 'Advanced' },
      { name: 'RESTful API Development', level: 'Advanced' },
      { name: 'Responsive Web Interfaces', level: 'Advanced' }
    ]
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'group-hover:border-accent-emerald/40',
    iconColor: 'text-accent-emerald',
    skills: [
      { name: 'Firebase', level: 'Expert' },
      { name: 'Supabase', level: 'Expert' },
      { name: 'MySQL', level: 'Expert' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Local DB (Room / SQLite)', level: 'Advanced' }
    ]
  },
  {
    title: 'Troubleshooting',
    icon: Wrench,
    color: 'from-sky-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-sky-500/40',
    iconColor: 'text-sky-400',
    skills: [
      { name: 'Systematic Problem Solving', level: 'Expert' },
      { name: 'Application Debugging', level: 'Expert' },
      { name: 'Error Log Analysis', level: 'Advanced' },
      { name: 'Performance Issue Diagnosis', level: 'Advanced' },
      { name: 'Hardware & Network Issue Isolation', level: 'Advanced' }
    ]
  },
  {
    title: 'Hardware & Networking',
    icon: Network,
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'group-hover:border-accent-blue/40',
    iconColor: 'text-accent-blue',
    skills: [
      { name: 'Computer Hardware Maintenance', level: 'Advanced' },
      { name: 'LAN/WLAN Configuration', level: 'Advanced' },
      { name: 'Network Troubleshooting', level: 'Advanced' },
      { name: 'Linux Server Administration', level: 'Intermediate' },
      { name: 'Computer & Network Engineering', level: 'Advanced' }
    ]
  },
  {
    title: 'Workflow & Practices',
    icon: HardDrive,
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'group-hover:border-amber-500/40',
    iconColor: 'text-amber-500',
    skills: [
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'Agile & Scrum (Thesis project)', level: 'Expert' },
      { name: 'UI/UX Design principles', level: 'Advanced' },
      { name: 'Midtrans Payment Gateway', level: 'Advanced' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/10">
      {/* Background neon flares */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Capabilities</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-2">
            My Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-purple mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base max-w-lg mt-6">
            A comprehensive overview of programming languages, frameworks, systems, and workflow structures I leverage daily.
          </p>
        </div>

        {/* Skill Card Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={index}
                className="group p-6 md:p-8 rounded-3xl glass-card border border-white/5 relative overflow-hidden transition-all duration-300"
                whileHover={{ y: -4 }}
                style={{
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.03)'
                }}
              >
                {/* Background neon soft color strip */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10`} />

                {/* Glowing border active cover */}
                <div className={`absolute inset-0 border border-transparent rounded-3xl transition-colors duration-300 ${category.borderColor}`} />

                {/* Card Title Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                      <IconComponent className={`w-5 h-5 ${category.iconColor}`} />
                    </div>
                    <h3 className="font-heading text-lg font-black text-white">{category.title}</h3>
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                    SECURE_MODULE
                  </span>
                </div>

                {/* Skill List Inside */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs md:text-sm">
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className={`font-mono text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white/5 tracking-wider text-slate-400 group-hover:${category.iconColor} transition-colors duration-300`}>
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Premium visual bar strip */}
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                          className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-accent-purple`}
                          style={{
                            width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '82%' : '65%'
                          }}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '82%' : '65%'
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: sIdx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
