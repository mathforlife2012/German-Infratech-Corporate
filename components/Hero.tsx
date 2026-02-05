
import React from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-900/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            V.1.0 UQS DEPLOYED WORLDWIDE
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[0.95]">
            Redefining the <span className="text-sky-500">Atomic</span> Limit of Code.
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
            German Infratech Corporate introduces the <strong>UQS-1</strong>. 
            The world's first Ultra Quantized Supercomputer, utilizing photonic entanglement 
            and multi-phase quantization to solve the impossible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded flex items-center justify-center gap-2 hover:bg-sky-50 transition-colors">
              Documentation <ArrowUpRight size={20} />
            </button>
            <button className="px-8 py-4 bg-slate-900 border border-slate-700 font-bold rounded flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
              View Infrastructure <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBox label="Qubits" value="2.4M" sub="Stabilized" />
          <StatBox label="Efficiency" value="99.99%" sub="Power Draw" />
          <StatBox label="Latency" value="12ps" sub="Round-trip" />
          <StatBox label="Uptime" value="100%" sub="Since Boot" />
        </div>
      </div>
    </section>
  );
};

const StatBox: React.FC<{ label: string; value: string; sub: string }> = ({ label, value, sub }) => (
  <div className="p-6 glass-card rounded-xl border border-slate-800/50">
    <div className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-1">{label}</div>
    <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
    <div className="text-sky-400/60 text-xs font-medium">{sub}</div>
  </div>
);

export default Hero;
