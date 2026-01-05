
import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: (status: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real auth - in real life use signInWithEmailAndPassword
    if (pass === 'admin123') {
      onLogin(true);
    } else {
      setError('Invalid master password. Access denied.');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-black text-slate-900">Admin Login</h1>
          <p className="text-slate-500 text-sm">Secure access for agency managers only.</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Master Password</label>
            <input 
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-slate-900 outline-none transition-all"
            />
          </div>
          {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
          <button 
            type="submit"
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            Authenticate
          </button>
        </form>
        <p className="text-[10px] text-slate-400 text-center">
          Demo mode: Password is <strong>admin123</strong>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
