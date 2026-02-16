/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsEn100282() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Requirements Data (From image_e8a1d6.png)
  const chemicalData = {
    elements: ['C', 'Si', 'Mn', 'P', 'S', 'N', 'Cr', 'Cu', 'Mo', 'Nb', 'Ni', 'V'],
    grades: [
      { name: '16Mo3', vals: ['0.12 - 0.20', '0.35', '0.40 - 0.90', '0.025', '0.010', '0.012', '0.30', '0.30', '0.25 - 0.35', '-', '0.30', '-'] },
      { name: '13CrMo4-5', vals: ['0.08 - 0.18', '0.35', '0.40 - 1.00', '0.025', '0.010', '0.012', '0.70 - 1.15', '0.30', '0.40 - 0.60', '-', '-', '-'] },
      { name: '10CrMo9-10', vals: ['0.08 - 0.14', '0.50', '0.40 - 0.80', '0.025', '0.010', '0.012', '2.00 - 2.50', '0.30', '0.90 - 1.10', '-', '-', '-'] },
      { name: 'X10CrMoVNb9-1', vals: ['0.08 - 0.12', '0.50', '0.30 - 0.60', '0.020', '0.005', '0.03 - 0.07', '8.00 - 9.50', '0.30', '0.85 - 1.05', '0.06 - 0.10', '0.30', '0.18 - 0.25'] }
    ]
  };

  // Section 2: Mechanical Properties Data (From image_e8a1d6.png)
  const mechanicalData = [
    { grade: '16Mo3', yield: '270', tensile: '440 - 590', elong: '22', impact: '31' },
    { grade: '13CrMo4-5', yield: '290', tensile: '450 - 600', elong: '19', impact: '31' },
    { grade: '10CrMo9-10', yield: '280', tensile: '480 - 630', elong: '18', impact: '31' },
    { grade: 'X10CrMoVNb9-1', yield: '450', tensile: '650 - 850', elong: '15', impact: '40' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Properties - Chemical Requirements */}
      <section>
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Properties</h1>
          <p className="text-[10px] md:text-sm text-gray-500 font-bold mt-2 uppercase">Chemical Requirements</p>
          <p className="text-[9px] md:text-xs text-gray-400 italic">(ladle analysis, % maximum permitted unless indicated otherwise)</p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[1000px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-2 border-r border-white/20">Element</th>
                {chemicalData.grades.map((g, i) => (
                  <th key={i} className="py-3 px-2 border-r border-white/20 last:border-0">{g.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {chemicalData.elements.map((el, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-3 border-r border-gray-100 font-bold bg-gray-50/30">{el}</td>
                  {chemicalData.grades.map((g, colIndex) => (
                    <td key={colIndex} className="py-3 border-r border-gray-100 last:border-0">
                      {g.vals[rowIndex]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Mechanical Properties */}
      <section>
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">Mechanical Properties</h2>
          <p className="text-[9px] md:text-xs text-gray-400 italic mt-1">(for thicknesses {"<"} 16 mm up to 40 mm, transverse direction)</p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[700px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white font-bold uppercase">
                <th className="py-3 px-4 border-r border-white/20">Steel Grade</th>
                <th className="py-3 px-4 border-r border-white/20">Yield (MPa) min</th>
                <th className="py-3 px-4 border-r border-white/20">Tensile (MPa)</th>
                <th className="py-3 px-4 border-r border-white/20">Elong. A (%) min</th>
                <th className="py-3 px-4 last:border-0">Impact (J) min</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium italic">
              {mechanicalData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="py-4 px-4 border-r border-gray-100 font-bold bg-gray-50/20">{row.grade}</td>
                  <td className="py-4 px-4 border-r border-gray-100">{row.yield}</td>
                  <td className="py-4 px-4 border-r border-gray-100">{row.tensile}</td>
                  <td className="py-4 px-4 border-r border-gray-100">{row.elong}</td>
                  <td className="py-4 px-4 last:border-0 font-bold text-primary">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Swipe Indicator */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view full specification</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}