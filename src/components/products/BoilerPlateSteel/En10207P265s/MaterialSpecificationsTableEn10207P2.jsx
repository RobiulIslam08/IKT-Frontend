/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTableEn10207P2() {
  const brandColor = '#06afcf';

  // 1. Properties - Chemical Requirements Data
  const chemicalData = {
    headers: ['C', 'Si', 'Mn', 'P', 'S', 'Al total'],
    values: ['0.20 max', '0.50 max', '0.50 - 1.50', '0.035 max', '0.035 max', '0.020 min']
  };

  // 2. Tensile Requirements Data
  const tensileData = [
    { thickness: 'up to 16mm', yield: '265 min', tensile: '410 - 530', elongation: '22 min' },
    { thickness: '16mm to 40mm', yield: '255 min', tensile: '410 - 530', elongation: '22 min' },
    { thickness: 'over 40mm to 60mm', yield: '245 min', tensile: '410 - 530', elongation: '22 min' }
  ];

  // 3. Impact Energy Values Data
  const impactData = [
    { direction: 'Longitudinal', minus20: '28 J min', zero: '-', plus20: '-' }
  ];

  // 4. Min. Values for Proof Strength Rp0.2 (MPa) Data
  const proofStrengthData = [
    { thickness: 'up to 60mm', t100: '194', t150: '185', t200: '176', t250: '155', t300: '140' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  const itemVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

  return (
    <motion.div 
      className="w-full px-2 py-8 md:px-8 bg-white space-y-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section 1: Properties (Chemical Requirements) */}
      <section>
        <div className="text-center mb-6">
          <motion.h1 className="text-2xl md:text-4xl font-bold text-gray-800" variants={itemVariants}>Properties</motion.h1>
          <p className="text-[10px] md:text-sm text-gray-500 font-semibold mt-2 uppercase">Chemical Requirements</p>
          <p className="text-[9px] md:text-xs text-gray-400 italic">(cast analysis, % by mass, maximum permitted unless indicated otherwise)</p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                {chemicalData.headers.map((h, i) => (
                  <th key={i} className="py-3 px-1 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr>
                {chemicalData.values.map((v, i) => (
                  <td key={i} className="py-4 border-r border-gray-50 last:border-0">{v}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 2: Tensile Requirements */}
      <section>
        <div className="text-center mb-6">
          <motion.h2 className="text-xl md:text-3xl font-bold text-gray-800" variants={itemVariants}>Tensile requirements</motion.h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[650px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-2 border-r border-white/20">Product thickness</th>
                <th className="py-3 px-2 border-r border-white/20">Yield strength MPA</th>
                <th className="py-3 px-2 border-r border-white/20">Tensile strength MPA</th>
                <th className="py-3 px-2 last:border-0">Elongation A%</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 italic">
              {tensileData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-2 border-r border-gray-100">{row.thickness}</td>
                  <td className="py-4 px-2 border-r border-gray-100 font-medium">{row.yield}</td>
                  <td className="py-4 px-2 border-r border-gray-100 font-medium">{row.tensile}</td>
                  <td className="py-4 px-2 last:border-0">{row.elongation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Impact Energy Values */}
      <section>
        <div className="text-center mb-6">
          <motion.h2 className="text-lg md:text-2xl font-bold text-gray-800" variants={itemVariants}>
            Impact energy values for the normalised condition.
          </motion.h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[400px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-4 border-r border-white/20">Direction</th>
                <th className="py-3 px-4 last:border-0">-20°C</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {impactData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 px-4 border-r border-gray-100 bg-gray-50/50 font-bold">{row.direction}</td>
                  <td className="py-4 px-4 last:border-0 font-medium">{row.minus20}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Min. Values for Proof Strength at Elevated Temperatures */}
      <section>
        <div className="text-center mb-6">
          <motion.h2 className="text-lg md:text-2xl font-bold text-gray-800 px-4 leading-snug" variants={itemVariants}>
            Min. values for proof strength Rp0,2 (MPa) at elevated temperatures.
          </motion.h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[700px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white">
                <th className="py-3 px-2 border-r border-white/20">Thickness</th>
                <th className="py-3 px-2 border-r border-white/20">100°C</th>
                <th className="py-3 px-2 border-r border-white/20">150°C</th>
                <th className="py-3 px-2 border-r border-white/20">200°C</th>
                <th className="py-3 px-2 border-r border-white/20">250°C</th>
                <th className="py-3 px-2 last:border-0">300°C</th>
              </tr>
            </thead>
            <tbody>
              {proofStrengthData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="py-4 px-2 border-r border-gray-100 font-bold bg-gray-50/30">{row.thickness}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.t100}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.t150}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.t200}</td>
                  <td className="py-4 px-2 border-r border-gray-100">{row.t250}</td>
                  <td className="py-4 px-2 last:border-0">{row.t300}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Mobile Swipe Indicator */}
      <div className="flex justify-center items-center gap-2 text-gray-400 md:hidden animate-pulse">
        <ChevronLeft size={14} />
        <span className="text-[10px] font-bold uppercase tracking-widest">Swipe to view full table data</span>
        <ChevronRight size={14} />
      </div>
    </motion.div>
  );
}