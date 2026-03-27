/* eslint-disable no-unused-vars */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MaterialSpecificationsTable460nh() {
  const brandColor = '#06afcf';

  // Animation Variants
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
          <p className="text-[10px] md:text-sm text-gray-500 font-semibold mt-2 uppercase">Chemical Requirements</p>
          <p className="text-[9px] md:text-xs text-gray-400 ">(cast analysis, % by mass, maximum permitted unless indicated otherwise)</p>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm">
          <table className="w-full min-w-[1000px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white uppercase font-bold">
                {['C', 'Si', 'Mn', 'P', 'S', 'Al total', 'N', 'Cr', 'Cu', 'Mo', 'Nb', 'Ni', 'Ti', 'V', 'Nb+Ti+V'].map((h, i) => (
                  <th key={i} className="py-3 px-1 border-r border-white/20 last:border-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr className="border-b border-gray-50">
                <td className="py-4 border-r border-gray-50">0.20</td>
                <td className="py-4 border-r border-gray-50">0.60</td>
                <td className="py-4 border-r border-gray-50 whitespace-nowrap">1.10 - 1.70</td>
                <td className="py-4 border-r border-gray-50">0.025</td>
                <td className="py-4 border-r border-gray-50">0.015</td>
                <td className="py-4 border-r border-gray-50 whitespace-nowrap">0.020 min</td>
                <td className="py-4 border-r border-gray-50">0.025</td>
                <td className="py-4 border-r border-gray-50">0.30</td>
                <td className="py-4 border-r border-gray-50">0.70</td>
                <td className="py-4 border-r border-gray-50">0.10</td>
                <td className="py-4 border-r border-gray-50">0.05</td>
                <td className="py-4 border-r border-gray-50">0.50</td>
                <td className="py-4 border-r border-gray-50">0.03</td>
                <td className="py-4 border-r border-gray-50">0.20</td>
                <td className="py-4 last:border-0">0.22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Tensile Requirements */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase tracking-tight">Tensile requirements</h2>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[600px] text-center text-[10px] md:text-sm">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white font-bold">
                <th className="py-3 px-4 border-r border-white/20">Product thickness</th>
                <th className="py-3 px-4 border-r border-white/20">Yield strength MPA</th>
                <th className="py-3 px-4 border-r border-white/20">Tensile strength MPA</th>
                <th className="py-3 px-4 last:border-0">Elongation A%</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                { thick: 'up to 16mm', yield: '460 min', tensile: '570 - 730', elong: '17 min' },
                { thick: '16mm to 40mm', yield: '445 min', tensile: '570 - 730', elong: '17 min' },
                { thick: 'over 40mm to 60mm', yield: '430 min', tensile: '570 - 730', elong: '17 min' },
                { thick: 'over 60mm to 100mm', yield: '400 min', tensile: '540 - 710', elong: '17 min' }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 border-r border-gray-100 font-medium text-gray-700">{row.thick}</td>
                  <td className="py-4 px-4 border-r border-gray-100 font-medium text-gray-700">{row.yield}</td>
                  <td className="py-4 px-4 border-r border-gray-100 font-medium text-gray-700">{row.tensile}</td>
                  <td className="py-4 px-4 last:border-0 font-medium text-gray-700">{row.elong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Impact Energy Values */}
      <section>
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-tight">Impact energy values for the normalised condition</h2>
        </motion.div>
        <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-sm max-w-7xl mx-auto">
          <table className="w-full min-w-[500px] text-center text-[10px] md:text-sm border-collapse">
            <thead style={{ backgroundColor: brandColor }}>
              <tr className="text-white font-bold">
                <th className="py-3 px-2 border-r border-white/20">Direction</th>
                <th className="py-3 px-2 border-r border-white/20">-20°C</th>
                <th className="py-3 px-2 border-r border-white/20">0°C</th>
                <th className="py-3 px-2 last:border-0">+20°C</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 font-medium">
              <tr className="border-b border-gray-100 bg-gray-50/30">
                <td className="py-4 px-2 border-r border-gray-100 font-medium">Transverse</td>
                <td className="py-4 px-2 border-r border-gray-100 font-medium">30 J min</td>
                <td className="py-4 px-2 border-r border-gray-100 font-medium">40 J min</td>
                <td className="py-4 px-2 font-medium">50 J min</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-2 border-r border-gray-100 font-medium">Longitudinal</td>
                <td className="py-4 px-2 border-r border-gray-100 font-medium">45 J min</td>
                <td className="py-4 px-2 border-r border-gray-100 font-medium">65 J min</td>
                <td className="py-4 px-2 font-medium">75 J min</td>
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