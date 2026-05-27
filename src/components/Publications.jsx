import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileCheck, ScrollText } from 'lucide-react';

const publications = [
  {
    title: 'Utilization of Mobile Technology for Nearest Tourist...',
    year: '2024',
    authors: 'Akmal Faizy, Joko Sutopo',
    venue: 'Journal of Scientific Research, Education, and Technology (JSRET)',
    description:
      'A study on the utilization of mobile technology to search for the nearest tourist attractions in Sleman Regency, Yogyakarta.',
    link: 'https://jsret.knpub.com/index.php/jrest/article/view/515',
  },
  {
    title: 'Design and Implementation of a Mobile Tourist Recommendation System for Sleman Using the Haversine Formula',
    year: '2025',
    authors: 'Akmal Faizy',
    venue: 'JITEKI - Jurnal Ilmiah Teknik Elektro Komputer dan Informatika',
    description:
      'A study implementing the Haversine Formula for a mobile-based tourist recommendation system in the Sleman area.',
    link: 'https://journal.uad.ac.id/index.php/JITEKI/article/view/30220',
  },
];

const intellectualProperty = {
  title: 'Development of a Hidden Markov Model (HMM) for Hydrometeorological Disaster Prediction in Demak Regency',
  type: 'Intellectual Property Rights',
  registry: 'SINTA Ministry Registry',
  description:
    'A registered creative work recorded as an intellectual property asset in the SINTA ministry system.',
};

export default function Publications() {
  return (
    <section id="publications" className="py-24 relative overflow-hidden bg-slate-900/10">
      <div className="absolute top-[18%] right-[-10%] w-[340px] h-[340px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[12%] left-[-10%] w-[320px] h-[320px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Research Archive</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-2">
            Scientific Publications &amp; Intellectual Property
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-purple mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-6">
            A record of research, academic publications, and registered creative work supporting my focus on mobile technology and applied computing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 grid grid-cols-1 gap-6">
            {publications.map((publication, index) => (
              <motion.article
                key={publication.title}
                className="group p-6 md:p-8 rounded-3xl glass-card border border-white/5 relative overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.03)',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent-purple opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 shadow-neon-cyan">
                      <BookOpen className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-extrabold">
                        Scientific Publication // {publication.year}
                      </span>
                      <h3 className="font-heading text-xl md:text-2xl font-black text-white mt-2 leading-tight group-hover:text-primary transition-colors duration-300">
                        {publication.title}
                      </h3>
                      <p className="text-slate-300 text-xs md:text-sm font-semibold mt-3">
                        {publication.authors}
                      </p>
                      <p className="text-slate-500 text-[11px] md:text-xs font-mono mt-2">
                        {publication.venue}
                      </p>
                    </div>
                  </div>

                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 shrink-0"
                  >
                    View Paper
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-slate-400 text-xs md:text-sm mt-6 leading-relaxed text-justify">
                  {publication.description}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="lg:col-span-4 rounded-3xl glass-card border border-white/5 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.16 }}
            whileHover={{ y: -4 }}
            style={{
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-primary/10 opacity-60 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple shadow-neon-purple">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="font-mono text-[9px] text-accent-purple uppercase tracking-widest font-extrabold">
                  Registered IP
                </span>
              </div>

              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                {intellectualProperty.type}
              </span>
              <h3 className="font-heading text-xl font-black text-white mt-3 leading-tight">
                {intellectualProperty.title}
              </h3>

              <p className="text-slate-400 text-xs md:text-sm mt-5 leading-relaxed text-justify">
                {intellectualProperty.description}
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-5 border-t border-white/5 flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-slate-400 font-mono text-[10px] uppercase tracking-widest font-bold">
                <ScrollText className="w-3.5 h-3.5 text-accent-purple" />
                {intellectualProperty.registry}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent-purple shadow-neon-purple" />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
