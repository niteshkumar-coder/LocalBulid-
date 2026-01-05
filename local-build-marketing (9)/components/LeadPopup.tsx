
import React, { useState, useEffect } from 'react';
import { db } from '../services/firebaseMock';

const LeadPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  const LOGO_URL = 'https://i.ibb.co/5hsm0TSy/logo-modified.png';

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasSeenLeadPopup', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await db.addLead({
        ...formData,
        phone: 'N/A',
        message: 'Lead captured via 5-second auto-popup',
        serviceInterested: 'Free Consultation'
      });
      setIsSubmitted(true);
      setTimeout(() => setIsVisible(false), 3000);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-[fadeIn_0.5s_ease-out]">
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform animate-[scaleIn_0.4s_ease-out] border border-slate-100">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 md:p-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-slate-50 rounded-full p-3 mb-6 shadow-sm border border-slate-100">
            <img src={LOGO_URL} alt="Local build" className="w-full h-full object-contain" />
          </div>

          {!isSubmitted ? (
            <>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">
                Unlock Your <span className="text-cyan-600">Growth</span>
              </h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                Join 1,000+ local businesses scaling with Local build. Get a free AI strategy audit sent to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-slate-900 font-medium"
                />
                <input 
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@gmail.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-slate-900 font-medium"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-600 text-white font-bold py-4 rounded-2xl hover:bg-cyan-700 transition-all shadow-lg mt-4 text-lg"
                >
                  {loading ? 'Processing...' : 'Submit'}
                </button>
              </form>
            </>
          ) : (
            <div className="py-10 animate-bounce">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
              <h3 className="text-xl font-bold text-slate-900">Expertise on the way!</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
