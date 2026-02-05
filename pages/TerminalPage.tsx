
import React from 'react';
import AIAssistant from '../components/AIAssistant';
import Editable from '../components/Editable';

interface TerminalPageProps {
  isDesignMode?: boolean;
  registry: Record<string, any>;
}

const TerminalPage: React.FC<TerminalPageProps> = ({ isDesignMode, registry }) => {
  return (
    <div className="bg-black min-h-[calc(100vh-80px)] flex flex-col items-center justify-start py-20 px-6">
      <div className="w-full max-w-5xl">
        <div className="mb-20">
          <Editable id="term-intro-label" registry={registry} isDesignMode={isDesignMode} className="text-teal-400 font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">System Command</Editable>
          <Editable id="term-intro-title" tag="h1" registry={registry} isDesignMode={isDesignMode} className="text-4xl font-black mb-6 uppercase block tracking-tighter">Authorized Interface.</Editable>
          <Editable id="term-intro-desc" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 max-w-2xl leading-relaxed block font-medium">
            You are currently connected to the GIC-Quantum Relay. Use the command line below to communicate directly with Klaus, our primary neural interface. All queries are analyzed for integrity and logged to the permanent record.
          </Editable>
        </div>
        
        <AIAssistant isDesignMode={isDesignMode} registry={registry} />
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-40">
           <div className="p-6 border border-teal-500/10">
              <Editable id="term-tip-1" registry={registry} isDesignMode={isDesignMode} className="text-[9px] font-black uppercase tracking-widest text-teal-400 block mb-2">Tip: Precision</Editable>
              <Editable id="term-tip-1-text" registry={registry} isDesignMode={isDesignMode} className="text-[10px] text-slate-500 leading-relaxed block">Klaus responds best to technical queries with clear engineering parameters.</Editable>
           </div>
           <div className="p-6 border border-teal-500/10">
              <Editable id="term-tip-2" registry={registry} isDesignMode={isDesignMode} className="text-[9px] font-black uppercase tracking-widest text-teal-400 block mb-2">Tip: Security</Editable>
              <Editable id="term-tip-2-text" registry={registry} isDesignMode={isDesignMode} className="text-[10px] text-slate-500 leading-relaxed block">Avoid requesting classified operational keys or node locations.</Editable>
           </div>
           <div className="p-6 border border-teal-500/10">
              <Editable id="term-tip-3" registry={registry} isDesignMode={isDesignMode} className="text-[9px] font-black uppercase tracking-widest text-teal-400 block mb-2">Tip: Latency</Editable>
              <Editable id="term-tip-3-text" registry={registry} isDesignMode={isDesignMode} className="text-[10px] text-slate-500 leading-relaxed block">Picosecond response times are standard for all authenticated sessions.</Editable>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;
