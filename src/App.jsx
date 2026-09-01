import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Publications from './components/Publications';
import Organization from './components/Organization';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Invoice from './components/Invoice';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => {
    const fullUrl = (window.location.pathname + window.location.hash + window.location.search).toLowerCase();
    if (fullUrl.includes('invoice')) {
      return 'invoice';
    }
    return 'home';
  });

  useEffect(() => {
    const checkRoute = () => {
      const fullUrl = (window.location.pathname + window.location.hash + window.location.search).toLowerCase();
      if (fullUrl.includes('invoice')) {
        setCurrentRoute('invoice');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  // Track mouse coordinates for neon cursor glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Monitor visible section for Active Navbar Dot Indicator
  useEffect(() => {
    if (loading) return;

    const sections = ['home', 'about', 'skills', 'education', 'publications', 'organization', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : currentRoute === 'invoice' ? (
        <Invoice onBack={() => {
          window.location.hash = '';
          if (window.history.length > 1) {
            window.history.pushState(null, '', '/');
          }
          setCurrentRoute('home');
        }} />
      ) : (
        <div className="relative min-h-screen bg-dark bg-grid-pattern overflow-hidden text-slate-100 selection:bg-primary selection:text-dark">
          {/* Custom Cursor Glow (Desktop Only) */}
          {!isMobile && (
            <div 
              className="fixed pointer-events-none z-[1] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/10 to-accent-purple/10 blur-[130px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-[0.1s] ease-out"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            />
          )}

          {/* Sticky Header Glass Navbar */}
          {!projectModalOpen && <Navbar activeSection={activeSection} />}

          {/* Master Content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Publications />
            <Organization />
            <Projects onModalChange={setProjectModalOpen} />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
