import React from 'react';
import { Lock, Fingerprint, Server, Radio, CheckCircle, ShieldAlert, Cpu, Database } from 'lucide-react';
import Editable from '../components/Editable';

interface SecurityProps {
  isDesignMode?: boolean;
  registry: Record<string, any>;
}

const Security: React.FC<SecurityProps> = ({ isDesignMode, registry }) => {
  return (
    <div className="py-24 md:py-32 px-4 md:px-6 bg-transparent min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-teal-400 mb-6 flex items-center gap-3">
            <div className="w-6 md:w-8 h-px bg-teal-400" />
            <Editable id="sec-badge" registry={registry} isDesignMode={isDesignMode}>Integrity Level 01</Editable>
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 md:mb-10 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
            <Editable id="sec-title-1" registry={registry} isDesignMode={isDesignMode}>THE ULTIMATE</Editable> <Editable id="sec-title-2" registry={registry} isDesignMode={isDesignMode} className="italic text-teal-400">CORE.</Editable>
          </h1>
          <Editable id="sec-desc" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-lg md:text-2xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Hardware-level cryptography shielding critical institutional assets from quantum-scale intrusion attempts. Our security is not an afterthought; it is baked into the silicon.
          </Editable>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-24">
          <SecurityCard id="sec-card-1" icon={<Lock className="text-teal-400" />} title="Lattice Encryption" desc="8192-bit post-quantum resilience ensuring data remains secure even against hostile UQS arrays." registry={registry} isDesignMode={isDesignMode} />
          <SecurityCard id="sec-card-2" icon={<Fingerprint className="text-white" />} title="Biometric Tunneling" desc="Neural-link verification protocols that authenticate users based on unique synaptic firing patterns." registry={registry} isDesignMode={isDesignMode} />
          <SecurityCard id="sec-card-3" icon={<ShieldAlert className="text-teal-400" />} title="Threat Prediction" desc="Real-time heuristic analysis identifying zero-day vulnerabilities before they manifest in the mesh." registry={registry} isDesignMode={isDesignMode} />
          <SecurityCard id="sec-card-4" icon={<Database className="text-white" />} title="Quantum Ledger" desc="Immutable consensus mechanism that logs every bit of neural traffic in an unhackable timeline." registry={registry} isDesignMode={isDesignMode} />
        </div>

        <section className="p-8 md:p-20 liquid-glass border border-teal-500/10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 bg-slate-950 flex items-center justify-center border border-teal-500/20 text-teal-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(45,212,191,0.2)]">
              <Cpu size={32} md:size={40} />
            </div>
            <div className="text-center md:text-left">
              <Editable id="sec-footer-h" tag="h3" registry={registry} isDesignMode={isDesignMode} className="text-xl md:text-2xl font-black uppercase mb-4 block">The Silicon Bastion</Editable>
              <Editable id="sec-footer-p" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-400 leading-relaxed block max-w-2xl font-medium mx-auto md:mx-0">
                Every GIC processor contains a dedicated Security Substrate. This physical layer is physically air-gapped from the primary compute threads, providing a "Silicon Bastion" that remains operational even during catastrophic system compromises.
              </Editable>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const SecurityCard: React.FC<{ id: string, icon: React.ReactNode; title: string; desc: string, registry: any, isDesignMode: any }> = ({ id, icon, title, desc, registry, isDesignMode }) => (
  <div className="p-10 md:p-14 liquid-glass flex flex-col sm:flex-row gap-8 md:gap-10 group">
    <div className="shrink-0 pt-1 group-hover:scale-110 transition-transform">{icon}</div>
    <div>
      <Editable id={`${id}-title`} tag="h3" registry={registry} isDesignMode={isDesignMode} className="text-lg md:text-xl font-black mb-4 md:mb-5 uppercase tracking-widest block">{title}</Editable>
      <Editable id={`${id}-desc`} tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 text-sm leading-relaxed font-medium block">{desc}</Editable>
    </div>
  </div>
);

export default Security;