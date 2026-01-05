
import React, { useState } from 'react';
import { db } from '../services/firebaseMock';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceInterested: 'General Inquiry'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await db.addLead(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', serviceInterested: 'General Inquiry' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Let's build something <span className="text-cyan-600">extraordinary.</span></h1>
            <p className="text-lg text-slate-500">Contact us today for a free consultation and AI readiness audit of your business from the Local build team.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 flex items-center justify-center rounded-xl text-cyan-600 text-xl flex-shrink-0">📍</div>
              <div>
                <h3 className="font-bold text-lg">Main Office</h3>
                <p className="text-slate-500">Block A, Mukharjee Market, Karol Bagh,<br />Mama bhanja theka, Delhi 110055, Delhi</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-xl text-green-600 text-xl flex-shrink-0">📞</div>
              <div>
                <h3 className="font-bold text-lg">Phone</h3>
                <p className="text-slate-500">+91 9472028969</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 flex items-center justify-center rounded-xl text-purple-600 text-xl flex-shrink-0">✉️</div>
              <div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-slate-500">localbuildhelp@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden h-64 bg-slate-200 relative grayscale hover:grayscale-0 transition-all cursor-crosshair border border-slate-200">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium z-10">
              <span className="bg-white/80 px-4 py-2 rounded-full shadow-sm text-xs font-bold uppercase tracking-widest">Google Maps Integration</span>
            </div>
            <img src="https://picsum.photos/seed/map/800/400" className="w-full h-full object-cover opacity-50" alt="map" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-slate-100">
          <h2 className="text-2xl font-bold mb-8">Send a Message to Local build</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone (Optional)</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                  placeholder="+91 0000000000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Interest</label>
                <select 
                  value={formData.serviceInterested}
                  onChange={(e) => setFormData({...formData, serviceInterested: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all appearance-none"
                >
                  <option>Network Marketing Optimization</option>
                  <option>Google AI Digital Profile</option>
                  <option>AI Chatbots</option>
                  <option>Local SEO</option>
                  <option>Predictive Analytics</option>
                  <option>Web Design</option>
                  <option>General Inquiry</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                placeholder="Tell us about your project or goals..."
              />
            </div>
            
            {status === 'success' ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-xl font-bold text-center animate-bounce">
                ✅ Inquiry sent successfully! Local build will be in touch.
              </div>
            ) : (
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-cyan-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-100 disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            )}
            {status === 'error' && <p className="text-red-500 text-center text-sm font-medium">Failed to send. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
