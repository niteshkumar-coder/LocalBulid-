
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebaseMock';
import { Service } from '../types';

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  
  const LOGO_URL = 'https://i.ibb.co/5hsm0TSy/logo-modified.png';
  const FOUNDER_IMAGE_URL = 'https://i.ibb.co/4ntzNcw5/me.png';
  const AI_OFFICE_BG = 'https://images.unsplash.com/photo-1620712943543-bcc4628c9457?auto=format&fit=crop&q=80&w=1600'; // High-quality futuristic AI office matching the theme

  const reviews = [
    { name: "Rahul Sharma", role: "E-com Owner", text: "Local build changed my business. 300% growth in 3 months!", rating: 5, avatar: "https://i.pravatar.cc/150?u=1" },
    { name: "Ananya Iyer", role: "Content Creator", text: "The AI automation for YouTube is lethal. Best investment ever.", rating: 5, avatar: "https://i.pravatar.cc/150?u=2" },
    { name: "Vikram Singh", role: "Tech Founder", text: "Finally an agency that understands data-driven growth.", rating: 5, avatar: "https://i.pravatar.cc/150?u=3" },
    { name: "Sneha Kapoor", role: "Restaurant Chain", text: "Local SEO results were instant. My walk-ins doubled.", rating: 5, avatar: "https://i.pravatar.cc/150?u=4" },
    { name: "Arjun Mehta", role: "B2B SaaS", text: "The Lead Gen system is purely autonomous. Incredible.", rating: 5, avatar: "https://i.pravatar.cc/150?u=5" },
    { name: "Priya Das", role: "Fitness Coach", text: "AI Chatbots handle 90% of my queries now. Love it!", rating: 5, avatar: "https://i.pravatar.cc/150?u=6" },
  ];

  useEffect(() => {
    db.getServices().then(setServices);
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen text-white selection:bg-cyan-500/30 font-inter overflow-x-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#083344_0%,_#020617_100%)] opacity-70"></div>
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      {/* HERO SECTION (Founder Digital Circle Interface) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
        {/* Futuristic Lab Background behind the Founder column */}
        <div className="absolute left-0 top-0 w-full lg:w-1/2 h-full z-0 opacity-20 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] z-10"></div>
           <img 
             src={AI_OFFICE_BG} 
             alt="AI Lab Background" 
             className="w-full h-full object-cover grayscale brightness-50 contrast-125"
           />
           <div className="absolute inset-0 bg-cyan-950/20 mix-blend-color"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 animate-[fadeIn_0.8s_ease-out]">
            
            {/* Left Side: Founder Digital Circle */}
            <div className="relative group w-full lg:w-1/2 flex flex-col items-center justify-center py-20 lg:py-0">
              
              {/* Floating Data Badges */}
              <div className="absolute -top-4 -left-12 z-20 animate-bounce-slow">
                 <div className="px-4 py-1.5 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/40 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center space-x-2">
                    <div className="w-1 h-1 rounded-full bg-cyan-400 animate-ping"></div>
                    <span className="text-[9px] font-black text-cyan-400 tracking-widest uppercase">FOUNDER_SYNC: CONNECTED</span>
                 </div>
              </div>

              {/* Digital Orbital Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none h-full w-full">
                <div className="w-80 h-80 md:w-[500px] md:h-[500px] border-2 border-dashed border-cyan-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-72 h-72 md:w-[460px] md:h-[460px] border border-blue-500/10 rounded-full animate-spin-reverse-slow"></div>
              </div>

              {/* Main Circular Container */}
              <div className="relative p-2 rounded-full border border-white/10 bg-slate-950/50 backdrop-blur-3xl shadow-[0_0_100px_-20px_rgba(34,211,238,0.5)]">
                <div className="absolute inset-0 scanner-line bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent z-10 pointer-events-none rounded-full overflow-hidden"></div>
                <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-cyan-400/30 bg-[#020617]">
                   <img src={FOUNDER_IMAGE_URL} alt="Founder" className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-transparent mix-blend-overlay"></div>
                </div>
              </div>

              {/* Founder Name Tag */}
              <div className="mt-8 relative z-20 text-center">
                <div className="inline-block px-8 py-3 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform group-hover:scale-105 transition-transform">
                  <h2 className="text-2xl md:text-3xl font-black tracking-[0.2em] text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    Rishabh <span className="text-cyan-400">Singh</span>
                  </h2>
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-1 opacity-50"></div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-2">Chief_Strategist</p>
                </div>
              </div>
            </div>

            {/* Right Side: Founder Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-10">
              <div className="inline-flex items-center space-x-3 px-8 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-ping"></div>
                <span className="text-xs font-black tracking-[0.5em] text-cyan-400 uppercase">VISION_CORE:ACTIVE</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-10">
                Engineering <br /> <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.7)]">Social Capital.</span>
              </h1>
              
              <p className="text-slate-400 text-xl md:text-3xl font-medium leading-relaxed max-w-xl italic">
                "Growth today depends on your ability to integrate intelligent automated feedback loops."
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <Link to="/contact" className="px-14 py-6 bg-cyan-500 text-slate-950 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(34,211,238,0.5)] active:scale-95">
                  Contact Founder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES DISPLAY SECTION */}
      <section className="relative py-40 px-4 border-t border-white/5 bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-28 gap-8">
            <div className="space-y-4">
              <div className="text-cyan-500 text-xs font-black uppercase tracking-[0.6em]">SYSTEM_MODULARITY</div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">Full Service <br /> <span className="text-slate-500">Intelligence.</span></h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <div key={service.id} className="group relative p-12 bg-slate-900/40 border border-white/5 rounded-[3.5rem] hover:bg-slate-900/60 transition-all duration-500">
                <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center text-5xl mb-12">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-12">{service.description}</p>
                <Link to="/contact" className="inline-flex items-center text-xs font-black text-white uppercase tracking-widest hover:text-cyan-400">
                  Deploy Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDING SECTION (Side-by-side with Rectangle Scanner Frame) */}
      <section className="relative py-40 px-4 border-t border-white/5 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            {/* Logo in Digital Rectangle */}
            <div className="relative group w-full lg:w-1/2 flex justify-center lg:order-last">
              <div className="relative p-1 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-[3rem] border border-white/10 shadow-[0_0_80px_-20px_rgba(34,211,238,0.4)]">
                {/* Scanner Frame */}
                <div className="absolute inset-0 scanner-line bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent z-10 pointer-events-none rounded-[2.9rem] overflow-hidden"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-cyan-400/60 rounded-tl-[3rem] z-20"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-cyan-400/60 rounded-tr-[3rem] z-20"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-cyan-400/60 rounded-bl-[3rem] z-20"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-cyan-400/60 rounded-br-[3rem] z-20"></div>

                <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-[2.9rem] bg-slate-900/90 flex items-center justify-center p-16 overflow-hidden border border-white/5">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,211,238,0.1),_transparent_70%)]"></div>
                   <img src={LOGO_URL} alt="Local build Logo" className="w-full h-full object-contain animate-pulse-slow relative z-10" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-12">
              <div className="inline-flex items-center space-x-2 text-cyan-500 text-xs font-black uppercase tracking-[0.5em] mb-4">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
                <span>BRAND_CORE_SYNC</span>
              </div>
              <h3 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.85]">
                Local <br className="hidden md:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">build.</span>
              </h3>
              <p className="text-slate-400 text-2xl leading-relaxed italic font-medium max-w-xl">
                Autonomous marketing systems for the digital-first local business. Scalable, Data-driven, Lethal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 1000+ REVIEWS INFINITE WALL SECTION */}
      <section className="relative py-40 px-4 border-t border-white/5 bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto mb-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-6 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-[10px] font-black tracking-widest uppercase">Verified System Trust</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
              1000+ <span className="text-cyan-400">Elite Reviews.</span>
            </h2>
          </div>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex py-12 animate-marquee whitespace-nowrap gap-8 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews, ...reviews].map((rev, i) => (
              <div key={i} className="inline-block w-[350px] p-8 bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-white/10">
                    <img src={rev.avatar} alt={rev.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{rev.name}</h4>
                    <p className="text-cyan-500 text-xs font-black uppercase tracking-widest">{rev.role}</p>
                  </div>
                </div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic whitespace-normal">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 border-t border-white/5 pt-20">
          {[
            { label: "HAPPY CLIENTS", val: "1000+" },
            { label: "AI AUTOMATIONS", val: "2.4K" },
            { label: "LEADS GENERATED", val: "850K" },
            { label: "ROI INCREASE", val: "310%" }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-4xl md:text-6xl font-black text-white">{stat.val}</div>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA - UPDATED COLOR AND SIZE */}
      <section className="relative py-40 bg-[#020617] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#083344_0%,_transparent_70%)] opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
            READY TO DEPLOY <br /> <span className="text-cyan-400">YOUR GROWTH OS?</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <Link to="/contact" className="bg-cyan-500 text-slate-950 px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] active:scale-95">
              Initialize Now
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-spin-slow { animation: spin 25s linear infinite; }
        .animate-spin-reverse-slow { animation: spin-reverse 30s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25px); } }
        
        .scanner-line { animation: scan 4s linear infinite; }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(400%); } }
        
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        @keyframes pulse-slow { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(0.95); } }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Home;
