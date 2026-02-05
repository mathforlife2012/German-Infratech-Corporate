
import React from 'react';
import { Cpu, Github, Twitter, Linkedin, MapPin } from 'lucide-react';
import Editable from './Editable';

interface FooterProps {
  isDesignMode?: boolean;
  registry: Record<string, any>;
}

const Footer: React.FC<FooterProps> = ({ isDesignMode, registry }) => {
  return (
    <footer className="border-t border-teal-500/10 bg-[#020617] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-teal-500 text-slate-950 rounded-sm flex items-center justify-center">
                <Cpu size={22} />
              </div>
              <Editable id="foot-logo-text" registry={registry} isDesignMode={isDesignMode} className="font-black text-xl tracking-tighter uppercase italic">GIC.</Editable>
            </div>
            <Editable id="foot-motto" tag="p" registry={registry} isDesignMode={isDesignMode} className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
              Architecting the hardware of tomorrow. GIC-based precision engineering for the quantum age.
            </Editable>
            <div className="flex gap-5">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
            </div>
          </div>
          
          <div>
            <Editable id="foot-h1" tag="h4" registry={registry} isDesignMode={isDesignMode} className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.5em] block">Engineering</Editable>
            <ul className="space-y-5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <li><Editable id="foot-link-1" registry={registry} isDesignMode={isDesignMode} className="hover:text-teal-400 transition-colors">UQS-1 Architecture</Editable></li>
              <li><Editable id="foot-link-2" registry={registry} isDesignMode={isDesignMode} className="hover:text-teal-400 transition-colors">Diamond Matrix</Editable></li>
              <li><Editable id="foot-link-3" registry={registry} isDesignMode={isDesignMode} className="hover:text-teal-400 transition-colors">Multi-Phase Ops</Editable></li>
            </ul>
          </div>

          <div>
            <Editable id="foot-h2" tag="h4" registry={registry} isDesignMode={isDesignMode} className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.5em] block">Governance</Editable>
            <ul className="space-y-5 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <li><Editable id="foot-link-4" registry={registry} isDesignMode={isDesignMode} className="hover:text-teal-400 transition-colors">Privacy Ops</Editable></li>
              <li><Editable id="foot-link-5" registry={registry} isDesignMode={isDesignMode} className="hover:text-teal-400 transition-colors">EU Integrity</Editable></li>
              <li><Editable id="foot-link-6" registry={registry} isDesignMode={isDesignMode} className="hover:text-teal-400 transition-colors">Regulatory</Editable></li>
            </ul>
          </div>

          <div>
            <Editable id="foot-h3" tag="h4" registry={registry} isDesignMode={isDesignMode} className="font-black text-white mb-8 uppercase text-[10px] tracking-[0.5em] block">Headquarters</Editable>
            <div className="flex items-start gap-4 text-[13px] text-slate-500 font-medium leading-relaxed">
              <MapPin size={18} className="shrink-0 mt-0.5 text-teal-400" />
              <Editable id="foot-address" tag="address" registry={registry} isDesignMode={isDesignMode} className="not-italic block">
                Zeil 102-106<br />
                60313 GIC am Main<br />
                Germany
              </Editable>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-teal-500/10 gap-6">
          <Editable id="foot-copy" registry={registry} isDesignMode={isDesignMode} className="text-slate-600 text-[9px] uppercase font-black tracking-[0.5em]">
            © 2025 GERMAN INFRATECH CORPORATE. STABLE STATE REACHED.
          </Editable>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <a href="#" className="w-11 h-11 flex items-center justify-center rounded-sm border border-teal-500/10 text-slate-500 hover:border-teal-400 hover:text-teal-400 transition-all bg-white/[0.02]">
    {icon}
  </a>
);

export default Footer;
