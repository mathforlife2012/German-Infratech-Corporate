
import React, { useState } from 'react';
import { Cpu, Shield, Activity, Terminal, Clock, Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 glass-card border-b border-teal-500/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 md:gap-4 cursor-pointer group shrink-0" 
          onClick={() => handleNavigate('home')}
        >
          <div className="w-10 h-10 md:w-11 md:h-11 bg-slate-950 border border-teal-500/20 rounded-sm flex items-center justify-center transition-all duration-500 group-hover:border-teal-400 turquoise-glow">
            <Cpu className="text-white group-hover:text-teal-400 transition-colors" size={18} />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl md:text-2xl tracking-tighter leading-none italic">GIC</span>
            <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] text-teal-400 font-black">Infratech Corporate</span>
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <NavButton active={currentPage === 'specs'} icon={<Shield size={14} />} label="Security" onClick={() => handleNavigate('specs')} />
          <NavButton active={currentPage === 'analytics'} icon={<Activity size={14} />} label="Neural Telemetry" onClick={() => handleNavigate('analytics')} />
          <NavButton active={currentPage === 'terminal'} icon={<Terminal size={14} />} label="Neural Link" onClick={() => handleNavigate('terminal')} />
          <NavButton active={currentPage === 'timeline'} icon={<Clock size={14} />} label="Archives" onClick={() => handleNavigate('timeline')} />
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-teal-400 p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-teal-500/20 shadow-2xl z-40 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-6 bg-slate-950/95 backdrop-blur-xl">
            <NavButton mobile active={currentPage === 'specs'} icon={<Shield size={16} />} label="Security" onClick={() => handleNavigate('specs')} />
            <NavButton mobile active={currentPage === 'analytics'} icon={<Activity size={16} />} label="Neural Telemetry" onClick={() => handleNavigate('analytics')} />
            <NavButton mobile active={currentPage === 'terminal'} icon={<Terminal size={16} />} label="Neural Link" onClick={() => handleNavigate('terminal')} />
            <NavButton mobile active={currentPage === 'timeline'} icon={<Clock size={16} />} label="Archives" onClick={() => handleNavigate('timeline')} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavButton: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void, active: boolean, mobile?: boolean }> = ({ icon, label, onClick, active, mobile }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black transition-all hover:text-teal-400 py-2 ${
      active ? 'text-teal-400' : 'text-slate-500'
    } ${!mobile ? 'border-b-2 ' + (active ? 'border-teal-400' : 'border-transparent') : ''}`}
  >
    <span className={active ? 'text-teal-400' : 'text-slate-600'}>{icon}</span>
    {label}
  </button>
);

export default Navbar;
