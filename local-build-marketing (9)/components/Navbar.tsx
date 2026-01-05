
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'AI Tools', path: '/ai-tools' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const LOGO_URL = 'https://i.ibb.co/5hsm0TSy/logo-modified.png';

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-white/20 transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center">
              <img src={LOGO_URL} alt="Local build Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="text-xl md:text-2xl font-black text-white tracking-tight">
              Local <span className="text-cyan-400">build</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-300 hover:text-cyan-400 font-semibold text-sm transition-all tracking-wide uppercase"
              >
                {link.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className="bg-cyan-500 text-slate-950 px-5 py-2 rounded-full text-xs font-black uppercase hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                Dashboard
              </Link>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/5 px-4 py-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-bold text-lg uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          {isAdmin && (
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block text-cyan-400 font-black text-lg uppercase tracking-widest"
            >
              Admin Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
