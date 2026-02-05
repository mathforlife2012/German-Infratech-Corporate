import React from 'react';
import StatsDashboard from '../components/StatsDashboard';
import { Activity, Database, Server, Zap } from 'lucide-react';
import Editable from '../components/Editable';

interface AnalyticsProps {
  isDesignMode?: boolean;
  registry: Record<string, any>;
  imageRegistry: Record<string, string[]>;
}

const Analytics: React.FC<AnalyticsProps> = ({ isDesignMode, registry, imageRegistry }) => {
  const injectedImages = imageRegistry['analytics'] || [];

  return (
    <div className="bg-[#020617] min-h-screen py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <header className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <Editable id="ana-badge" tag="h2" registry={registry} isDesignMode={isDesignMode} className="text-teal-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6 block">Real-Time Telemetry</Editable>
            <Editable id="ana-title" tag="h1" registry={registry} isDesignMode={isDesignMode} className="text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter italic uppercase">LIVE OPS.</Editable>
            <Editable id="ana-desc" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Global monitoring of the GIC Cluster and its distributed nodes. Operational data is updated every 12ms to ensure peak performance.
            </Editable>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-4 liquid-glass border border-teal-500/10 flex items-center gap-4">
               <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
               <Editable id="ana-status-pill" registry={registry} isDesignMode={isDesignMode} className="text-[10px] font-black uppercase tracking-widest text-teal-400">System Nominal</Editable>
            </div>
          </div>
        </header>

        <StatsDashboard />

        <div className="mt-16 md:mt-24 mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            <div className="p-10 liquid-glass">
              <Editable id="ana-sec-title-1" tag="h3" registry={registry} isDesignMode={isDesignMode} className="text-xl md:text-2xl font-black uppercase mb-8 block">Resource Allocation</Editable>
              <Editable id="ana-sec-text-1" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 leading-loose block mb-10 font-medium">
                Current neural flux is distributed across institutional research, financial modeling, and the global security mesh. The UQS-1 automatically prioritizes tasks based on the urgency of the computational request.
              </Editable>
              <div className="space-y-6">
                <AllocationRow label="Research" percent="45%" registry={registry} isDesignMode={isDesignMode} id="row1" />
                <AllocationRow label="Governance" percent="20%" registry={registry} isDesignMode={isDesignMode} id="row2" />
                <AllocationRow label="Security" percent="35%" registry={registry} isDesignMode={isDesignMode} id="row3" />
              </div>
            </div>
            <div className="liquid-glass p-10 md:p-12 border border-teal-500/10">
               <Editable id="ana-sec-title-2" tag="h3" registry={registry} isDesignMode={isDesignMode} className="text-xl font-black uppercase mb-8 block">Core Temperature</Editable>
               <Editable id="ana-sec-text-2" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 text-sm leading-relaxed block font-medium mb-12">
                 Stable operation achieved at Sub-Zero neural link points. Active cooling arrays are currently operating at only 12% capacity thanks to GIC-Diamond efficiency.
               </Editable>
               <div className="flex items-end gap-3 h-32">
                 {[40, 60, 45, 70, 55, 40, 30, 45, 50, 65].map((h, i) => (
                   <div key={i} className="flex-1 bg-teal-500/20 hover:bg-teal-400 transition-all cursor-crosshair rounded-full" style={{ height: `${h}%` }} />
                 ))}
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 md:mt-16">
          <SmallStat id="ana-sstat-1" icon={<Activity size={16} />} label="Field Stability" value="100.00%" color="text-white" registry={registry} isDesignMode={isDesignMode} />
          <SmallStat id="ana-sstat-2" icon={<Database size={16} />} label="Quantum Cache" value="12.4 TB" color="text-teal-400" registry={registry} isDesignMode={isDesignMode} />
          <SmallStat id="ana-sstat-3" icon={<Zap size={16} />} label="Phase Offset" value="0.002ns" color="text-white" registry={registry} isDesignMode={isDesignMode} />
          <SmallStat id="ana-sstat-4" icon={<Server size={16} />} label="Node Latency" value="0.8ms" color="text-teal-400" registry={registry} isDesignMode={isDesignMode} />
        </div>
      </div>
    </div>
  );
};

const AllocationRow: React.FC<{ label: string, percent: string, registry: any, isDesignMode: any, id: string }> = ({ label, percent, registry, isDesignMode, id }) => (
  <div className="flex items-center justify-between border-b border-white/5 pb-4">
    <Editable id={`ana-alloc-l-${id}`} registry={registry} isDesignMode={isDesignMode} className="text-[10px] uppercase font-black tracking-widest text-slate-400">{label}</Editable>
    <Editable id={`ana-alloc-v-${id}`} registry={registry} isDesignMode={isDesignMode} className="text-xs font-black text-teal-400">{percent}</Editable>
  </div>
);

const SmallStat: React.FC<{ id: string, icon: React.ReactNode, label: string, value: string, color: string, registry: any, isDesignMode: any }> = ({ id, icon, label, value, color, registry, isDesignMode }) => (
  <div className="p-8 md:p-10 liquid-glass hover:bg-teal-900/10 transition-colors">
    <div className="flex items-center gap-3 mb-4 text-slate-600">
      {icon}
      <Editable id={`${id}-label`} registry={registry} isDesignMode={isDesignMode} className="text-[10px] font-black uppercase tracking-widest">{label}</Editable>
    </div>
    <Editable id={`${id}-value`} registry={registry} isDesignMode={isDesignMode} className={`text-2xl md:text-3xl font-black tracking-tighter ${color} block`}>{value}</Editable>
  </div>
);

export default Analytics;