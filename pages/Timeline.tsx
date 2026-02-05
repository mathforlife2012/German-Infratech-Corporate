import React from 'react';
import { Target, Cpu, Zap, Globe, Binary, Rocket, Milestone } from 'lucide-react';
import Editable from '../components/Editable';

const timelineEvents = [
  { id: 'ev1', year: '2025', title: 'Genesis', desc: 'Founding of GIC in GIC. The core team assembles to tackle the problem of qubit decoherence.', icon: <Target className="text-teal-400" size={20} />, color: 'border-teal-400' },
  { id: 'ev2', year: '2028', title: 'Photonic Leap', desc: 'Invention of the GIC-Diamond processor. Light-based compute cores achieve stability at room temperature.', icon: <Zap className="text-white" size={20} />, color: 'border-white/20' },
  { id: 'ev3', year: '2030', title: 'Multi-Phase Sync', desc: 'The discovery of the multi-phase quantization protocol. Compute speeds increase by 100,000x over classical silicon.', icon: <Binary className="text-teal-400" size={20} />, color: 'border-teal-400' },
  { id: 'ev4', year: '2032', title: 'Neural Integration', desc: 'Deployment of the first high-bandwidth neural link for authorized institutional research partners.', icon: <Cpu className="text-white" size={20} />, color: 'border-white/10' },
  { id: 'ev5', year: '2034', title: 'Global Mesh', desc: 'Installation of 4,000+ nodes worldwide, creating a unified quantum processing fabric for the planet.', icon: <Globe className="text-teal-400" size={20} />, color: 'border-teal-400' },
  { id: 'ev6', year: '2036', title: 'UQS-2 Protocol', desc: 'Initialization of the next-generation architecture, promising sub-picosecond latency across the entire mesh.', icon: <Rocket className="text-white" size={20} />, color: 'border-white/10' },
];

interface TimelineProps {
  isDesignMode?: boolean;
  registry: Record<string, any>;
  imageRegistry: Record<string, string[]>;
}

const Timeline: React.FC<TimelineProps> = ({ isDesignMode, registry, imageRegistry }) => {
  return (
    <div className="py-24 px-6 bg-[#020617] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-24">
          <Editable id="time-badge" registry={registry} isDesignMode={isDesignMode} className="text-teal-400 font-black text-[10px] uppercase tracking-[0.7em] mb-6 block">Foundational Roadmap</Editable>
          <Editable id="time-title" tag="h1" registry={registry} isDesignMode={isDesignMode} className="text-7xl md:text-8xl font-black text-white tracking-tighter italic">GENESIS.</Editable>
          <Editable id="time-subtitle" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 max-w-2xl mx-auto mt-8 font-medium leading-loose">
            From a single laboratory in GIC to a global mesh of quantum nodes. This is the timeline of our technological ascent.
          </Editable>
        </header>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-teal-500/30" />
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-16 pl-12">
              <div className="absolute left-[-5px] top-12 w-[12px] h-[12px] bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
              <div className={`p-10 liquid-glass border-t-2 ${event.color} transition-all duration-500 group`}>
                <div className="flex justify-between items-start mb-6">
                  <Editable id={`${event.id}-year`} registry={registry} isDesignMode={isDesignMode} className="text-4xl font-black text-white mono italic block">{event.year}</Editable>
                  <div className="p-4 bg-slate-950/50 border border-white/5 text-teal-400 rounded-2xl group-hover:scale-110 transition-transform">
                    {event.icon}
                  </div>
                </div>
                <Editable id={`${event.id}-title`} tag="h3" registry={registry} isDesignMode={isDesignMode} className="text-xl font-black text-teal-400 uppercase mb-4 block tracking-widest">{event.title}</Editable>
                <Editable id={`${event.id}-desc`} tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-400 text-sm leading-relaxed block font-medium">{event.desc}</Editable>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-40 p-16 liquid-glass border-2 border-dashed border-white/10 text-center">
           <Milestone className="mx-auto text-teal-500/20 mb-8" size={64} />
           <Editable id="time-future-h" tag="h4" registry={registry} isDesignMode={isDesignMode} className="text-3xl font-black uppercase mb-6 block">The Quantum Singularity</Editable>
           <Editable id="time-future-p" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 max-w-2xl mx-auto leading-relaxed block">
             Beyond 2040, our predictions enter a period of high flux. We anticipate a complete convergence of physical and digital infrastructure.
           </Editable>
        </section>
      </div>
    </div>
  );
};

export default Timeline;