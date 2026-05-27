import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  'SYSTEM: BOOTING_CORE_V2.026...',
  'SECURE_CONNECT: SUCCESS_IP_127.0.0.1',
  'LOAD_DATABASE: KNOWLEDGE_ENGINE...',
  'RESOLVE_GPA: UTY_GP_3.80_FOUND',
  'COMPILING: COTLIN_ANDROID_STACK...',
  'COMPILING: REACT_NEXTJS_WEB_SYSTEM...',
  'LOAD_STACK: FRAMER_LENIS_TAILWIND...',
  'ASSETS: DECRYPTING_PORTFOLIO_CARDS...',
  'AUTH: SUCCESSFUL_USER_VERIFICATION',
  'SYSTEM: READY_TO_LAUNCH • WELCOME'
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 600); // delay exit slightly for clean trans
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 2;
        return Math.min(prev + step, 100);
      });
    }, 80);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < bootLogs.length - 1) return prev + 1;
        clearInterval(logInterval);
        return prev;
      });
    }, 120);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#030712] z-[9999] flex flex-col justify-between p-8 md:p-16 select-none font-mono text-xs md:text-sm text-slate-400"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 font-medium text-slate-500 uppercase tracking-widest text-[10px]">Dev Terminal</span>
          </div>
          <span className="text-glow-cyan text-primary text-[10px] uppercase font-bold tracking-widest">
            Vite v5.2.0
          </span>
        </div>

        {/* Booting Terminal Console Logs */}
        <div className="flex-1 flex flex-col justify-end gap-2 my-8 overflow-hidden max-h-[300px]">
          {bootLogs.slice(0, logIndex + 1).map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center gap-2 leading-relaxed ${
                index === logIndex ? 'text-primary' : 'text-slate-500'
              }`}
            >
              <span className="text-[10px] text-slate-600 font-bold">[{index + 1}]</span>
              <span>{log}</span>
            </motion.div>
          ))}
        </div>

        {/* Loading Footer Counter */}
        <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 tracking-wider text-[10px] uppercase font-semibold">Loading Core Modules</span>
              <span className="font-heading text-lg font-bold text-white tracking-wide">AKMAL FAIZY PORTFOLIO</span>
            </div>
            <div className="flex items-baseline">
              <span className="text-3xl md:text-5xl font-black text-white font-heading tracking-tight">{progress}</span>
              <span className="text-primary font-bold text-xs md:text-sm ml-1">%</span>
            </div>
          </div>
          
          {/* Glowing Custom Progress Track */}
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-accent-purple shadow-neon-cyan"
              style={{ width: `${progress}%` }}
              layoutId="progress"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
