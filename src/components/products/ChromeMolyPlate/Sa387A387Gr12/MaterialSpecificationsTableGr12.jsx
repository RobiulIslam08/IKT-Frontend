/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTableGr12() {
  const brandColor = '#06afcf';

  // Section 1: Chemical Requirements Data (From image_e90351.png)
  const chemicalData = {
    headers: ['C', 'Mn', 'P', 'S', 'Si', 'Cr', 'Mo', 'V'],
    values: ['0.05 - 0.17', '0.40 - 0.65', '0.025', '0.025', '0.15 - 0.40', '0.80 - 1.15', '0.45 - 0.60', '-']
  };

  // Section 2: Tensile Requirements Data (From image_e90351.png)
  const tensileData = {
    yield: '275 min',
    tensile: '450 - 585',
    elongation: '22% min',
    reduction: '-'
  };

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
      {/* 1. Chemical Requirements */}
      <section>
        <div className="text-center mb-6">
          <motion.h1 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight" variants={itemVariants}>
            Chemical Requirements
          </motion.h1>
          <p className="text-[9px] md:text-xs text-gray-400 italic mt-2">
            (cast analysis, % by mass, maximum permitted unless indicated otherwise)
          </p>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[700px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white uppercase font-bold">
                {chemicalData.headers.map((h, i) => (
                  <th key={i} className="py-3 px-1 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr>
                <td className="py-5 border-r border-gray-50">0.05 - 0.17</td>
                <td className="py-5 border-r border-gray-50">0.40 - 0.65</td>
                <td className="py-5 border-r border-gray-50">0.025</td>
                <td className="py-5 border-r border-gray-50">0.025</td>
                <td className="py-5 border-r border-gray-50">0.15 - 0.40</td>
                <td className="py-5 border-r border-gray-50">0.80 - 1.15</td>
                <td className="py-5 border-r border-gray-50">0.45 - 0.60</td>
                <td className="py-5 last:border-0">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Tensile Requirements */}
      <section>
        <div className="text-center mb-6">
          <motion.h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight" variants={itemVariants}>
            Tensile requirements
          </motion.h2>
        </div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white font-bold uppercase">
                <th className="py-3 px-4 border-r border-white/20">Yield MPA</th>
                <th className="py-3 px-4 border-r border-white/20">Tensile MPA</th>
                <th className="py-3 px-4 border-r border-white/20">Elongation (50mm)</th>
                <th className="py-3 px-4 last:border-0">Reduc'n of area*</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr className="hover:bg-gray-50 transition-colors italic">
                <td className="py-6 px-4 border-r border-gray-100 bg-gray-50/30 font-bold">275 min</td>
                <td className="py-6 px-4 border-r border-gray-100">450 - 585</td>
                <td className="py-6 px-4 border-r border-gray-100">22% min</td>
                <td className="py-6 px-4 last:border-0">-</td>
              </tr>
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