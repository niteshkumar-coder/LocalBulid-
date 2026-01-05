
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebaseMock';
import { Service } from '../types';

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    db.getServices().then(setServices);
  }, []);

  return (
    <div className="pb-20">
      <header className="bg-slate-900 text-white py-24 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Capabilities</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We bridge the gap between traditional local marketing and high-tech AI implementation.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 -mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-3xl flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <span className="text-[10px] font-black tracking-widest uppercase text-blue-600 block mb-2">{service.category}</span>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-slate-500 leading-relaxed text-sm mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {['Real-time optimization', 'Advanced monitoring', 'Monthly reports'].map((item, i) => (
                  <li key={i} className="flex items-center text-xs text-slate-400">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-slate-50 text-slate-900 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
