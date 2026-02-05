
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Loader2, Info, Cpu } from 'lucide-react';
import { askKlaus } from '../services/geminiService';
import Editable from './Editable';

interface AIAssistantProps {
  isDesignMode?: boolean;
  registry: Record<string, any>;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isDesignMode, registry }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: "INTEGRITY PROTOCOL ACTIVE. I am Klaus. Provide your inquiry regarding the UQS-1 architecture." }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await askKlaus(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <div className="w-full">
      <div className="mb-16 text-center">
        <Editable id="term-title" tag="h2" registry={registry} isDesignMode={isDesignMode} className="text-5xl font-black mb-6 uppercase tracking-tighter italic block">NEURAL LINK.</Editable>
        <Editable id="term-badge" registry={registry} isDesignMode={isDesignMode} className="text-teal-400 font-black uppercase tracking-[0.6em] text-[10px] block">Direct Core Interface</Editable>
      </div>

      <div className="glass-card rounded-sm border border-teal-500/20 overflow-hidden shadow-2xl bg-slate-950">
        <div className="bg-teal-500/5 px-6 py-4 flex items-center justify-between border-b border-teal-500/10">
          <div className="flex gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-3 text-white/40 mono text-[9px] font-black uppercase tracking-[0.3em]">
            <Cpu size={12} className="text-teal-400" /> 
            <Editable id="term-status" registry={registry} isDesignMode={isDesignMode}>STATUS: GIC_NODE_SYNC_OK</Editable>
          </div>
          <div className="w-16" />
        </div>

        <div ref={scrollRef} className="h-[550px] overflow-y-auto p-10 mono text-xs flex flex-col gap-8 bg-slate-950/40">
          {messages.map((msg, i) => (
            <div key={i} className={`flex flex-col gap-2 ${msg.role === 'assistant' ? 'text-teal-300' : 'text-slate-400'}`}>
              <span className={`font-black text-[9px] uppercase tracking-[0.4em] ${msg.role === 'assistant' ? 'text-teal-500' : 'text-white/40'}`}>
                {msg.role === 'assistant' ? 'GIC.KLAUS' : 'USER.AUTHORIZED'}
              </span>
              <span className="leading-loose whitespace-pre-wrap border-l border-teal-500/10 pl-6 font-medium text-[13px]">{msg.content}</span>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center gap-3 text-white mono italic text-[10px] uppercase font-black opacity-30">
              <Loader2 size={12} className="animate-spin" /> Processing Neural Request...
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-slate-950 border-t border-teal-500/10 flex gap-6 items-center">
          <div className="text-teal-500 mono font-black text-lg">&gt;</div>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Command input required..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/10 mono font-bold text-sm tracking-wide"
          />
          <button 
            type="submit"
            disabled={isTyping}
            className="px-8 py-3 bg-teal-500 text-slate-950 hover:bg-teal-400 font-black uppercase text-[10px] tracking-widest transition-all disabled:opacity-5"
          >
            EXECUTE
          </button>
        </form>
      </div>

      <Editable id="term-footer" registry={registry} isDesignMode={isDesignMode} className="mt-12 p-6 border border-teal-500/10 rounded-sm text-[9px] font-black text-slate-500 uppercase tracking-[0.4em] text-center bg-teal-500/[0.02] block">
        All communications logged via GIC-Quantum Ledger. Authorized use only.
      </Editable>
    </div>
  );
};

export default AIAssistant;
