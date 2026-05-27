import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ZoomIn, X, Globe } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Tourism App Sleman Wanderlust',
    category: 'Thesis / Android App',
    image: 'dist/img/portofolio_2.png',
    gridClass: 'md:col-span-2',
    tech: ['Kotlin', 'Android SDK', 'Haversine Algorithm', 'Google Maps', 'Agile'],
    shortDesc: 'Undergraduate thesis project featuring nearest attraction mapping using the Haversine formula, QR validation tickets, and culinary directories.',
    longDesc: 'Developed using the Agile Scrum methodology, Sleman Wanderlust is a travel companion app designed for Sleman, Yogyakarta. It calculates the physical distance between the user and nearby tourist hotspots using the mathematical Haversine formula to render local recommendations. It supports QR-coded check-ins, local culinary exploration directories, real-time map navigation, bug logs, and custom accounts. This project was honored during the academic review at UTY.',
    github: 'https://github.com/akmalfaizy',
    demo: 'https://github.com/akmalfaizy',
    type: 'android'
  },
  {
    id: 2,
    title: 'FitSphere - Fitness Ecosystem',
    category: 'Android App',
    image: 'dist/img/portofolio_3.png',
    gridClass: 'md:col-span-1',
    tech: ['Kotlin', 'Android SDK', 'Midtrans Gateway', 'Firebase', 'QR Scanner', 'SQLite'],
    shortDesc: 'A unified fitness platform with multi-role login (Member & Admin), featuring automatic Midtrans payment processing, dynamic BMI calculations, personal training interfaces, and QR code verification scanners.',
    longDesc: 'FitSphere is a state-of-the-art mobile ecosystem. Members can easily purchase gym memberships or customized fitness classes using the integrated Midtrans gateway, track daily calorie metrics, calculate BMI with personalized suggestions, and contact consultants directly on WhatsApp. For gym managers, FitSphere includes an administrative portal to scan member QR codes, manage daily gym updates, and extract analytical reports (daily, weekly, monthly, and yearly transaction charts). It bridges the offline-online experience with zero friction.',
    github: 'https://github.com/akmalfaizy',
    demo: 'https://github.com/akmalfaizy',
    type: 'android'
  },
  {
    id: 3,
    title: 'Korean Language Learning App',
    category: 'Educational Android App',
    image: 'dist/img/portofolio_1.png',
    gridClass: 'md:col-span-1',
    tech: ['Kotlin', 'Android SDK', 'Interactive Quizzes', 'UX Design'],
    shortDesc: 'An educational app for learning Hangul characters, core consonants, and Korean cultural practices via gamified interactive quizzes.',
    longDesc: 'This educational tool aims to provide an engaging language entry point. From mastering base consonants and vowels to exploring rich cultural elements like regional recipes and traditional festivals, the app offers dual-mode curricula. Users can test their vocabulary retention through interactive real-time score quizzes and detailed progress trackers. Dressed in a modern responsive interface.',
    github: 'https://github.com/akmalfaizy',
    demo: 'https://github.com/akmalfaizy',
    type: 'android'
  },
  {
    id: 4,
    title: 'Travine.id',
    category: 'Live Web Project',
    image: null,
    gridClass: 'md:col-span-1',
    tech: ['Web Development', 'UI/UX Design', 'Responsive', 'SEO'],
    shortDesc: 'The official website of Travine Tour, a Yogyakarta-based tour and travel provider offering personalized travel packages and integrated services.',
    longDesc: [
      'Travine.id is the official website of Travine Tour, a Yogyakarta-based tour and travel service provider. The platform focuses on offering more personal and meaningful travel experiences, managed directly by an experienced local team.',
      'The platform offers several thematic travel packages, including Heritage packages for history and culture, Nature packages for landscape exploration, Wellness packages for fitness and relaxation, Culinary packages for authentic Yogyakarta food experiences, Creative packages for educational or local art activities, and Custom packages for customers who want to design their own itinerary.',
      'Beyond travel packages, the website also integrates three core travel needs: destinations, accommodation, and transportation. Travine presents recommendations for interesting places in Yogyakarta, lodging options, and transportation support for traveler mobility.',
      'Travine Tour highlights several key strengths: experienced local guides, competitive pricing, a broad destination catalog, and 24-hour customer support.'
    ],
    github: null,
    demo: 'https://travine.id/',
    type: 'web'
  },
  {
    id: 5,
    title: 'Morganizerr.com',
    category: 'Live Web Project',
    image: null,
    gridClass: 'md:col-span-1',
    tech: ['Web Development', 'UI/UX Design', 'Responsive', 'SEO'],
    shortDesc: 'The website of M Organizer, an active automotive event organizer in Central Sulawesi handling drag race, drag bike, modification contests, and social events.',
    longDesc: [
      'M Organizer is one of the well-known event organizers in Central Sulawesi, especially in Palu, actively trusted to handle major regional and national automotive events. The organization is owned and led by Harmansah, widely known as Mamen.',
      'M Organizer focuses heavily on official racing events, especially Drag Bike and Drag Race competitions. Its track record includes the BERANI National Drag Bike & Drag Race Championship, which brought in more than 1,000 starters from various regions, as well as Bhayangkara Otomotif Nambaso with the Central Sulawesi Regional Police for the Bhayangkara anniversary.',
      'Beyond speed racing, M Organizer also supports automotive creativity through motorcycle and car modification contests. Judging emphasizes innovation, creativity, and local modification aesthetics.',
      'M Organizer is also known for combining automotive events with social initiatives, including a community gathering that blended vehicle modification contests with a mass iftar event for thousands of orphanage children at Vatulemo Field, Palu.',
      'Through these events, M Organizer has become one of the key drivers for channeling young talent in Sulawesi, helping reduce illegal street racing while strengthening the automotive scene in Central Sulawesi.'
    ],
    github: null,
    demo: 'https://morganizerr.com/',
    type: 'web'
  }
];

