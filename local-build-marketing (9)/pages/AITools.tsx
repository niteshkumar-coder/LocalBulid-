
import React, { useState, useRef, useEffect } from 'react';
import { generateMarketingAdvice } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export default function AITools() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hello! I am your AI Marketing assistant from Local build. How can I help you grow your business on YouTube, Instagram, or Facebook today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const LOGO_URL = 'https://i.ibb.co/5hsm0TSy/logo-modified.png';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const aiResponse = await generateMarketingAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Error connecting to AI core." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">AI Marketing Sandbox</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Interact with our demo AI agent to see how we build custom intelligence for local businesses.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden h-[600px] flex flex-col">
        <div className="bg-slate-900 p-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-full p-1 overflow-hidden flex items-center justify-center">
              <img src={LOGO_URL} alt="Local build Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold text-sm tracking-tight">Local build Assistant</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">Powered by Gemini 3.0</p>
            </div>
          </div>
          <button 
            onClick={() => setMessages([{ role: 'ai', text: 'Chat reset. How can I help?' }])}
            className="text-xs font-bold text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            Reset
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                m.role === 'user' ? 'bg-slate-900 text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-200'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-slate-400 rounded-2xl rounded-tl-none p-4 text-sm flex space-x-2 border border-slate-200 shadow-sm">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-75">.</span>
                <span className="animate-bounce delay-150">.</span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-slate-100 bg-white">
          <div className="flex space-x-4">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about YouTube, Instagram, or SEO..."
              className="flex-grow bg-slate-100 border border-transparent rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500 focus:bg-white outline-none transition-all"
            />
            <button type="submit" disabled={isLoading} className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-xl hover:bg-cyan-400 disabled:opacity-50 transition-all font-black text-sm shadow-lg">
              {isLoading ? 'Thinking...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
