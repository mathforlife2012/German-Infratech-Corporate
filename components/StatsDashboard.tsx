import React from 'react';
import { 
  RadialBarChart, 
  RadialBar, 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer, 
  Tooltip,
  Legend
} from 'recharts';

const loadData = [
  { name: 'Core Alpha', value: 85, fill: '#2dd4bf' },
  { name: 'Core Beta', value: 72, fill: '#14b8a6' },
  { name: 'Core Gamma', value: 64, fill: '#0d9488' },
  { name: 'Core Delta', value: 45, fill: '#1e293b' },
];

const fluxData = [
  { subject: 'Stability', A: 120, B: 110, fullMark: 150 },
  { subject: 'Latency', A: 98, B: 130, fullMark: 150 },
  { subject: 'Throughput', A: 86, B: 130, fullMark: 150 },
  { subject: 'Coherency', A: 99, B: 100, fullMark: 150 },
  { subject: 'Entanglement', A: 85, B: 90, fullMark: 150 },
  { subject: 'Thermal', A: 65, B: 85, fullMark: 150 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#020617] border border-teal-500/20 p-3 shadow-2xl backdrop-blur-md">
        <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest">
          {payload[0].name || payload[0].payload.subject}: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export default function StatsDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* RADIAL LOAD MONITOR */}
      <div className="p-10 bg-[#050b1a] border border-teal-500/10 rounded-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
           <div className="w-8 h-8 border-t-2 border-r-2 border-teal-400/20" />
        </div>
        
        <h3 className="text-[10px] font-black text-teal-400 uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          Quantum Core Load
        </h3>
        
        <div className="h-[350px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="20%" 
              outerRadius="90%" 
              barSize={15} 
              data={loadData}
              startAngle={180} 
              endAngle={-180}
            >
              <RadialBar
                label={{ position: 'insideStart', fill: '#fff', fontSize: 8, fontWeight: 'bold' }}
                background={{ fill: 'rgba(255,255,255,0.03)' }}
                dataKey="value"
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                iconSize={10} 
                layout="vertical" 
                verticalAlign="middle" 
                align="right" 
                wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.1em' }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RADAR FLUX ANALYSIS */}
      <div className="p-10 bg-[#050b1a] border border-teal-500/10 rounded-sm relative overflow-hidden group">
        <div className="absolute top-0 left-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
           <div className="w-8 h-8 border-t-2 border-l-2 border-white/20" />
        </div>

        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Neural Flux Dynamics
        </h3>

        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={fluxData}>
              <PolarGrid stroke="#1e293b" />
              <PolarAngleAxis 
                dataKey="subject" 
                stroke="#475569" 
                fontSize={10} 
                tick={{ fill: '#94a3b8', fontSize: 9, fontWeight: 'bold' }}
              />
              <Radar
                name="Primary"
                dataKey="A"
                stroke="#2dd4bf"
                fill="#2dd4bf"
                fillOpacity={0.4}
              />
              <Radar
                name="Secondary"
                dataKey="B"
                stroke="#ffffff"
                fill="#ffffff"
                fillOpacity={0.1}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}