import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Research' },
  { id: 'organization', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:py-6">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full border border-white/5 bg-[#030712]/40 backdrop-blur-md shadow-glass">
        {/* Monogram Monolithic Brand Icon */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => scrollToSection('home')} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent-purple text-white font-heading font-black text-sm relative group overflow-hidden shadow-neon-cyan transition-transform duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            AF
          </button>
          <span className="font-heading font-extrabold text-sm tracking-wide bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent hidden sm:inline-block">
            Akmal Faizy
          </span>
        </div>

        {/* Desktop Navigation Link Deck */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-full font-heading text-xs font-semibold tracking-wider uppercase transition-colors duration-300 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-neon-cyan"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Action Button CTA (Hire Me) */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-dark bg-white hover:bg-slate-200 rounded-full transition-transform duration-300 hover:scale-[1.03] shadow-lg"
          >
            Hire Me
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

        {/* Hamburger Mobile Trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden bg-dark bg-grid-pattern px-6 pt-24 pb-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left font-heading text-4xl font-extrabold tracking-tight py-2 border-b border-white/5 flex justify-between items-center group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className={activeSection === item.id ? 'text-primary' : 'text-slate-500 group-hover:text-white'}>
                    {item.label}
                  </span>
                  <span className={`text-xs font-mono text-slate-600 ${activeSection === item.id ? 'text-primary font-bold' : ''}`}>
                    [ 0{index + 1} ]
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
              <p className="text-slate-500 font-mono text-[10px] uppercase">Ready to launch digital products</p>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-accent-purple text-white font-heading font-bold text-center flex items-center justify-center shadow-neon-cyan hover:scale-[1.02] transition-transform duration-300"
              >
                Hire Me Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
