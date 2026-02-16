/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function P355Specifications() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Analysis Data
  const chemicalData = [
    { grade: 'P355NL1', c: '0.18', si: '0.50', mn: '1.10 - 1.70', p: '0.025', s: '0.008', al: '0.020 min', n: '0.012', cr: '0.3', cu: '0.3', mo: '0.08', nb: '0.05', ni: '0.50', ti: '0.03', v: '0.10', nbtiv: '0.12' },
    { grade: 'P355NL2', c: '0.18', si: '0.50', mn: '1.10 - 1.70', p: '0.020', s: '0.005', al: '0.020 min', n: '0.012', cr: '0.30', cu: '0.30', mo: '0.08', nb: '0.05', ni: '0.50', ti: '0.03', v: '0.10', nbtiv: '0.12' }
  ];

  // Section 2: Tensile Requirements Data
  const tensileData = [
    { thickness: 'up to 16mm', yield: '355', tensile: '490 - 630', elongation: '22 min' },
    { thickness: '16mm to 40mm', yield: '345', tensile: '490 - 630', elongation: '22 min' },
    { thickness: 'over 40mm to 60mm', yield: '335', tensile: '490 - 630', elongation: '22 min' },
    { thickness: 'over 60mm to 100mm', yield: '315', tensile: '470 - 610', elongation: '21 min' },
    { thickness: 'over 100mm to 150mm', yield: '305', tensile: '460 - 600', elongation: '21 min' },
    { thickness: 'over 150mm to 250mm', yield: '295', tensile: '450 - 590', elongation: '21 min' }
  ];

  // Section 3: Impact Values Data
  const impactData = [
    { grade: 'P355NL1', direction: 'Transverse', m50: '-', m40: '27 J min', m20: '31 J min', zero: '40 J min', plus20: '45 J min' },
    { grade: 'P355NL2', direction: 'Transverse', m50: '27 J min', m40: '30 J min', m20: '40 J min', zero: '50 J min', plus20: '70 J min' },
    { grade: 'P355NL1', direction: 'Longitudinal', m50: '30 J min', m40: '40 J min', m20: '50 J min', zero: '70 J min', plus20: '80 J min' },
    { grade: 'P355NL2', direction: 'Longitudinal', m50: '40 J min', m40: '45 J min', m20: '55 J min', zero: '75 J min', plus20: '85 J min' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* Part 1: Properties (Chemical Analysis) */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">Properties</h2>
          <p className="text-[10px] md:text-sm text-gray-500 italic">Chemical analysis (cast analysis, % by mass)</p>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[1000px] text-center text-[9px] md:text-[11px]">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white uppercase">
                {['Grade', 'C', 'Si', 'Mn', 'P', 'S', 'Al total', 'N', 'Cr', 'Cu', 'Mo', 'Nb', 'Ni', 'Ti', 'V', 'Nb+Ti+V'].map((h) => (
                  <th key={h} className="py-3 px-1 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {chemicalData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0">
                  <td className="py-4 font-bold border-r border-gray-50">{row.grade}</td>
                  <td className="py-4 border-r border-gray-50">{row.c}</td>
                  <td className="py-4 border-r border-gray-50">{row.si}</td>
                  <td className="py-4 border-r border-gray-50">{row.mn}</td>
                  <td className="py-4 border-r border-gray-50">{row.p}</td>
                  <td className="py-4 border-r border-gray-50">{row.s}</td>
                  <td className="py-4 border-r border-gray-50">{row.al}</td>
                  <td className="py-4 border-r border-gray-50">{row.n}</td>
                  <td className="py-4 border-r border-gray-50">{row.cr}</td>
                  <td className="py-4 border-r border-gray-50">{row.cu}</td>
                  <td className="py-4 border-r border-gray-50">{row.mo}</td>
                  <td className="py-4 border-r border-gray-50">{row.nb}</td>
                  <td className="py-4 border-r border-gray-50">{row.ni}</td>
                  <td className="py-4 border-r border-gray-50">{row.ti}</td>
                  <td className="py-4 border-r border-gray-50">{row.v}</td>
                  <td className="py-4 last:border-0">{row.nbtiv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Part 2: Tensile Requirements */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">Tensile requirements</h2>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-4 border-r border-white/20">Product thickness</th>
                <th className="py-3 px-4 border-r border-white/20">Yield strength (min) MPA</th>
                <th className="py-3 px-4 border-r border-white/20">Tensile strength MPA</th>
                <th className="py-3 px-4 last:border-0">Elongation A%</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tensileData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                  <td className="py-4 px-4 border-r border-gray-50 italic">{row.thickness}</td>
                  <td className="py-4 px-4 border-r border-gray-50 font-medium">{row.yield}</td>
                  <td className="py-4 px-4 border-r border-gray-50 font-medium">{row.tensile}</td>
                  <td className="py-4 px-4 last:border-0 font-medium">{row.elongation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Part 3: Impact Values */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">Impact values</h2>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[700px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-2 border-r border-white/20">Steel grade</th>
                <th className="py-3 px-2 border-r border-white/20">Direction</th>
                <th className="py-3 px-2 border-r border-white/20">-50°C</th>
                <th className="py-3 px-2 border-r border-white/20">-40°C</th>
                <th className="py-3 px-2 border-r border-white/20">-20°C</th>
                <th className="py-3 px-2 border-r border-white/20">0°C</th>
                <th className="py-3 px-2 last:border-0">+20°C</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {impactData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="py-4 px-2 border-r border-gray-100 font-bold">{row.grade}</td>
                  <td className="py-4 px-2 border-r border-gray-100 italic">{row.direction}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.m50}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.m40}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.m20}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.zero}</td>
                  <td className="py-4 px-2 last:border-0">{row.plus20}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Indicator */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-tight">Swipe to view full data</span>
        <ChevronRight size={14} />
      </div>

    </motion.div>
  );
}