// Placeholder card for web projects with no screenshot
function WebProjectPlaceholder({ project }) {
  const colors = {
    4: { from: 'from-primary/20', to: 'to-accent-purple/20', text: 'text-primary', dot: 'bg-primary' },
    5: { from: 'from-accent-purple/20', to: 'to-accent-pink/20', text: 'text-accent-purple', dot: 'bg-accent-purple' },
  };
  const c = colors[project.id] || colors[4];

  return (
    <div className={`relative overflow-hidden aspect-[16/9] bg-slate-950/80 flex items-center justify-center bg-gradient-to-br ${c.from} ${c.to}`}>
      <div className="flex flex-col items-center gap-3 text-center px-4">
        <div className={`w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center ${c.text}`}>
          <Globe className="w-7 h-7" />
        </div>
        <span className={`font-heading font-black text-lg ${c.text}`}>{project.title}</span>
        <span className="text-slate-400 text-xs font-mono">Live Website</span>
      </div>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
    </div>
  );
}

export default function Projects({ onModalChange }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const isOpen = Boolean(selectedProject);
    onModalChange?.(isOpen);

    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
      onModalChange?.(false);
    };
  }, [selectedProject, onModalChange]);

  // Close modal when clicking backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedProject(null);
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/20">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Showcase</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-2">
            Selected Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-purple mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base max-w-lg mt-6">
            A curated showcase of applications and web platforms I have built and maintained.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              className={`group rounded-3xl glass-card border border-white/5 overflow-hidden flex flex-col justify-between relative cursor-pointer ${project.gridClass}`}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              style={{
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.03)'
              }}
            >
              {/* Top Card Image & Overlay */}
              {project.image ? (
                <div className="relative overflow-hidden aspect-[16/9] bg-slate-950/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Visual glass overlay showing on hover */}
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-sm border border-white/10 text-[9px] font-mono font-extrabold uppercase tracking-widest text-primary">
                    {project.category}
                  </span>
                </div>
              ) : (
                <div className="relative">
                  <WebProjectPlaceholder project={project} />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-sm border border-white/10 text-[9px] font-mono font-extrabold uppercase tracking-widest text-primary z-10">
                    {project.category}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Text Info Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs md:text-sm mt-3 leading-relaxed text-justify line-clamp-3">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech list tags and CTA */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[9px] font-mono">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[9px] font-mono font-bold">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <span className="font-heading text-xs font-bold text-primary inline-flex items-center gap-1 group-hover:underline">
                    Details
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal - Fixed scroll & close button issues */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-dark/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            {/* Modal Glass panel - scrolls independently from the page */}
            <motion.div
              className="bg-slate-950 border border-white/10 w-full max-w-3xl max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-5rem)] my-6 md:my-10 rounded-[32px] overflow-y-auto overflow-x-hidden shadow-2xl relative"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/80 text-white shadow-2xl backdrop-blur-md transition-colors hover:bg-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
              
              
              {/* Large Preview Banner */}
              {selectedProject.image ? (
                <div className="relative aspect-[16/9] w-full bg-slate-950">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute bottom-4 left-6 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] font-mono font-extrabold uppercase tracking-widest text-primary shadow-neon-cyan">
                    {selectedProject.category}
                  </span>
                </div>
              ) : (
                <div className="relative">
                  <WebProjectPlaceholder project={selectedProject} />
                  <span className="absolute bottom-4 left-6 px-3.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-[10px] font-mono font-extrabold uppercase tracking-widest text-primary shadow-neon-cyan">
                    {selectedProject.category}
                  </span>
                </div>
              )}

              {/* Content details */}
              <div className="p-6 md:p-8 space-y-6">
                
                <div>
                  <h3 className="font-heading text-2xl md:text-3xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                  
                  {/* Tech list tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-heading text-sm font-extrabold text-slate-300 uppercase tracking-widest border-b border-white/5 pb-2">
                    Overview &amp; Implementation
                  </h4>
                  {(Array.isArray(selectedProject.longDesc) ? selectedProject.longDesc : [selectedProject.longDesc]).map((paragraph, index) => (
                    <p key={index} className="text-slate-400 text-sm md:text-base leading-relaxed text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Actions buttons footer inside modal */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                    Verified System Code: 0{selectedProject.id}X_OK
                  </span>

                  <div className="flex gap-4 w-full sm:w-auto">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent-purple text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-neon-cyan transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {selectedProject.type === 'web' ? 'Visit Website' : 'Live Demo'}
                    </a>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
