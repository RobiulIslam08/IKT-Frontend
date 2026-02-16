/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTableEn100282() {
  const brandColor = '#06afcf';

  // Section 1: Properties - Chemical Requirements
  const chemicalData = {
    headers: ['C', 'Si', 'Mn', 'P', 'S', 'Cr', 'Cu', 'Mo', 'Ni'],
    values: ['0.25 max', '0.10 - 0.35', '0.60 - 1.40', '0.030 max', '0.030 max', '0.25 max', '0.30 max', '0.10 max', '0.30 max']
  };

  // Section 2: Tensile Requirements
  const tensileData = [
    { thickness: 'up to 16mm', yield: '255', tensile: '410 - 530', elongation: '22' },
    { thickness: '16mm to 40mm', yield: '255', tensile: '410 - 530', elongation: '22' },
    { thickness: 'over 40mm to 60mm', yield: '245', tensile: '410 - 530', elongation: '22' },
    { thickness: 'over 60 to 100mm', yield: '215', tensile: '410 - 530', elongation: '22' },
    { thickness: 'over 100mm to 150mm', yield: '200', tensile: '400 - 530', elongation: '22' },
    { thickness: 'over 150mm to 250mm', yield: '185', tensile: '390 - 530', elongation: '22' }
  ];

  // Section 3: Impact Energy Values
  const impactData = [
    { direction: 'Transverse', minus20: '27 J min', zero: '34 J min', plus20: '40 J min' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Part 1: Properties - Chemical Requirements */}
      <section>
        <div className="text-center mb-6">
          <motion.h1 className="text-2xl md:text-4xl font-bold text-gray-800" variants={itemVariants}>Properties</motion.h1>
          <p className="text-[10px] md:text-sm text-gray-500 font-semibold mt-2">Chemical Requirements</p>
          <p className="text-[9px] md:text-xs text-gray-400 italic">(cast analysis, % by mass, maximum permitted unless indicated otherwise)</p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[800px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                {chemicalData.headers.map((h, i) => (
                  <th key={i} className="py-3 px-1 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                {chemicalData.values.map((v, i) => (
                  <td key={i} className="py-4 border-r border-gray-100 last:border-0">{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Part 2: Tensile Requirements */}
      <section>
        <div className="text-center mb-6">
          <motion.h2 className="text-xl md:text-3xl font-bold text-gray-800" variants={itemVariants}>Tensile requirements</motion.h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[700px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-2 border-r border-white/20">Product thickness</th>
                <th className="py-3 px-2 border-r border-white/20">Yield strength (MPA) minimum</th>
                <th className="py-3 px-2 border-r border-white/20">Tensile strength (MPA)</th>
                <th className="py-3 px-2 last:border-0">Elongation A% minimum</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tensileData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-2 border-r border-gray-100 italic">{row.thickness}</td>
                  <td className="py-4 px-2 border-r border-gray-100 font-medium">{row.yield}</td>
                  <td className="py-4 px-2 border-r border-gray-100 font-medium">{row.tensile}</td>
                  <td className="py-4 px-2 last:border-0">{row.elongation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Part 3: Impact Energy Values */}
      <section>
        <div className="text-center mb-6">
          <motion.h2 className="text-lg md:text-2xl font-bold text-gray-800" variants={itemVariants}>
            Impact energy values for the normalised condition.
          </motion.h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[500px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-4 border-r border-white/20">Direction</th>
                <th className="py-3 px-4 border-r border-white/20">-20°C</th>
                <th className="py-3 px-4 border-r border-white/20">0°C</th>
                <th className="py-3 px-4 last:border-0">+20°C</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {impactData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 px-4 border-r border-gray-100 bg-gray-50/50 font-bold">{row.direction}</td>
                  <td className="py-4 px-4 border-r border-gray-100">{row.minus20}</td>
                  <td className="py-4 px-4 border-r border-gray-100">{row.zero}</td>
                  <td className="py-4 px-4 last:border-0 font-medium">{row.plus20}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Swipe Indicator */}
      <div className="flex justify-center items-center gap-2 mt-4 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view all specifications</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}