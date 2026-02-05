import React, { useState } from 'react';
import { ArrowRight, Layers, Send, ShieldCheck, Mail, Trash2 } from 'lucide-react';
import { Page } from '../App';
import Editable from '../components/Editable';

interface HomeProps {
  onNavigate: (page: Page) => void;
  isDesignMode?: boolean;
  registry: Record<string, any>;
  imageRegistry: Record<string, string[]>;
}

const Home: React.FC<HomeProps> = ({ onNavigate, isDesignMode, registry, imageRegistry }) => {
  const injectedImages = imageRegistry['home'] || [];
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-48 pb-24 md:pb-40 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 md:gap-4 px-4 md:px-5 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-[8px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase mb-8 md:mb-12 shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,1)]" />
              <Editable id="home-hero-badge" registry={registry} isDesignMode={isDesignMode}>Deployment Active: UQS-1 Cluster GIC_01</Editable>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter mb-8 md:mb-10 leading-[0.9] md:leading-[0.8] text-white break-words">
              <Editable id="home-hero-title-1" registry={registry} isDesignMode={isDesignMode}>BEYOND</Editable> <Editable id="home-hero-title-2" className="text-teal-400 italic" registry={registry} isDesignMode={isDesignMode}>INFINITY.</Editable>
            </h1>
            
            <Editable id="home-hero-desc" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-lg md:text-2xl text-slate-400 mb-12 md:text-xl leading-relaxed max-w-3xl font-light tracking-wide">
              German Infratech Corporate introduces the first stable <strong className="text-white font-bold">Ultra Quantized Supercomputer</strong>. Architecting the substrate of reality through computational excellence.
            </Editable>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
              <button onClick={() => onNavigate('specs')} className="px-10 py-4 md:px-12 md:py-5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all flex items-center justify-center gap-4 group rounded-full shadow-2xl shadow-teal-500/30">
                Initiate Core Sync <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-slate-950/50 border-y border-teal-500/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <Editable id="home-about-label" registry={registry} isDesignMode={isDesignMode} className="text-teal-400 font-black text-[10px] uppercase tracking-[0.6em] mb-6 md:mb-8 block">Engineering Philosophy</Editable>
            <h3 className="text-4xl md:text-5xl font-black mb-8 md:mb-10 leading-tight uppercase italic">
               <Editable id="home-about-title-1" registry={registry} isDesignMode={isDesignMode}>The Precision of</Editable> <Editable id="home-about-title-2" registry={registry} isDesignMode={isDesignMode} className="text-white not-italic">GIC.</Editable>
            </h3>
            <div className="space-y-6 text-slate-400 text-base md:text-lg font-light leading-relaxed">
              <Editable id="home-about-p1" tag="p" registry={registry} isDesignMode={isDesignMode}>
                At GIC, we believe that classical computation has reached its terminal velocity. The UQS-1 isn't just a faster machine; it is a paradigm shift in how information is processed.
              </Editable>
              <Editable id="home-about-p2" tag="p" registry={registry} isDesignMode={isDesignMode}>
                Our multi-phase quantization technology stabilizes qubits in ambient temperatures, allowing for industrial-scale deployment without traditional liquid helium cooling arrays.
              </Editable>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <StatDetail id="home-stat-1" label="Stabilization" value="99.999%" desc="Coherency" registry={registry} isDesignMode={isDesignMode} />
            <StatDetail id="home-stat-2" label="Throughput" value="1.2 PetaOPS" desc="Neural Flux" registry={registry} isDesignMode={isDesignMode} />
            <StatDetail id="home-stat-3" label="Efficiency" value="85%" desc="Energy Delta" registry={registry} isDesignMode={isDesignMode} />
            <StatDetail id="home-stat-4" label="Nodes" value="4,200+" desc="Global Mesh" registry={registry} isDesignMode={isDesignMode} />
          </div>
        </div>
      </section>

      {/* Global Fabric Section */}
      <section className="py-24 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            <div className="w-full md:w-1/3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 md:mb-8 rounded-2xl">
                <Layers className="text-teal-400" size={24} />
              </div>
              <Editable id="home-infra-title" tag="h4" registry={registry} isDesignMode={isDesignMode} className="text-2xl md:text-3xl font-black uppercase mb-4 md:mb-6 block tracking-tighter">Global Fabric.</Editable>
              <Editable id="home-infra-desc" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 leading-loose block font-medium">
                The GIC network spans 24 countries, providing decentralized quantum processing power to authorized institutional partners. Our GIC hub acts as the primary relay for all neural traffic.
              </Editable>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="p-8 md:p-10 liquid-glass">
                 <Editable id="home-infra-box1-title" tag="h5" registry={registry} isDesignMode={isDesignMode} className="text-white font-black uppercase text-xs tracking-widest mb-4 block">GIC_CORE_01</Editable>
                 <Editable id="home-infra-box1-text" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 text-sm leading-relaxed block">
                   Primary headquarters and development cluster. Home to the first generation UQS-1 core.
                 </Editable>
              </div>
              <div className="p-8 md:p-10 liquid-glass">
                 <Editable id="home-infra-box2-title" tag="h5" registry={registry} isDesignMode={isDesignMode} className="text-white font-black uppercase text-xs tracking-widest mb-4 block">SYD_LINK_04</Editable>
                 <Editable id="home-infra-box2-text" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 text-sm leading-relaxed block">
                   Deep-sea computational node serving the Pacific economic zone with sub-picosecond latency.
                 </Editable>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Box Section */}
      <section className="py-24 md:py-32 px-4 md:px-6 bg-slate-950/80 border-t border-teal-500/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <Editable id="home-inquiry-label" registry={registry} isDesignMode={isDesignMode} className="text-teal-400 font-black text-[10px] uppercase tracking-[0.6em] mb-6 block">Authorization Required</Editable>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter italic">
               <Editable id="home-inquiry-title-1" registry={registry} isDesignMode={isDesignMode}>Neural Link</Editable> <br/>
               <Editable id="home-inquiry-title-2" registry={registry} isDesignMode={isDesignMode} className="text-white not-italic">Request.</Editable>
            </h3>
            <Editable id="home-inquiry-text" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Institutions seeking access to GIC infrastructure must undergo a rigorous neural baseline verification. Submit your relay details below to initiate protocol.
            </Editable>
            <div className="flex gap-8 opacity-40">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500"><ShieldCheck size={14}/> EU COMPLIANT</div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500"><Mail size={14}/> AES-8192 SECURE</div>
            </div>
          </div>

          <div className="liquid-glass p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 blur-3xl pointer-events-none" />
            
            {formState === 'success' ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-16 h-16 bg-teal-500 text-slate-950 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Transmission Received</h4>
                <p className="text-slate-400 text-sm mono">RELAY_STATUS: QUEUED_FOR_VERIFICATION</p>
                <button onClick={() => setFormState('idle')} className="mt-10 text-[10px] font-black text-teal-400 uppercase tracking-widest hover:text-white transition-colors underline decoration-2 underline-offset-8">New Transmission</button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-teal-500 uppercase tracking-widest block ml-2">Authorized Identity</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name or Org ID" 
                    className="w-full bg-slate-900/40 border border-white/5 px-6 py-4 rounded-2xl outline-none focus:border-teal-500/30 transition-colors text-white font-medium text-sm placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-teal-500 uppercase tracking-widest block ml-2">Communication Relay</label>
                  <input 
                    required
                    type="email" 
                    placeholder="secure@org.domain" 
                    className="w-full bg-slate-900/40 border border-white/5 px-6 py-4 rounded-2xl outline-none focus:border-teal-500/30 transition-colors text-white font-medium text-sm placeholder:text-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-teal-500 uppercase tracking-widest block ml-2">Request Payload</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Describe infrastructure requirements..." 
                    className="w-full bg-slate-900/40 border border-white/5 px-6 py-4 rounded-2xl outline-none focus:border-teal-500/30 transition-colors text-white font-medium text-sm placeholder:text-white/10 resize-none"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={formState === 'sending'}
                  className="w-full py-5 bg-teal-500 text-slate-950 font-black uppercase text-[11px] tracking-[0.4em] hover:bg-teal-400 transition-all rounded-full shadow-xl flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {formState === 'sending' ? 'TRANSMITTING...' : 'INITIATE TRANSMISSION'}
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* Dynamic Image Grid */}
      {injectedImages.length > 0 && (
        <section className="py-24 md:py-32 px-4 md:px-6 bg-slate-950">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {injectedImages.map((img, idx) => (
                 <div key={idx} className="relative group liquid-glass p-2 overflow-hidden">
                   <img src={img} className="w-full h-48 md:h-64 object-cover opacity-80 rounded-[1.5rem]" />
                 </div>
               ))}
             </div>
          </div>
        </section>
      )}
    </div>
  );
};

const StatDetail: React.FC<{ id: string, label: string, value: string, desc: string, registry: any, isDesignMode: any }> = ({ id, label, value, desc, registry, isDesignMode }) => (
  <div className="p-8 md:p-10 liquid-glass text-center">
    <Editable id={`${id}-label`} registry={registry} isDesignMode={isDesignMode} className="text-[9px] uppercase font-black text-slate-500 tracking-[0.4em] mb-3 block">{label}</Editable>
    <Editable id={`${id}-value`} registry={registry} isDesignMode={isDesignMode} className="text-2xl md:text-3xl font-black text-white mb-1 block">{value}</Editable>
    <Editable id={`${id}-desc`} registry={registry} isDesignMode={isDesignMode} className="text-[10px] font-bold text-teal-500/60 uppercase block">{desc}</Editable>
  </div>
);

export default Home;