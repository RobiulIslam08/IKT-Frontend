/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTable() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Requirements Data
  const chemicalData = {
    headers: ['C', 'Si', 'Mn', 'P', 'S', 'Al total', 'N', 'Cr', 'Cu', 'Mo', 'Nb', 'Ni', 'Ti', 'V', 'Nb+Ti+V'],
    values: ['0.16', '0.40', '0.80 - 1.50', '0.025', '0.015', '0.020 min', '0.012', '0.30', '0.30', '0.08', '0.05', '0.50', '0.03', '0.05', '0.05']
  };

  // Section 2: Tensile Requirements Data
  const tensileData = [
    { thickness: 'up to 16mm', yield: '275 min', tensile: '390 to 510', elongation: '24 min' },
    { thickness: '16mm to 40mm', yield: '265 min', tensile: '390 to 510', elongation: '24 min' },
    { thickness: 'over 40mm to 60mm', yield: '255 min', tensile: '390 to 510', elongation: '24 min' },
    { thickness: 'over 60mm to 100mm', yield: '235 min', tensile: '370 to 490', elongation: '23 min' },
    { thickness: 'over 100mm to 150mm', yield: '225 min', tensile: '360 to 480', elongation: '23 min' },
    { thickness: 'over 150mm to 250mm', yield: '215 min', tensile: '350 to 470', elongation: '23 min' }
  ];

  // Section 3: Impact Values Data
  const impactValues = [
    { direction: 'Transverse', minus20: '30 J min', zero: '40 J min', plus20: '50 J min' },
    { direction: 'Longitudinal', minus20: '45 J min', zero: '65 J min', plus20: '75 J min' }
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
      className="w-full px-2 py-8 md:px-8 bg-white space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      {/* 1. Properties - Chemical Requirements */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800">Properties</h2>
          <p className="text-[10px] md:text-sm text-gray-500 font-semibold mt-2">Chemical Requirements</p>
          <p className="text-[9px] md:text-xs text-gray-400 ">(cast analysis, % by mass, maximum permitted unless indicated otherwise)</p>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[900px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                {chemicalData.headers.map((h, i) => (
                  <th key={i} className="py-3 px-1 border-r  border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                {chemicalData.values.map((v, i) => (
                  <td key={i} className="py-4 border-r border-gray-50 text-gray-700 font-medium last:border-0">{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Tensile Requirements */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">Tensile Requirements</h2>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-4 border-r border-white/20">Product thickness</th>
                <th className="py-3 px-4 border-r border-white/20">Yield strength MPA</th>
                <th className="py-3 px-4 border-r border-white/20">Tensile strength MPA</th>
                <th className="py-3 px-4 last:border-0">Elongation A%</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {tensileData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                  <td className="py-4 px-4 border-r border-gray-100 font-medium">{row.thickness}</td>
                  <td className="py-4 px-4 border-r border-gray-100 font-medium">{row.yield}</td>
                  <td className="py-4 px-4 border-r border-gray-100 font-medium">{row.tensile}</td>
                  <td className="py-4 px-4 last:border-0 font-medium">{row.elongation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. VALUES - Impact Energy Values */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800 uppercase">VALUES:</h2>
          <p className="text-[10px] md:text-sm text-gray-500 ">Impact energy values for the normalised condition.</p>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[500px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-4 border-r border-white/20 w-1/4">Direction</th>
                <th className="py-3 px-4 border-r border-white/20">-20°C</th>
                <th className="py-3 px-4 border-r border-white/20">0°C</th>
                <th className="py-3 px-4 last:border-0">+20°C</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              {impactValues.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 px-4 border-r border-gray-100 bg-gray-50/50">{row.direction}</td>
                  <td className="py-4 px-4 border-r border-gray-100">{row.minus20}</td>
                  <td className="py-4 px-4 border-r border-gray-100">{row.zero}</td>
                  <td className="py-4 px-4 last:border-0">{row.plus20}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Indicator */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase">Swipe to view full specification</span>
        <ChevronRight size={14} />
      </div>

    </motion.div>
  );
}