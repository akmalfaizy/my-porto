import { Mail, MapPin, MessageSquare, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col mb-16 items-center text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">Inquiries</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mt-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent-purple mt-4 rounded-full" />
          <p className="text-slate-400 text-sm md:text-base max-w-lg mt-6">
            Have a project concept or career vacancy? Connect directly through the communication channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Information Column (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="font-heading text-xl md:text-2xl font-black text-white leading-tight">
                Let's construct something innovative together.
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed text-justify">
                Currently open for freelance contracts, mobile applications, full-stack Laravel web systems, and professional opportunities.
              </p>
            </div>

            {/* Direct Cards Deck */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <a
                href="mailto:akmalfaizy123258@gmail.com"
                className="group p-5 rounded-2xl glass-card border border-white/5 flex items-center gap-4 transition-all duration-300 hover:border-primary/30"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-500 font-mono text-[9px] uppercase tracking-widest font-bold">Mailbox Address</span>
                  <span className="text-white text-xs md:text-sm font-semibold group-hover:text-primary transition-colors">
                    akmalfaizy123258@gmail.com
                  </span>
                </div>
              </a>

              {/* WhatsApp Mobile Card */}
              <a
                href="https://wa.me/6281223917160"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl glass-card border border-white/5 flex items-center gap-4 transition-all duration-300 hover:border-accent-emerald/30"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-emerald group-hover:bg-accent-emerald/10 transition-colors">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-500 font-mono text-[9px] uppercase tracking-widest font-bold">WhatsApp Direct</span>
                  <span className="text-white text-xs md:text-sm font-semibold group-hover:text-accent-emerald transition-colors">
                    +62 812 2391 7160
                  </span>
                </div>
              </a>

              {/* Geographic Card */}
              <a
                href="https://www.google.com/maps/place/Jl.+Karya+Bhakti+No.29,+Bolenglang,+Kertasari,+Ciamis"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl glass-card border border-white/5 flex items-center gap-4 transition-all duration-300 hover:border-accent-purple/30"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple/10 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-slate-500 font-mono text-[9px] uppercase tracking-widest font-bold">Headquarters Location</span>
                  <span className="text-white text-xs md:text-sm font-semibold group-hover:text-accent-purple transition-colors truncate block">
                    Ciamis, West Java, Indonesia
                  </span>
                </div>
              </a>

            </div>

            <div className="font-mono text-[9px] text-slate-600">
              SECURE_IP_ROUTER // COMMUNICATE_DIRECT
            </div>

          </div>

          {/* Direct CTA Panel (Right) */}
          <div className="lg:col-span-7 rounded-3xl glass-card border border-white/5 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent-purple/10 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">Direct Contact Router</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  <span className="font-mono text-[9px] text-primary font-bold">OPEN</span>
                </div>
              </div>

              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-mono tracking-widest font-bold">
                  Available for mobile and web projects
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-black text-white leading-tight">
                  Need a mobile or web application?
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
                  Reach me directly through WhatsApp or email to discuss application needs, websites, troubleshooting, or other technical collaborations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <a
                  href="https://wa.me/6281223917160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent-purple text-white font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-neon-cyan transition-transform duration-300 hover:scale-[1.02]"
                >
                  Hit Me!
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="mailto:akmalfaizy123258@gmail.com"
                  className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
                >
                  Email Me
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-10 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[9px] text-slate-500 uppercase tracking-widest font-bold">
              <span>NO_FORM_REQUIRED</span>
              <span>FAST_RESPONSE_CHANNEL</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
