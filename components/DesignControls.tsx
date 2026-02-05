import React, { useState, useEffect } from 'react';
import { Type, Bold, Italic, Palette, Plus, Trash2, Upload, Image as ImageIcon } from 'lucide-react';

interface ToolbarProps {
  target: HTMLElement | null;
  onClose: () => void;
  onStyleChange: (id: string, property: string, value: string) => void;
}

export const DesignToolbar: React.FC<ToolbarProps> = ({ target, onClose, onStyleChange }) => {
  if (!target) return null;

  const [rect, setRect] = useState<DOMRect | null>(null);
  const targetId = target.getAttribute('data-gic-id') || '';

  useEffect(() => {
    const updateRect = () => setRect(target.getBoundingClientRect());
    updateRect();
    window.addEventListener('scroll', updateRect);
    return () => window.removeEventListener('scroll', updateRect);
  }, [target]);

  const updateStyle = (property: string, value: string) => {
    if (target) {
      // @ts-ignore
      target.style[property] = value;
      if (targetId) onStyleChange(targetId, property, value);
    }
  };

  if (!rect) return null;

  return (
    <div 
      className="fixed z-[100] bg-slate-950 border border-teal-500/30 p-2 shadow-[0_0_30px_rgba(0,0,0,0.8)] flex gap-2 items-center rounded-sm transition-all duration-300 backdrop-blur-xl"
      style={{ 
        top: `${rect.top + window.scrollY - 70}px`, 
        left: `${rect.left + window.scrollX}px`,
      }}
    >
      <div className="flex items-center gap-1 border-r border-teal-500/20 pr-2">
        <button onClick={() => {
          const currentSize = parseInt(window.getComputedStyle(target).fontSize);
          updateStyle('fontSize', `${currentSize + 2}px`);
        }} className="p-1.5 hover:bg-teal-500/20 text-teal-400 rounded-sm"><Plus size={14} /></button>
        <span className="text-[9px] font-black text-white/40 w-8 text-center uppercase">Size</span>
        <button onClick={() => {
          const currentSize = parseInt(window.getComputedStyle(target).fontSize);
          updateStyle('fontSize', `${currentSize - 2}px`);
        }} className="p-1.5 hover:bg-teal-500/20 text-teal-400 rounded-sm font-bold"> - </button>
      </div>

      <button 
        onClick={() => {
          const currentWeight = window.getComputedStyle(target).fontWeight;
          updateStyle('fontWeight', currentWeight === '900' || currentWeight === 'bold' ? '300' : '900');
        }}
        className="p-2 hover:bg-teal-500/20 text-teal-400 rounded-sm"
      ><Bold size={14} /></button>

      <button 
        onClick={() => {
          const currentStyle = window.getComputedStyle(target).fontStyle;
          updateStyle('fontStyle', currentStyle === 'italic' ? 'normal' : 'italic');
        }}
        className="p-2 hover:bg-teal-500/20 text-teal-400 rounded-sm"
      ><Italic size={14} /></button>

      <div className="flex gap-1 pl-1">
        <button onClick={() => updateStyle('color', '#2dd4bf')} className="w-4 h-4 rounded-full bg-teal-400 border border-white/20" title="GIC Turquoise" />
        <button onClick={() => updateStyle('color', '#ffffff')} className="w-4 h-4 rounded-full bg-white border border-white/20" title="Pure White" />
        <button onClick={() => updateStyle('color', '#94a3b8')} className="w-4 h-4 rounded-full bg-slate-400 border border-white/20" title="Industrial Slate" />
      </div>
      
      <button onClick={onClose} className="ml-2 text-[8px] font-black text-white/20 uppercase hover:text-white transition-colors">Close</button>
    </div>
  );
};

export const AddElementMenu: React.FC<{ onAddImage: (base64: string) => void }> = ({ onAddImage }) => {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onAddImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center gap-4 p-6 border-2 border-dashed border-teal-500/20 bg-teal-500/5 rounded-sm group hover:border-teal-400/50 transition-all cursor-pointer relative overflow-hidden">
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFile}
        className="absolute inset-0 opacity-0 cursor-pointer z-10"
      />
      <div className="w-12 h-12 flex items-center justify-center bg-slate-950 border border-teal-500/20 text-teal-400 group-hover:scale-110 transition-transform">
        <ImageIcon size={20} />
      </div>
      <div>
        <h4 className="text-xs font-black uppercase tracking-widest text-white mb-1">Inject Visual Component</h4>
        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Upload local JPG/PNG to the GIC Media Cluster</p>
      </div>
    </div>
  );
};
